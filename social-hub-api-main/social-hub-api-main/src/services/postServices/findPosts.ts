import PostModel from "../../models/Post.model"

export default async function findPosts(): Promise<PostModel[] | null> {
  return PostModel.find({
    where: { 
      visible: true
    },
    relations: {
      user: true,
      comments: true,
      reaction: true
    }
  })
}