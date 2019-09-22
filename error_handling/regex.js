function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

let re;
// regex literal
re = /hello/;
re = /hello/i;

// metacharacter
re = /^h/i; // string must start with h
re = /d$/i; // string must end with
re = /^hello$/i; // string must begin and end with
re = /h.ello/i; // . match any char Hello, Hmllo
re = /h*llo/i; // match any character 0 or more times
// this will match 'Heello World', 'Hllo', 'Hello'
re = /gre?a?y/i; // e? Optional character
re = /gre?a?y\?/i; // \? escape character

// Character Sets [] - match any char inside the bracket
re = /gr[ae]y/i // must be an a or e
re = /[GF]ray/ // must be an F or F case sensitive
re = /[^GF]ray/ // must not be G or F char in bracket
re = /[A-Z]ray/ // match any char between uppercase A to Z
re = /[A-Za-z]ray/ // match any letter
re = /[0-9]ray/ // match any number

// Quantifiers {}
re = /Hel{2}o/i; // must have n amount of leading character
re = /Hel{2,4}o/i; // between 2 or 4 times
re = /Hel{2,}o/i; // at least 2 times


// Grouping ()
re = /^([0-9]x){3}$/;

// Shorthand character or special regex character
re = /\w/; // match word char, number or underscore
re = /\W/; // match non word char number or underscore
re = /\w+/; // match word char number or underscore + one or more
re = /\d/; // match digit char
re = /\d+/; // match one or more digit
re = /\D/; // match non digit char
re = /\s/; // match whitespace char
re = /\S/; // match mom whitespace char
re = /Hell\b/; // match hell with space after

// assertiion or followed by
re = /x(?=y)/; // match if followed by y
re = /x(?!y)/; // match if not followed by y

// group with identifier <?<group_one> or <P?<group_two>

// string input
const str = 'Heello World gray';


const result = re.exec(str);
console.log(result);

reTest(re, str);

