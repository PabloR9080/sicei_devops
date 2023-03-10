import { Test, TestingModule } from '@nestjs/testing';
import { AlumnoController } from './alumno.controller';
import { AlumnoService } from './alumno.service';

describe('AlumnoController', () => {
  let controller: AlumnoController;
  let service: AlumnoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlumnoController],
      providers: [AlumnoService],
    }).compile();

    controller = module.get<AlumnoController>(AlumnoController);
    service = module.get<AlumnoService>(AlumnoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('shoyld call the service', async () => {
    const result = [{ id: 1, nombre: 'Juan' , apellido: 'Perez'}];
    jest.spyOn(service, 'findAll').mockImplementation(() =>  result ); 

    expect(await controller.findAll()).toBe(result);

  });
});
