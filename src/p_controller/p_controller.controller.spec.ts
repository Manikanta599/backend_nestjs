import { Test, TestingModule } from '@nestjs/testing';
import { PControllerController } from './p_controller.controller';

describe('PControllerController', () => {
  let controller: PControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PControllerController],
    }).compile();

    controller = module.get<PControllerController>(PControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
