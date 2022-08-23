import { Module } from '@nestjs/common';
import { TodosGameModule } from './todo/todos.module';

@Module({
  imports: [TodosGameModule],
})
export class ApplicationModule {}
