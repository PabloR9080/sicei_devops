import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  constructor(id: number, nombre: string, apellido: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
