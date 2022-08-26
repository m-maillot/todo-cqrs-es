import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import * as clc from 'cli-color';
import { TodoAddedEvent } from '../impl/todo-added.event';

@EventsHandler(TodoAddedEvent)
export class TodoAddedHandler implements IEventHandler<TodoAddedEvent> {
  handle(event: TodoAddedEvent) {
    console.log(
      clc.greenBright(`TodoAddedEvent(${event.todoId}... Send an email ?`),
    );
  }
}
