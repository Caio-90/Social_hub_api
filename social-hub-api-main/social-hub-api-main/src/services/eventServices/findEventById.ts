import EventModel from "../../models/Event.model";


export default function findEventById(eventId: number): Promise<EventModel| null> {
    return EventModel.findOne({
        where: { id: eventId, visible: true }
    });
}