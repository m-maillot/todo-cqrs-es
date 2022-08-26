import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import * as clc from 'cli-color';
import { TodoAddedEvent } from '../impl/todo-added.event';

@EventsHandler(TodoAddedEvent)
export class TodoAddedComputeStatsHandler
  implements IEventHandler<TodoAddedEvent>
{
  handle(event: TodoAddedEvent) {
    console.log(
      clc.greenBright(
        `TodoAddedComputeStatsHandler(${event.todoId}... compute new stats`,
      ),
    );
  }
}
