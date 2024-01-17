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

import { Milestone } from '../../../modules/milestone/domain'

@Entity()
export class Progress {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({"nullable":true})

progressDate?: string

@Column({"nullable":true})

note?: string

@Column({})

milestoneId: string

@ManyToOne(
  () => Milestone,
  parent => parent.progresss,
  )
  @JoinColumn({ name: 'milestoneId' })

milestone?: Milestone

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
