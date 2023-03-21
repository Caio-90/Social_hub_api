import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn, BaseEntity, JoinColumn, OneToOne, ManyToOne } from "typeorm"
import AthleteModel from "./Athlete.model";
import CompetitionModel from "./Competition.model";
import EventModel from "./Event.model";

@Entity()
export default class ParticipationModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    placing!: String;

    @Column()
    note!: String;

    @Column()
    proof!: String;

    @Column()
    status!: String;

    @Column({ type: "boolean", default: true})
    visible!: boolean
    
    @Column()
    athleteId!: number;
    @ManyToOne((_type) => AthleteModel, (athlete: AthleteModel) => athlete.participation)
    @JoinColumn()
    athlete!: AthleteModel;

    @Column()
    competitionId!: number;
    @ManyToOne((_type) => CompetitionModel, (competition: CompetitionModel) => competition.participation)
    @JoinColumn()
    competition!: CompetitionModel;

    @Column()
    eventId!: number;
    @ManyToOne((_type) => EventModel, (event: EventModel) => event.participation)
    @JoinColumn()
    event!: EventModel;

    
    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
