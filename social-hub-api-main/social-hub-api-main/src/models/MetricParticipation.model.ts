import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import MetricModel from "./Metric.model";
// import ParticipationModel from "./Participation.model";

@Entity()
    export default class MetricParticipationModel extends BaseEntity{
        @PrimaryGeneratedColumn()
        id!: number

        @Column({type: "int",})
        value!: number

        @Column({type: "boolean", default: true})
        visible!: boolean
        
        @Column({nullable: true})
        metricId!: number;
        @ManyToOne((_type) => MetricModel, (metric: MetricModel) => metric)// add .metricParticipation quando a entidade participation estiver completa
        @JoinColumn()
        metric!: MetricModel;

        // @Column({nullable: true})
        // participationId!: number;
        // @ManyToOne((_type) => ParticipationModel, (participation: ParticipationModel) => participation.participation)
        // @JoinColumn()
        // participation!: ParticipationModel;

        
    }
