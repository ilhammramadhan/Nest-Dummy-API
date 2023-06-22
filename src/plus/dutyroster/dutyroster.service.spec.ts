import { Test, TestingModule } from '@nestjs/testing';
import { DutyrosterService } from './dutyroster.service';

describe('DutyrosterService', () => {
  let service: DutyrosterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DutyrosterService],
    }).compile();

    service = module.get<DutyrosterService>(DutyrosterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
