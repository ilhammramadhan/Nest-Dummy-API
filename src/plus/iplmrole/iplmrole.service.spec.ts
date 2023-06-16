import { Test, TestingModule } from '@nestjs/testing';
import { IplmroleService } from './iplmrole.service';

describe('IplmroleService', () => {
  let service: IplmroleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IplmroleService],
    }).compile();

    service = module.get<IplmroleService>(IplmroleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
