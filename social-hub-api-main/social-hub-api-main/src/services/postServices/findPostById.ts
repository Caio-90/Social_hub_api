import PostModel from "../../models/Post.model";

export default async function(postId: number): Promise<PostModel | null> {
    const post = await PostModel.findOne({
        where: {
            id: postId,
            visible: true
        },
    })

    return post
}