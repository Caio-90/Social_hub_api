import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export default class MetricModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: "varchar", length: 100})
  description!: string

  @Column({type: "boolean", default: true})
  visible!: boolean
}