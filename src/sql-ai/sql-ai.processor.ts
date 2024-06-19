import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job, Queue } from 'bull';

@Processor('sql-ai')
export class SqlAiProcessor {
  private readonly logger = new Logger(SqlAiProcessor.name);
  constructor(@InjectQueue('sql-ai') private readonly sqlAIQueue: Queue) {}

  @Process('process-chat')
  async handleProcessChat(job: Job) {
    this.logger.debug('Start processing chat...', {
      transactionId: job.data.transactionId,
    });

    if (Math.random() > 0.25) {
      throw new Error('Error in handleProcessedChat!');
    }

    await this.sqlAIQueue.add('summary-generated', {
      summar: 'summary',
    });

    this.logger.debug('Processing chat completed', {
      transactionId: job.data.transactionId,
    });
  }
}
