const app = require("../app")();
const request = require("supertest");
const connection = require("../db/connection");
const Journals = require("../db/Journals");
const fakeJournalsData = require("../../fixtures/fakeJournalsData");
const chalk = require("chalk");

describe("journals with mongodb-memory db", () => {
  beforeAll(async () => {
    await Journals.deleteMany({});
    await Journals.insertMany(fakeJournalsData);
  });

  afterAll(() => {
    console.log(chalk`{green.bold Close mongo-memory connection}`);
    connection.close();
  });

  it("should display all journal", async () => {
    return await request(app)
      .get("/journals")
      .expect(200)
      .then(res => expect(res.body.length).toBe(3));
  });

  it("should display a journal data", async () => {
    return await request(app)
      .get("/journals/A")
      .then(res => expect(res.body[0].dl).toBe(10));
  });
});
