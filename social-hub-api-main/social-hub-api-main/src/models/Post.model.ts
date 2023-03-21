import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, JoinColumn, BaseEntity } from "typeorm"
import CommentModel from "./Comment.model"
import UserModel from "./User.model"
import ReactionModel from "./Reaction.model"

@Entity()
export default class PostModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column({ type: "text" })
    content!: string;

    @Column({ type: "boolean", default: true})
    visible!: boolean

    @Column({ nullable: true })
    reactionId!: number;
    @OneToMany((_type) => ReactionModel, (reaction: ReactionModel) => reaction.post)
    @JoinColumn()
    reaction!: ReactionModel;

    @Column({ nullable: true })
    userId!: number;
    @ManyToOne((_type) => UserModel, (user: UserModel) => user.post)
    @JoinColumn()
    user!: UserModel;

    @OneToMany((_type) => CommentModel, (comment: CommentModel) => comment.post)
    @JoinColumn()
    comments!: Array<CommentModel>;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
