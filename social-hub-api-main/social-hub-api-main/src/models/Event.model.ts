import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn, BaseEntity, JoinColumn, OneToOne, ManyToOne } from "typeorm"
import ParticipationModel from "./Participation.model";

@Entity()
export default class EventModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: String;

    @Column()
    name!: String

    @Column()
    description!: String;

    @Column()
    localization!: String;

    @Column({ type: "boolean", default: true})
    visible!: boolean
    
    @OneToMany((_type) => ParticipationModel, (participation: ParticipationModel) => participation.competition)
    participation!: ParticipationModel[]

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
