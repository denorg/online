import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isOnline } from "./mod.ts";

Deno.test("check if online", async (): Promise<void> => {
  assertEquals(await isOnline(), true);
});

Deno.test("check if online with timeout", async (): Promise<void> => {
  assertEquals(await isOnline({ timeout: 1000 }), true);
});
