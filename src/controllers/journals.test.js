const app = require("../app")();
const request = require("supertest");

describe("journals", () => {
  it("should display the journals", () => {
    return request(app)
      .get("/journals")
      .expect(200);
  });

  it("gets journal id after 5", () => {
    return request(app)
      .get("/journals/6")
      .expect(500);
  });

  it("gets journal id below 5", () => {
    return request(app)
      .get("/journals/4")
      .expect(200);
  });
});
