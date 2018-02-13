Write a function that takes an object as a parameter and returns a "deep copy" of it. A "deep copy" is where the two objects have all the same properties and values as each other, but are living at different memory addresses. If one of them changes, the other is unaffected.

Therefore, the new object your function returns should have all the same properties and values of the original. But in the spirit of Pure Functions, your function should not modify the original object.