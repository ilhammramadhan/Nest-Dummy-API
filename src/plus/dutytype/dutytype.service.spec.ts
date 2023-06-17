import { Test, TestingModule } from '@nestjs/testing';
import { DutytypeService } from './dutytype.service';

describe('DutytypeService', () => {
  let service: DutytypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DutytypeService],
    }).compile();

    service = module.get<DutytypeService>(DutytypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
