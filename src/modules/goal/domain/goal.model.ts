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

import { User } from '../../../modules/user/domain'

import { Milestone } from '../../../modules/milestone/domain'

import { Resource } from '../../../modules/resource/domain'

@Entity()
export class Goal {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

title: string

@Column({"nullable":true})

description?: string

@Column({"nullable":true,"type":"numeric"})

year?: number

@Column({})

userId: string

@ManyToOne(
  () => User,
  parent => parent.goals,
  )
  @JoinColumn({ name: 'userId' })

user?: User

@OneToMany(
  () => Milestone,
  child => child.goal,
  )

milestones?: Milestone[]

@OneToMany(
  () => Resource,
  child => child.goal,
  )

resources?: Resource[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
