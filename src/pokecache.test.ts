import { Cache } from "./pokecache.js";
import { test, expect } from "vitest";

test("cache stores and removes data after interval", async () => {
  const cache = new Cache(500);

  cache.add("test-key", "test-value");

  const value = cache.get<string>("test-key");

  expect(value).toBe("test-value");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const removed = cache.get<string>("test-key");

  expect(removed).toBe(undefined);

  cache.stopReapLoop();
});