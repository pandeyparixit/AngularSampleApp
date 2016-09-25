
export enum Rating{
    GOOD,
    VERYGOOD
}

export class Feedback {
  constructor(
    public id: number,
    public email: string,
    public twitterAcct: string,
    public userText: string,
    public rating: Rating
  ) {  }
}