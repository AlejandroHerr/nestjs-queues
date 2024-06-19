import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job, Queue } from 'bull';

@Processor('sql-ai')
export class SummaryProcessor {
  private readonly logger = new Logger(SummaryProcessor.name);
  constructor(@InjectQueue('sql-ai') private readonly sqlAIQueue: Queue) {}

  @Process('summary-generated')
  handleSummaryGenerated(job: Job) {
    this.logger.debug('Start handling summary generated...', {
      transactionId: job.data.transactionId,
    });

    if (Math.random() > 0.25) {
      throw new Error('Error in handleSummaryGenerated!');
    }

    this.logger.debug('Handling summary generatedcompleted', {
      transactionId: job.data.transactionId,
    });
  }
}
