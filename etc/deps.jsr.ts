
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

} from "jsr:@std/assert@^0.218.2";
////////////////////////////////////////////////////////////////////////////////
export * as array  from "jsr:@dallmo/util-array@^1.2.0";
export * as math   from "jsr:@dallmo/util-math@^1.1.0";
export * as string from "jsr:@dallmo/util-string@^1.2.0";
export * as yaml   from "jsr:@dallmo/util-yaml@^1.5.2";
////////////////////////////////////////////////////////////////////////////////
