import { Test, TestingModule } from '@nestjs/testing';
import { DutytemplateService } from './dutytemplate.service';

describe('DutytemplateService', () => {
  let service: DutytemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DutytemplateService],
    }).compile();

    service = module.get<DutytemplateService>(DutytemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
