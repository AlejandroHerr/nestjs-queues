import { InjectQueue } from '@nestjs/bull';
import { Controller, HttpStatus, Logger, Post, Res } from '@nestjs/common';
import { Queue } from 'bull';
import { v4 as uuidv4 } from 'uuid';
import { Response } from 'express';

@Controller('sql-ai')
export class SqlAiController {
  private readonly logger = new Logger(SqlAiController.name);
  constructor(@InjectQueue('sql-ai') private readonly sqlAIQueue: Queue) {}

  @Post('webhook')
  async webhook(@Res() res: Response) {
    await this.sqlAIQueue.add('process-chat', {
      chatId: `chat-id-${new Date().toISOString()}`,
      threadId: `thread-id-${new Date().toISOString()}`,
      transactionId: uuidv4(),
    });

    res.status(HttpStatus.CREATED).json();
  }
}
