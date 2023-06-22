import { Test, TestingModule } from '@nestjs/testing';
import { DutyrosterController } from './dutyroster.controller';
import { DutyrosterService } from './dutyroster.service';

describe('DutyrosterController', () => {
  let controller: DutyrosterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DutyrosterController],
      providers: [DutyrosterService],
    }).compile();

    controller = module.get<DutyrosterController>(DutyrosterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
