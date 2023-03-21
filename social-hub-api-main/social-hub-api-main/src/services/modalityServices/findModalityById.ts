import ModalityModel from "../../models/Modality.model";


export default function findModalityById(modalityId: number): Promise<ModalityModel| null> {
    return ModalityModel.findOne({
        where: { id: modalityId, visible: true }
    });
}