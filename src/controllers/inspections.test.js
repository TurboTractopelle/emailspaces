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
      .get("/inspections/cities")
      .expect(200)
      .then(res => {
        expect(res.body.nbTotal).toBe(2);
      });
  });

  it("loads the sectors", () => {
    return request(app)
      .get("/inspections/sectors")
      .expect(200)
      .then(res => {
        expect(res.body.length).toBe(2);
        expect(res.body[0]._id).toBe("Cigarette Retail Dealer - 127");
      });
  });

  it("loads the business", () => {
    return request(app)
      .get("/inspections/VYACHESLAV%20KANDZHANOV")
      .expect(200)
      .then(res => {
        expect(res.body.length).toBe(1);
      });
  });
});
