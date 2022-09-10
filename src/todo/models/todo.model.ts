import { AggregateRoot } from '@nestjs/cqrs';
import { TodoAddedEvent } from '../events/impl/todo-added.event';
import { TodoEditedEvent } from '../events/impl/todo-edited.event';
import { TodoAcceptedEvent } from '../events/impl/todo-accepted.event';
import { TodoApprovedEvent } from '../events/impl/todo-approved.event';

export enum State {
  Pending = 'pending',
  Accepted = 'accepted',
}

export class Todo extends AggregateRoot {
  private approvedBy: string[] = [];
  id: string;
  comment: string;
  status: State;

  constructor(
    id: string,
    comment: string,
    state: State = State.Pending,
    approvedBy: string[] = [],
  ) {
    super();
    this.approvedBy = approvedBy;
    this.id = id;
    this.comment = comment;
    this.status = state;
  }

  added() {
    this.apply(new TodoAddedEvent(this.id));
  }

  edited(newComment: string) {
    this.apply(new TodoEditedEvent(this.id, newComment));
  }

  approved(username: string) {
    this.apply(new TodoApprovedEvent(this.id, this.approvedBy));
  }

  accepted() {
    this.apply(new TodoAcceptedEvent(this.id));
  }
}
