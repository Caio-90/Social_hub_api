import { 
	Entity, 
	BaseEntity, 
	PrimaryGeneratedColumn, 
	Column, 
	ManyToOne,
	JoinColumn,
	CreateDateColumn,
	UpdateDateColumn
} from "typeorm"

// Trocar user por pessoa quando a classe for criada
import UserModel from "./User.model"
import PostModel from "./Post.model"
import CommentModel from "./Comment.model"


@Entity()
export default class Reaction extends BaseEntity {
	@PrimaryGeneratedColumn() 
	id!: number;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updateAt!: Date;

	@Column()
	reaction!: string;

	@Column({ type: "boolean", default: true})
	visible!: boolean

	@ManyToOne(
		(_type) => UserModel,
		(user: UserModel) => user.id
	)	
	@JoinColumn()
    user!: UserModel;

	@ManyToOne(
		(_type) => PostModel,
		(post: PostModel) => post.id
	)	
	@JoinColumn()
	post!: PostModel;

	@ManyToOne(
		(_type) => CommentModel,
		(comment: CommentModel) => comment.id
	)	
	@JoinColumn()
	comment!: CommentModel;
}
