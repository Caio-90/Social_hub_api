import Reaction from "../../models/Reaction.model";
import findReactionById from "./findReactionById";

export default async function deleteReaction(reactionId: number): Promise<Reaction | null> {
	const reaction = await findReactionById(reactionId)
	if(!reaction) {
		return null
	}

	reaction.visible = false
	reaction.save()
	return reaction
}
