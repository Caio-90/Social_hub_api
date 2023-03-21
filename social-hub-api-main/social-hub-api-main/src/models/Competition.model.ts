import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn, BaseEntity, JoinColumn, OneToOne, ManyToOne } from "typeorm"
import ModalityModel from "./Modality.model";
import ParticipationModel from "./Participation.model";

@Entity()
export default class CompetitionModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    description!: String;

    @Column()
    classe!: String;

    @Column()
    weight!: String;

    @Column()
    type!: String;

    @Column({ type: "boolean", default: true})
    visible!: boolean
    
    @Column()
    modalityId!: number;
    @ManyToOne((_type) => ModalityModel, (modality: ModalityModel) => modality.competition)
    @JoinColumn()
    modality!: ModalityModel;

    @OneToMany((_type) => ParticipationModel, (participation: ParticipationModel) => participation.competition)
    participation!: ParticipationModel[]

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
