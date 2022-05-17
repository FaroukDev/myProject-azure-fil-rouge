const request = require("supertest");
const express = require("express");
const router = require("../routes/Students.js");
const config = require("../config/config.json");

// afterAll(() => config.sequelize.close());

const app = new express();

app.use("/", router);

describe("list of students", function () {
  test("responds to / ", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    const expected = {
      id: 1,
      name: "farouk",
      description: "hello les devs :)",
      grade: "1st grade",
      createdAt: "2022-03-24T20:53:42.000Z",
      updatedAt: "2022-03-24T20:53:42.000Z",
    };
    const actual = {
      id: 1,
      name: "farouk",
      description: "hello les devs :)",
      grade: "1st grade",
      createdAt: "2022-03-24T20:53:42.000Z",
      updatedAt: "2022-03-24T20:53:42.000Z",
    };
    expect(actual).toMatchObject(expected);
  });
});
