import { Test, TestingModule } from '@nestjs/testing';
import { TeamroleController } from './teamrole.controller';
import { TeamroleService } from './teamrole.service';

describe('TeamroleController', () => {
  let controller: TeamroleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamroleController],
      providers: [TeamroleService],
    }).compile();

    controller = module.get<TeamroleController>(TeamroleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
