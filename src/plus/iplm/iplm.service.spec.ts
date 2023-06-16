import { Test, TestingModule } from '@nestjs/testing';
import { IplmService } from './iplm.service';

describe('IplmService', () => {
  let service: IplmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IplmService],
    }).compile();

    service = module.get<IplmService>(IplmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
