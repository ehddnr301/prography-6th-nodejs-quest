import app from "../../../src/app";
import supertest from "supertest";

const testClient = supertest(app);

describe("testTodo", () => {
  test("orderTodo", async () => {
    const res = await testClient.get("/todos?order[createdAt]=desc");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toEqual(res.body.sort());
  });
});
