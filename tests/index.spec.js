const isPairedCorrectly = require("../index.js")

describe("#isPairedCorrectly", () => {
  it("returns true for a string with no paired characters", () => {
    const string = "this is a normal string"
    expect(isPairedCorrectly(string)).toBe(true)
  })
  it("returns true for a string with paired parentheses", () => {
    const string = "this is a (parened) string"
    expect(isPairedCorrectly(string)).toBe(true)
  })
  it("returns false for a string with unpaired parentheses", () => {
    const string = "this is a (parened string"
    expect(isPairedCorrectly(string)).toBe(false)
  })
  it("returns true for correct complex nesting", () => {
    const string = "this is a ([{({[parened]})}]) string"
    expect(isPairedCorrectly(string)).toBe(true)
  })
  it("returns false for incorrect complex nesting", () => {
    const string = "this is a ({({[parened]})}] string"
    expect(isPairedCorrectly(string)).toBe(false)
  })
})
