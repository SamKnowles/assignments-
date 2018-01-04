var shopper = {
    name: 'Sam',
    fingers: 17,
    imaginary: false,
    cartItems: ["rope","duct tape","shovel","bleech","axe","fruit snacks"],
    nameFingers: function() {
       return this.name + " has " + this.fingers + " fingers";
    }
}
console.log(shopper);
console.log(shopper.nameFingers());