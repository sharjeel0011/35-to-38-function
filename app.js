/* task one
function displayCurrentDateTime() {
    // Create a new Date object
    const currentDate = new Date();

    // Get date and time components
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();

    // Display the date and time in the "datetime" element
    const datetimeElement = document.getElementById("datetime");
    datetimeElement.innerHTML = `Current Date: ${date}<br>Current Time: ${time}`;
}

// Call the function to display current date & time when the page loads
displayCurrentDateTime(); 
//task 2
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}
//task 3 
function addNumbers(num1, num2) {
    return num1 + num2;
}
//task 4
function calculator(num1, num2, operator) {
    var result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Division by zero is not allowed.";
            }
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}
//task 5
function squareNumber(number) {
    return number * number;
}
//task 6
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
//task 7
function countNumbers(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i);
    }
}
//task 8
// Example usage
greetUser("John", "Doe");
var sum = addNumbers(5, 3);
console.log("Sum: " + sum);
var calcResult = calculator(10, 5, "+");
console.log("Calculator Result: " + calcResult);
var squared = squareNumber(4);
console.log("Square: " + squared);
var fact = factorial(5);
console.log("Factorial: " + fact);
countNumbers(1, 10);
//task 9
// 8. Calculate Hypotenuse with Nested Function
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(number) {
        return number * number;
    }

    var baseSquared = calculateSquare(base);
    var perpendicularSquared = calculateSquare(perpendicular);

    var hypotenuseSquared = baseSquared + perpendicularSquared;
    var hypotenuse = Math.sqrt(hypotenuseSquared);

    return hypotenuse;
}

// 9. Calculate Area of a Rectangle
// Using arguments as values
function calculateRectangleArea(width, height) {
    return width * height;

}

// Using arguments as variables
var width = 5;
var height = 8;
var area = calculateRectangleArea(width, height);

// 10. Check for Palindrome
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Remove non-alphanumeric characters and convert to lowercase
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Example usage:
var result = isPalindrome("madam");

// 11. Convert First Letter of Each Word to Uppercase
function capitalizeWords(str) {
    return str.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Example usage:
var inputString = 'the quick brown fox';
var outputString = capitalizeWords(inputString);

// 12. Find Longest Word in a String
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = '';
    
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

// Example usage:
var inputString = 'Web Development Tutorial';
var longest = findLongestWord(inputString);

// 13. Count Occurrences of a Letter in a String
function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

// Example usage:
var sampleString = 'JSResourceS.com';
var letterToCount = 'o';
var occurrenceCount = countOccurrences(sampleString, letterToCount);

// 14. Geometrizer Functions for Circle
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference);
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    console.log("The area is " + area);
}

// Example usage:
calcCircumference(5);
calcArea(5);*/


