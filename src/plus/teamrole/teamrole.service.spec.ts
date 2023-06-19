import { Test, TestingModule } from '@nestjs/testing';
import { TeamroleService } from './teamrole.service';

describe('TeamroleService', () => {
  let service: TeamroleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamroleService],
    }).compile();

    service = module.get<TeamroleService>(TeamroleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
