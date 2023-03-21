import ModalityModel from '../../models/Modality.model'

type ModalityParams = {
    description: String
}

export default async function createModality(params: ModalityParams): Promise<ModalityModel>{
    const modality = new ModalityModel()
    modality.description = params.description
    await modality.save()
    return modality
}