import PostModel from "../../models/Post.model"

type PostParams = {
    title: string,
    content: string
}

export default async function createPost(params: PostParams): Promise<PostModel> {
    const posts = new PostModel()
    posts.title = params.title
    posts.content = params.content
    await posts.save()
    return posts
}
