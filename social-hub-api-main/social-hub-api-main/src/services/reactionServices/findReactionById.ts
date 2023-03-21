import Reaction from "../../models/Reaction.model"

export default function findReactionById(reactionId: number): Promise<Reaction | null> {
	return Reaction.findOne({
		where: { id: reactionId, visible: true },
		relations: {
			user: true,
			post: true
		}
	})
}
