import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoAddedEvent } from '../events/impl/todo-added.event';

@Injectable()
export class TodosSagas {
  @Saga()
  todoAdded = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(TodoAddedEvent),
      map((event) => {
        console.log(
          clc.redBright(
            `Inside [TodosSagas] Saga with event ${JSON.stringify(
              event,
              null,
              2,
            )}`,
          ),
        );
        return undefined;
      }),
    );
  };
}
