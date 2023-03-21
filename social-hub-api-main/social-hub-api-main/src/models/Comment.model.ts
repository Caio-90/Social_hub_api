import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn, BaseEntity, OneToMany } from "typeorm"
import PostModel from "./Post.model"
import UserModel from "./User.model"
import ReactionModel from "./Reaction.model"

@Entity()
export default class CommentModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "text" })
    content!: string;

    @Column({ type: "boolean", default: true})
    visible!: boolean

    @Column({ nullable: true})
    repliedCommentId!: number
    @OneToMany((_type) => CommentModel, (comment: CommentModel) => comment.repliedCommentId)
    @JoinColumn()
    repliedComment!: CommentModel

    @Column({ nullable: true })
    userId!: number;
    @ManyToOne((_type) => UserModel, (user: UserModel) => user.comment)
    @JoinColumn()
    user!: UserModel;

    @Column({ nullable: true })
    postId!: number;
    @ManyToOne((_type) => PostModel, (post: PostModel) => post.comments)
    @JoinColumn()
    post!: PostModel;

    @Column({ nullable: true })
    reactionId!: number;
    @OneToMany((_type) => ReactionModel, (reaction: ReactionModel) => reaction.comment)
    @JoinColumn()
    reaction!: ReactionModel;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
