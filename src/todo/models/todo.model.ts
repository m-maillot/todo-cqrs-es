import { AggregateRoot } from '@nestjs/cqrs';
import { TodoAddedEvent } from '../events/impl/todo-added.event';

export class Todo extends AggregateRoot {
  constructor(readonly id: string, readonly comment: string) {
    super();
  }

  added() {
    this.apply(new TodoAddedEvent(this.id));
  }
}
