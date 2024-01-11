
// all imports originated in deps.ts
import { 

  array,
  math,
  string,

  test_timer,
  test_timestamp,

} from "./deps.ts";

////////////////////////////////////////////////////////////////////////////////
const test: any = {
  array:     array.test,
  math:      math.test,
  string:    string.test,
  timer:     test_timer,
  timestamp: test_timestamp,
}; // test
////////////////////////////////////////////////////////////////////////////////
export {

  test,

  array,
  math,
  string,

}; // export

