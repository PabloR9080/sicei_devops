import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { arrAlumnos } from './alumnos';
@Injectable()
export class AlumnoService {
  create(_createAlumnoDto: CreateAlumnoDto) {
    return 'This action adds a new alumno';
  }

  findAll() {
    return arrAlumnos;
  }

  findOne(id: number) {
    return id >= 0 && id <= arrAlumnos.length
      ? arrAlumnos.find((alumno) => alumno.id == id)
      : { message: 'Alumno no encontrado' };
  }

  update(id: number, _updateAlumnoDto: UpdateAlumnoDto) {
    return `This action updates a #${id} alumno`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }
}
