import { Test, TestingModule } from '@nestjs/testing';
import { SqlAiController } from './sql-ai.controller';

describe('SqlAiController', () => {
  let controller: SqlAiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SqlAiController],
    }).compile();

    controller = module.get<SqlAiController>(SqlAiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
