# @dallmo/util

# overview

- a collection of deno util modules in various categories ;
- published on both [deno land][link-1] and [jsr][link-2] ; 


# list of methods

- add_leading_zero
- random_integer
- random_sections




# usage

## 1. running on deno, import via deno module

1. nothing to add via CLI.
2. create `test-via-deno-modules.ts` ; 

```
import * as dallmo_util from "https://deno.land/x/dallmo_util@v1.0.0/mod.ts";

// test the math child module
const min: number = 2;
const max: number = 100;
console.log( "random integer : ", dallmo_util.math.random_integer( min, max ) );

// test the array child module
const test_array: any[] = ["123","abc", 456, "何ですか"];
console.log( "random_item : ", dallmo_util.array.random_item( test_array ) );
```

3. run the test file
```
deno run test-via-deno-modules.ts
```

## 2. running on deno, import via jsr

1. in CLI, add the module with :
```
deno add @dallmo/util
```

2. create `test-via-jsr.ts` ; 

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

3. run the test file
```
deno run test-via-jsr.ts
```





# test
to run test codes : 

1. switch to the project root folder, i.e. `[root]/` ;
2. run deno task scripts :
- to test with dependencies via deno modules : 
  - run `deno task test-deno` ;
- to test with dependencies via jsr : 
  - run `deno task test-jsr` ; 

[comments]: ----------------------------------
[link-1]: https://deno.land/x/dallmo_util
[link-2]: https://jsr.io/@dallmo/util
