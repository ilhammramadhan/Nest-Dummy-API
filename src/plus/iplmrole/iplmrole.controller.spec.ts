import { Test, TestingModule } from '@nestjs/testing';
import { IplmroleController } from './iplmrole.controller';
import { IplmroleService } from './iplmrole.service';

describe('IplmroleController', () => {
  let controller: IplmroleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IplmroleController],
      providers: [IplmroleService],
    }).compile();

    controller = module.get<IplmroleController>(IplmroleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
