type openingPairCharacter = '(' | '{' | '['
type closingPairCharacter = ')' | '}' | ']'
type pairCharacter = openingPairCharacter | closingPairCharacter

function isPairedCorrectly(string: string){
  const onlyPairedCharacters  = string
    .split('')
    .filter((string: string) => /[\(\)\[\]\{\}]/g.test(string));
  
  const stack: pairCharacter[] = []

  for (let i = 0, length = onlyPairedCharacters.length; i < length; i++){
    const character = onlyPairedCharacters[i]

    if (['(', '[', '{'].includes(character)) {
      stack.push(character as openingPairCharacter)
    } else if (stack[stack.length - 1] === getMatch(character as closingPairCharacter)) {
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length === 0
}

function getMatch(character: closingPairCharacter) {
  const characterMatches = {
    ")": "(",
    "]": "[",
    "}": "{",
  }

  return characterMatches[character]
}

module.exports = isPairedCorrectly
