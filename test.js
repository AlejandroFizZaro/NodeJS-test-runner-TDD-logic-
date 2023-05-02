import test from 'node:test';
import { describe, it } from 'node:test';
import assert from "node:assert/strict";
import { isArray } from 'node:util';

let sumFn = (a,b) =>{
    return a + b;
}
let diFn = (a, b) =>{
    return a - b;
}

//Test list ( to check them, 'node --test' in console ) )
test('A function that can sum two values', () =>{
    assert.equal( sumFn( 1, 2 ), 3 ); // 1 + 2 = 3
})

test('A function that return the difference between two values', () =>{
    assert.ok( diFn( 5, 3 ) === 2 ); // 5 - 3 != 1 
})

test('A function that calculate a square area', () =>{
    assert.ok( 2*6 === 12 );
})

describe('my function can split a word', () =>{
    let spillBeaner = (word) => {
        let wordChain = [];
        for(let character = 0; character < word.length; character++) {
                wordChain.push(word[character]);
        }
        return (wordChain); // --> true
    };
    let myWord = 'genial';

    test( 'my function transform strings into arrays' , () => {
        assert.equal( Array.isArray(spillBeaner('genial')), true );
    });

    test('My word and the array have the same size/length', () =>{
        assert.equal( spillBeaner( myWord ).length, myWord.length  )
    });
});