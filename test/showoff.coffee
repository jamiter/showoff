expect = require("chai").expect
showoff = require("./../lib/showoff.js")

describe "Showoff", ->
  it "should have a run function", ->
    expect(showoff).to.have.property "run"