export class Coupon {

  public constructor(
    public id: string,
    public name: string,
    public shortDescription: string,
    public longDescription: string,
    public imageUrl: string,
    public categories: string[],
    public validLocations: string[],
    public expirationDate: Date,
  ) {}

}
