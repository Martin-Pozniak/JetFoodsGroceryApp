export class Coupon {

  public constructor(
    public id: string,
    public name: string,
    public cashierCode: string,
    public shortDescription: string,
    public longDescription: string,
    public imageUrl: string,
    public categoryIds: string[],
    public validLocationIds: string[],
    public expirationDate: Date,
  ) {}

}
