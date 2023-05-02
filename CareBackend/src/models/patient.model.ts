import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patient')
export class patient{
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  readonly id?: number;

  @Column('varchar', { length: 255, name: 'name', nullable: false })
  readonly name: string;

  @Column('integer', { name: 'Gender', nullable: false })
  readonly Gender: string;

  @Column('integer', { name: 'Phoneno', nullable: true })
  readonly quantity: number;

}
