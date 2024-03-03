
/**
 * --------------------------
 * for deno modules
 * --------------------------
 * this file will be symlinked / copied as deps.ts when publishing to 
 * deno.land/x ; when this is used for publishing to jsr,
 * it will cause errors.
 * 
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 * 
 */

////////////////////////////////////////////////////////////////////////////////
// for testing
export {

  assertEquals

} from "https://deno.land/std/assert/mod.ts";
////////////////////////////////////////////////////////////////////////////////
export * as array  from "https://deno.land/x/dallmo_util_array@v1.2.0/mod.ts"; // published deno module
export * as math   from "https://deno.land/x/dallmo_util_math@v1.1.0/mod.ts"; // published deno module
//export * as string from "https://deno.land/x/dallmo_util_string/mod.ts"; // published deno module
export * as yaml   from "https://deno.land/x/dallmo_util_yaml@v1.5.2/mod.ts"; // published deno module
////////////////////////////////////////////////////////////////////////////////
