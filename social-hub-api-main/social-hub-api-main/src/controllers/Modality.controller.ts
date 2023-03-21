import { Request, Response } from "express"
import ModalityModel from "../models/Modality.model"
import createModality from "../services/modalityServices/createModality"
import findModalityById from "../services/modalityServices/findModalityById";


export default class ModalityController {

    public async list(request: Request, response: Response): Promise<Response> {
        const modalities = await ModalityModel.find({where: {visible: true }});
        return response.send(modalities);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const modalityId = parseInt(request.params.id);

        if (isNaN(modalityId)) {
            return response.send({
                message:
                    "Invalid ID in request! Please try again later",
            });
        }
        const modality = await findModalityById(modalityId);
        if (modality) {
            return response.send(modality);
        }
        return response.send({ message: "Information not exists" });
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const modalityParams = {
            description: request.body.description
        }
        const modality = await createModality(modalityParams);
        return response.send(modality)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const modalityId = parseInt(request.params.id)
        if (isNaN(modalityId)) {
            return response.send({
                message: "Invalid ID in request! Please try again later."
            });
        }
        const modality = await findModalityById(modalityId)
        if (modality) {
            modality.description = request.body.description
            modality.save()
            return response.send(modality)
        }
        return response.send({
            message: "Information not exists"
        })
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const modalityId = parseInt(request.params.id)
        if (isNaN(modalityId)) {
            return response.send({
                message: "ID da modalidade inválido" 
            })
        }
        const modality = await findModalityById(modalityId)
        if (modality) {
            modality.visible = false
            modality.save()
            return response.send(modality)
        }
        return response.send({ message: "A modalidade não pode ser apagada" })
    }
}

