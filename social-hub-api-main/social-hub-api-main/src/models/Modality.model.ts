import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, UpdateDateColumn, CreateDateColumn, OneToMany } from "typeorm";
import CompetitionModel from "./Competition.model";

@Entity({name: "modality"})
export default class ModalityModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    description!: String;
    
    @OneToMany((_type) => CompetitionModel, (competition: CompetitionModel) => competition.modality)
    competition!: ModalityModel[]

    @Column({ type: "boolean", default: true})
    visible!: boolean

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}