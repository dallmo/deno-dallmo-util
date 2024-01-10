
// all imports originated in deps.ts
import { test_array     } from "./deps.ts";
import { test_math      } from "./deps.ts";
import { test_string    } from "./deps.ts";
import { test_timer     } from "./deps.ts";
import { test_timestamp } from "./deps.ts";

////////////////////////////////////////////////////////////////////////////////
const test: any = {
  array:     test_array,
  math:      test_math,
  string:    test_string,
  timer:     test_timer,
  timestamp: test_timestamp,
}; // test
////////////////////////////////////////////////////////////////////////////////
export {

  test,

}; // export

