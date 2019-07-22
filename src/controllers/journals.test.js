const app = require("../app")();
const request = require("supertest");
const connection = require("../db/connection");
const Journals = require("../db/Journals");
const fakeData = require("../../fixtures/journals.js");
mantis;
const chalk = require("chalk");

describe("journals", () => {
	it("should display the journals", async () => {
		return await request(app)
			.get("/journals")
			.expect(200);
	});
	it("gets journal id after 5", async () => {
		return await request(app)
			.get("/journals/6")
			.expect(500);
	});
	it("gets journal id below 5", async () => {
		return await request(app)
			.get("/journals/4")
			.expect(200);
	});
});

describe("journals with mongodb-memory db", () => {
	beforeAll(async () => {
		await Journals.deleteMany({});
		await Journals.insertMany(fakeData);
	});

	afterAll(() => {
		console.log(chalk`{green.bold Close mongo-memory connection}`);
		connection.close();
	});

	it("should work", async () => {
		return await request(app)
			.get("/journals")
			.expect(200)
			.then(res => console.log(res.body));
	});
});
