import { assertEquals } from "std/testing/asserts.ts";
import { app } from "/src/main.ts";

Deno.test("should app runs", async () => {
  const res = await app.request("/");
  assertEquals(res.status, 200);
});
