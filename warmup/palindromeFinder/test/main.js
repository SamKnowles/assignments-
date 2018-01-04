const chai = require("chai");
const assert = chai.assert;
const isPalindrome = require("../main.js");

const word = ["Star Rats!", "palindrome", "I madam, I made radio! So I dared! Am I mad?? Am I?!"]

describe("checks if a given string is a palindrome", () => {
    it("should retrun true", () => {
        assert(isPalindrome(word[0]));
        assert(isPalindrome(word[2]));

    });
    it("should return false", () => {
        assert(!isPalindrome(word[1]));
    });
});