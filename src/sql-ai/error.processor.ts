import { InjectQueue, OnQueueFailed, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job, Queue } from 'bull';

@Processor('sql-ai')
export class ErrorProcessor {
  private readonly logger = new Logger(ErrorProcessor.name);
  constructor(@InjectQueue('sql-ai') private readonly sqlAIQueue: Queue) {}

  @OnQueueFailed()
  async handleFailure(job: Job, error: Error) {
    this.logger.error(error.message, {
      transactionId: job.data.transactionId,
    });
  }
}
