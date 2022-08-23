import { AggregateRoot } from '@nestjs/cqrs';

export class Todo extends AggregateRoot {
  constructor(readonly id: string, readonly comment: string) {
    super();
  }
}
