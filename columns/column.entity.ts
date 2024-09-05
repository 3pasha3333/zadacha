import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Column {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userId: number; // Ссылка на владельца (пользователя)
}
