import Reaction from "../../models/Reaction.model"

export default async function findAllReactions(): Promise<Reaction[] | null> {
	const reactions = await Reaction.find({ relations: { 
			user: true,
			post: true
		},
	});
	return reactions.filter(r => r.visible == true);
}
