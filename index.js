"use strict";
function isPairedCorrectly(string) {
    const onlyPairedCharacters = string
        .split('')
        .filter((string) => /[\(\)\[\]\{\}]/g.test(string));
    const stack = [];
    for (let i = 0, length = onlyPairedCharacters.length; i < length; i++) {
        const character = onlyPairedCharacters[i];
        if (['(', '[', '{'].includes(character)) {
            stack.push(character);
        }
        else if (stack[stack.length - 1] === getMatch(character)) {
            stack.pop();
        }
        else {
            return false;
        }
    }
    return stack.length === 0;
}
function getMatch(character) {
    const characterMatches = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    return characterMatches[character];
}
module.exports = isPairedCorrectly;
