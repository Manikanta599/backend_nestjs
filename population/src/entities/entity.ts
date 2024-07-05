import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pop_tab' })
export class ProEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  village: string;

  @Column()
  pincode: string;

  @Column()
  email: string;

  @Column()
  phno: string;

  @Column()
  gender: string;

  @Column()
  dob: string;
}




