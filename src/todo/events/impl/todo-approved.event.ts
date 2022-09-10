export class TodoApprovedEvent {
  constructor(public readonly todoId: string, readonly approvedBy: string[]) {}
}
