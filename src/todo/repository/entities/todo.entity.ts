import { State } from '../../models/todo.model';

export class TodoEntity {
  approvedBy: string[] = [];
  id: string;
  comment: string;
  state: State;

  constructor(
    id: string,
    comment: string,
    state: State = State.Pending,
    approvedBy: string[] = [],
  ) {
    this.id = id;
    this.comment = comment;
    this.approvedBy = approvedBy;
    this.state = state;
  }
}
