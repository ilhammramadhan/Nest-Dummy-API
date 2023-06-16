import { Test, TestingModule } from '@nestjs/testing';
import { IplmController } from './iplm.controller';
import { IplmService } from './iplm.service';

describe('IplmController', () => {
  let controller: IplmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IplmController],
      providers: [IplmService],
    }).compile();

    controller = module.get<IplmController>(IplmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
