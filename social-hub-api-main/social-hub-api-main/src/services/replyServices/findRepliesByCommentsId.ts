import CommentModel from "../../models/Comment.model"

export default function findRepliesByCommentsId(commentId: number): Promise<CommentModel[] | null> {
  return CommentModel.find({
    where: {
      repliedCommentId: commentId,
      visible: true
    }
  })
}