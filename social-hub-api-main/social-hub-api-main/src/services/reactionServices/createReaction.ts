import ReactionModel from "../../models/Reaction.model"

type ReactionParams = { reaction: string }

export default async function createReaction(params: ReactionParams): Promise<ReactionModel> {
	const reaction = new ReactionModel()
	reaction.reaction = params.reaction
	await reaction.save()
	return reaction
}
