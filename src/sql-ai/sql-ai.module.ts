import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
// import { AudioController } from './audio.controller';
import { SqlAiProcessor } from './sql-ai.processor';
import { SqlAiController } from './sql-ai.controller';
import { SummaryProcessor } from './summary.processor';
import { ErrorProcessor } from './error.processor';
@Module({
  imports: [
    BullModule.registerQueue({
      name: 'sql-ai',
    }),
  ],
  controllers: [SqlAiController],
  providers: [SqlAiProcessor, SummaryProcessor, ErrorProcessor],
})
export class SqlAiModule {}
