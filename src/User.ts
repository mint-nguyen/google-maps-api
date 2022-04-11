import * as faker from "@faker-js/faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.default.name.firstName();
    this.location = {
      lat: parseFloat(faker.default.address.latitude()),
      lng: parseFloat(faker.default.address.longitude()),
    };
  }

  markerContent() {
    return this.name;
  }
}
