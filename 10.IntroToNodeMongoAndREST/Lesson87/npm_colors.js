var colors = require('colors');

console.log(colors.yellow("First some yellow text"));
console.log(colors.underline.yellow("underline that text"));
console.log(colors.red.bold("Make it bold and red"));
console.log("Double Rainbows All Day Long".rainbow);

console.log("Drop the bass".trap);
console.log("DROP THE RAINBOW BASS".trap.rainbow);

console.log('Chains are also cool.'.bold.underline.red); // styles not widely supported
console.log('So '.green + 'are'.underline + ' ' + 'inverse'.inverse + ' styles! '.yellow.bold); // styles not widely supported
console.log("Zebras are so fun!".zebra);

//
// Remark: .strikethrough may not work with Mac OS Terminal App
//
console.log("This is " + "not".strikethrough + " fun.");

console.log('Background color attack!'.black.bgWhite);
console.log('Use random styles on everything!'.random);
console.log('America, Heck Yeah!'.america);

console.log(''.reset); //Reset the console color

