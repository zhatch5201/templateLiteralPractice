// Name: Zackery Hatch
// Date: 9/23/20
// Assignment: Template Literal Practice

////////////////////////Pt. 1////////////////////////
// create a var that accepts a first name as a prompt
var firstName = window.prompt('Please enter your first name');

// create a var that accepts a last name as a prompt
var lastName = window.prompt('Please enter your last name');

// Create a variable that will hold a score and a var that will hold a full name
const fullName = `${firstName} ${lastName}`;
const score = fullName.length - 1; // -1 for the space I add in the string
console.log(fullName);

// create a var that adds the full name var and score in a message
var nameScoreMsg = `${fullName}'s score: ${score}`;

////////////////////////Pt. 2////////////////////////
//comment out the lines above then create two var's that hold numbers


//create an add var that adds both vars


//console log the newly created add var


//console log 3 string's using concatination that say "concatinating is easy""when using template literals,""I can even embed numbers and not have to worry about spacing!"


//console log the three strings above and add a third string that includes the add var