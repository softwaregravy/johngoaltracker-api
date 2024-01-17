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

import { Progress } from '../../../modules/progress/domain'

@Entity()
export class Milestone {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

title: string

@Column({"nullable":true})

description?: string

@Column({"nullable":true,"type":"numeric"})

quarter?: number

@Column({})

goalId: string

@ManyToOne(
  () => Goal,
  parent => parent.milestones,
  )
  @JoinColumn({ name: 'goalId' })

goal?: Goal

@OneToMany(
  () => Progress,
  child => child.milestone,
  )

progresss?: Progress[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
