// deno test methods
import { assertEquals } from "../etc/deps.ts";

// the methods of this module to be tested
import * as dallmo_util from "../mod.ts";

/////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-array", () => {

  assertEquals( dallmo_util.test.array(), "ok");

}); // Deno.test
/////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-math", () => {

  assertEquals( dallmo_util.test.math(), "ok");

}); // Deno.test
/////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-string", () => {

  assertEquals( dallmo_util.test.string(), "ok");

}); // Deno.test
/////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-yaml", () => {

  assertEquals( dallmo_util.test.yaml(), "ok");

}); // Deno.test
/////////////////////////////////////////////////////////////
Deno.test( "test child module string : cap / capitalize", () => {

  const input_string: string = "abcde";
  let result: string;

  result = dallmo_util.string.case_title( input_string );
  assertEquals( result, "Abcde");

  result = dallmo_util.string.case_upper( input_string );
  assertEquals( result, "ABCDE");  

}); // Deno.test
/////////////////////////////////////////////////////////////

