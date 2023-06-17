import { Test, TestingModule } from '@nestjs/testing';
import { DutytemplateController } from './dutytemplate.controller';
import { DutytemplateService } from './dutytemplate.service';

describe('DutytemplateController', () => {
  let controller: DutytemplateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DutytemplateController],
      providers: [DutytemplateService],
    }).compile();

    controller = module.get<DutytemplateController>(DutytemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
