export class User {

  constructor(
    public id: string,
    public firstName: string,
    public lastname: string,
    public birthday: Date,
    public email: string,
    public roles: string[], /* Create a role object to control roles */
    public mainStore: string
  ) {}

}
