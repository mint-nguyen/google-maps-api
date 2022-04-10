import * as faker from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.default.company.companyName();
    this.catchPhrase = faker.default.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.default.address.latitude()),
      lng: parseFloat(faker.default.address.longitude()),
    };
  }
}
