import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { SqlAiModule } from './sql-ai/sql-ai.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6380,
      },
    }),
    SqlAiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
