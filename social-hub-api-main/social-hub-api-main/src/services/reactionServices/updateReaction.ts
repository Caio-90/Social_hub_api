import Reaction from "../../models/Reaction.model";
import findReactionById from "./findReactionById";

export default async function deleteReaction(reactionId: number, newReaction: string): Promise<Reaction | null> {
	const reaction = await findReactionById(reactionId);
	if (!reaction) { return null; }
	reaction.reaction = newReaction;
	reaction.save();
	return reaction;
}
