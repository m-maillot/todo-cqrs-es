import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoApprovedEvent } from '../events/impl/todo-approved.event';
import { AcceptTodoCommand } from '../commands/impl/accept-todo.command';

@Injectable()
export class AcceptedTodosSagas {
  @Saga()
  todoAccepted = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(TodoApprovedEvent),
      map((event) => {
        if (event.approvedBy.length === 3) {
          return new AcceptTodoCommand(event.todoId);
        }
        return undefined;
      }),
    );
  };
}
