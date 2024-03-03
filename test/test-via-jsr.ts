import * as dallmo_util from "jsr:@dallmo/util";

// test the math child module
const min: number = 2;
const max: number = 100;
console.log( "random integer : ", dallmo_util.math.random_integer( min, max ) );

// test the array child module
const test_array: any[] = ["123","abc", 456, "何ですか"];
console.log( "random_item : ", dallmo_util.array.random_item( test_array ) );
