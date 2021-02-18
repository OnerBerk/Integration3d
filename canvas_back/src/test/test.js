const chai = require("chai")
const expect = chai.expect
const validator1 = require("../utils/read_and_replace")

describe("remplace l'occurence par une autre", () => {
    it("remplace les url", () => {
        expect(validator1.ReplaceAfterDownload('./lightandshadow/tictac/testReplace.js', /url/g, "urli"))
    })
})
describe("remplace la derniere ligne par une nouvelle", () => {
    it("remplace l'export par window.", () => {
        expect(validator1.ReplaceExport('./lightandshadow/tictac/testReplace.js'))
    })
})


