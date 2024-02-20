
// all imports originated in deps.ts
import { 

  array,
  math,
  string,

  test_timer,
  test_timestamp,

  yaml,

} from "./etc/deps.ts";


////////////////////////////////////////////////////////////////////////////////
const test: any = {

  array:     array.test,
  math:      math.test,
  string:    string.test,
  timer:     test_timer,
  timestamp: test_timestamp,
  yaml:      yaml.test,
  
}; // test
////////////////////////////////////////////////////////////////////////////////
export {

  test,

  array,
  math,
  string,
  yaml,

}; // export

