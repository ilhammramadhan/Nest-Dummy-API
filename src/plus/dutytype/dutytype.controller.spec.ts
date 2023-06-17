import { Test, TestingModule } from '@nestjs/testing';
import { DutytypeController } from './dutytype.controller';
import { DutytypeService } from './dutytype.service';

describe('DutytypeController', () => {
  let controller: DutytypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DutytypeController],
      providers: [DutytypeService],
    }).compile();

    controller = module.get<DutytypeController>(DutytypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
