
/**
 * --------------------------
 * for jsr modules
 * --------------------------
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 * 
 * version contraints are required when publishing to jsr
 */

////////////////////////////////////////////////////////////////////////////////
// for testing
export {

  assertEquals

} from "jsr:@std/assert@^1.0.13";
////////////////////////////////////////////////////////////////////////////////
export * as array  from "jsr:@dallmo/util-array@^1.4.1";
export * as math   from "jsr:@dallmo/util-math@^1.3.1";
export * as string from "jsr:@dallmo/util-string@^1.4.0";
export * as yaml   from "jsr:@dallmo/util-yaml@^1.6.4";
////////////////////////////////////////////////////////////////////////////////
