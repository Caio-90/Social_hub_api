import EventModel from '../../models/Event.model'

type EventParams = {
    date: String
    name: String    
    description: String
    localization: String
}

export default async function createEvent(params: EventParams): Promise<EventModel>{
    const event = new EventModel()
    event.description = params.description
    event.date = params.date
    event.name = params.name
    event.localization = params.localization
    await event.save()
    return event
}