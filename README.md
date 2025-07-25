# @dallmo/util

# overview

- a collection of deno util modules in various categories ;
- published on both [deno land][link-1] and [jsr][link-2] ; 


# list of submodules

- array
- github
- math
- string
- yaml


# usage

1. create `test-via-jsr.ts` with these contents :  

```
import * as dallmo_util from "jsr:@dallmo/util";

// test the math child module
const min: number = 2;
const max: number = 100;
console.log( "random integer : ", dallmo_util.math.random_integer( min, max ) );

// test the array child module
const test_array: any[] = ["123","abc", 456, "何ですか"];
console.log( "random_item : ", dallmo_util.array.random_item( test_array ) );
```

2. run the test file
```
deno run test-via-jsr.ts
```


# test
to run test codes : 

1. switch to the project root folder, i.e. `[root]/` ;
2. run deno task scripts :
- to test the local files : 
  - run `deno task test` ;
- to test with dependencies via jsr : 
  - run `deno task test-jsr` ; 


## notes on "import / deno add"
in the sample code above, the module is imported via :
```
import { [method name] } from "jsr:@[module name]";
```

in case the import is done with this instead : 
```
import { [method name] } from "@[module name]";
```

i.e. without the "jsr:" prefix, then the module has to be added with this command in CLI :
```
deno add jsr:@[module name]
```

if the module has been manually added in the CLI, import with the "jsr:" prefix inside the app is also ok.

updates have therefore been made to add the "jsr:" prefix to both the sample codes above and the test file `test-via-jsr.ts` for simple copy-n-paste.


[comments]: ----------------------------------
[link-1]: https://deno.land/x/dallmo_util
[link-2]: https://jsr.io/@dallmo/util


# updates
## 2025-06-11
- remove custom steps in github workflow which make changes to etc/deps.ts ;
- archived deno.land related files and focus only on jsr ; 
- add notes above on the usage of "jsr:" prefix ; 
