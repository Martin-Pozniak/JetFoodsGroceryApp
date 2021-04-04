export class User {

  constructor(
    public id: string,
    public firstName: string,
    public lastname: string,
    public birthday: Date,
    public email: string,
    public roles: string[], /* Create a role object to control roles */
    public mainStore: string,
    private _token?: string,
    private _tokenExpirationDate?: Date
  ) {}

    get token() {

      if ( !this._tokenExpirationDate || this._tokenExpirationDate <= new Date() ){
        return null;
      }
      return this._token;

    }

}
