import { Module } from '@nestjs/common';
import { TodosModule } from './todo/todos.module';

@Module({
  imports: [TodosModule],
})
export class ApplicationModule {}
