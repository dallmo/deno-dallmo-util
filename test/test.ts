// deno test methods
import { assertEquals } from "../deps.ts";

// the module to be tested
import { test } from "../mod.ts";

/////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-array", () => {

  assertEquals( test.array(), "ok");

}); // Deno.test
/////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-math", () => {

  assertEquals( test.math(), "ok");

}); // Deno.test
/////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-string", () => {

  assertEquals( test.string(), "ok");

}); // Deno.test
/////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-timer", () => {

  assertEquals( test.timer(), "ok");

}); // Deno.test
/////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-timestamp", () => {

  assertEquals( test.timestamp(), "ok");

}); // Deno.test
/////////////////////////////////////////////////////////////

