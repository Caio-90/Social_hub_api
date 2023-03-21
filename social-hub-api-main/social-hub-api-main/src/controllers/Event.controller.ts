import { Request, Response } from "express"
import EventModel from "../models/Event.model"
import createEvent from "../services/eventServices/createEvent"
import findEventById from "../services/eventServices/findEventById";


export default class EventController {

    public async list(request: Request, response: Response): Promise<Response> {
        const events = await EventModel.find({where: {visible: true }});
        return response.send(events);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const eventId = parseInt(request.params.id);

        if (isNaN(eventId)) {
            return response.send({
                message:
                    "Invalid Event ID in request SHOW! Please try again later",
            });
        }
        const event = await findEventById(eventId);
        if (event) {
            return response.send(event);
        }
        return response.send({ message: "Information not exists" });
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const eventParams = {
            date: request.body.date,
            name: request.body.name,
            description: request.body.description,
            localization: request.body.localization
        }
        const event = await createEvent(eventParams);
        return response.send(event)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const eventId = parseInt(request.params.id)
        if (isNaN(eventId)) {
            return response.send({
                message: "Invalid Event ID in request update! Please try again later."
            });
        }
        const event = await findEventById(eventId)
        if (event) {
            event.date = request.body.date
            event.name = request.body.name
            event.description = request.body.description
            event.localization = request.body.localization
            event.save()
            return response.send(event)
        }
        return response.send({
            message: "Information not exists"
        })
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const eventId = parseInt(request.params.id)
        if (isNaN(eventId)) {
            return response.send({
                message: "ID do evento inválido" 
            })
        }
        const event = await findEventById(eventId)
        if (event) {
            event.visible = false
            event.save()
            return response.send(event)
        }
        return response.send({ message: "O evento não pode ser apagado" })
    }
}

