import { Test, TestingModule } from '@nestjs/testing';
import { PServiceService } from './p_service.service';

describe('PServiceService', () => {
  let service: PServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PServiceService],
    }).compile();

    service = module.get<PServiceService>(PServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
