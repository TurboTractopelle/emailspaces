const app = require("../app")();
const request = require("supertest");
const connection = require("../db/connection");
const Inspections = require("../db/Inspections");
const fakeInspectionsData = require("../../fixtures/fakeInspectionsData");
const chalk = require("chalk");

describe("Inspections routes", () => {
  beforeAll(async () => {
    await Inspections.deleteMany();
    await Inspections.insertMany(fakeInspectionsData);
  });
  afterAll(() => {
    connection.close();
  });

  it("load all the inspections", () => {
    return request(app)
      .get("/inspections")
      .expect(200)
      .then(res => {
        expect(res.body.length).toBe(3);
      });
  });

  it("load only New York", () => {
    return request(app)
      .get("/inspections?city=New York")
      .expect(200)
      .then(res => {
        expect(res.body.length).toBe(2);
      });
  });

  it("loads the cities list", () => {
    return request(app)
      .get("/inspections/city")
      .expect(200)
      .then(res => {
        expect(res.body.nbTotal).toBe(2);
      });
  });
});
