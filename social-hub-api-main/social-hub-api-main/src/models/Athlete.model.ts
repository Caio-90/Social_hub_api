import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity, Column, OneToMany } from "typeorm";
import ParticipationModel from "./Participation.model";
import User from "./User.model";

@Entity({ name: "athlete" })
export default class Athlete extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User
    
    @OneToMany((_type) => ParticipationModel, (participation: ParticipationModel) => participation.athlete)
    participation!: ParticipationModel[]

    @Column({ type: "boolean", default: true })
    visible!: boolean
}