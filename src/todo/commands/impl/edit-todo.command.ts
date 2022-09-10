export class EditTodoCommand {
  constructor(public readonly id: string, public readonly comment: string) {}
}
