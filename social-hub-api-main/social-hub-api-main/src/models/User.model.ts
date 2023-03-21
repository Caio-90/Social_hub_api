import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn, BaseEntity, JoinColumn, OneToOne } from "typeorm"
import PostModel from "./Post.model"
import CommentModel from "./Comment.model"
import Athlete from "./Athlete.model";

@Entity()
export default class UserModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: String;

    @Column()
    lastName!: String;

    @Column()
    phone!: String;

    @Column()
    birthDate!: Date;

    @Column()
    email!: String;

    @Column()
    password!: String;

    @Column({ type: "boolean", default: true})
    visible!: boolean

    @OneToMany((_type) => PostModel, (post: PostModel) => post.user)
    post!: PostModel[]

    @OneToMany((_type) => CommentModel, (comment: CommentModel) => comment.user)
    comment!: CommentModel[]

    @OneToOne(() => Athlete)
    @JoinColumn()
    athlete!: Athlete

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
