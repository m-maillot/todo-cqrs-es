export class TodoEditedEvent {
  constructor(
    public readonly todoId: string,
    public readonly newComment: string,
  ) {}
}
