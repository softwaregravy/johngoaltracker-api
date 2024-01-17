import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Goal } from '../../../modules/goal/domain'

@Entity()
export class Resource {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

url: string

@Column({"nullable":true})

description?: string

@Column({})

goalId: string

@ManyToOne(
  () => Goal,
  parent => parent.resources,
  )
  @JoinColumn({ name: 'goalId' })

goal?: Goal

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
