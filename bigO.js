// 1. What is the Big O for this?
// 1) Answer: O(1), because regardless of the number of people in the room, shouting the question to the room is a constant time operation.
// 2) Answer: O(n), because asking each individuals the question scales linearly with the number of people in the room.

// 2. Even or odd.

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
// Answer: O(1), because this operation of checking whether or not a value is even takes the same amount of time regardless of the number entered.

// 3.  Are you here?

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

// Answer: Let 'a' denote the length of arr1 and 'b' denote the length of arr2. Hence the performance is O(a * b) between the algorithm loops through every element in both arrays in the worst case scenario (note: the comparison of values within the array is constant time).

// 4. Doubler

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// Answer: O(n), because the algorithm doubles the value for every entry in the array. This performance is linearly proportional to the length of the array, n.

// 5. Naive Search

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// Answer: O(n), because the algorithm checks to see if each entry in the array is equal to an 'item' parameter. This performance is linearly proportional to the length of the array, n.

// 6. Creating pairs

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

// Answer: Let 'a' denote the length of arr1 and 'b' denote the length of arr2. Hence the performance is O(a * b) between the algorithm loops through every element in both arrays in the worst case scenario (note: the console logging of values is constant time operation).

// 7. Compute the sequence

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i == 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

// Answer: This algorithm computes 'num' entries of the fibonacci sequence and stores them in an array (using 0 as the first entry) The performance is O(n) or O(num) because it'll scale linearly to push more entries into the array based off the value of num or n.

// 8. An efficient search

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

// Answer: O(n / 2) or O(log(n))

// 9. Random element

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Answer: O(1), because finding a random numbered index of the array and multiplying it by the arr.length are both constant time operations, hence the whole algorithm is constant time. It takes the same amount of time regardless of the size of the input array.

// 10. What am I?

function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

// Answer: O(n)

// 11. Tower of Hanoi

function towerOfHanoi(numDisc, source, dest, aux) {
  if (numDisc >= 1) {
    towerOfHanoi(numDisc - 1, source, aux, dest);
    console.log(`Move disk from tower `, source, ` to tower `, dest);
    towerOfHanoi(numDisc - 1, aux, dest, source);
  }
  return;
}

// towerOfHanoi(5, "A", "B", "C");

// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks? It takes 7 moves to complete the puzzle with 3 disks. It takes 15 moves to complete the puzzle with 4 disks. It takes 31 moves to complete the puzzle with 5 disks.

// What is the runtime of your algorithm? O(2^(n) - 1) = O(2^(n)).

// 12. Iterative Version

// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

// 12.1. Counting Sheep

const countingSheep = function(n) {
  for (let i = n; i >= 1; i--) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log(`All sheep jumped over the fence`);
};

// 14.1 Answer: O(n), because the loop will run as many times as the 'n' passed in.

// 12.2 Power Calculator

const powerCalculator = function(base, exp) {
  return base ** exp;
};

// 14.2 Answer: O(1), because the calculation is a constant time operation regardless of input (even with negative values).

// 12.3 Reverse String

const reverseString = function(string) {
  const backwards = [];
  for (let i = string.length - 1; i > -2 + 1; i--) {
    backwards.push(string[i]);
  }
  return backwards.join("");
};

// 14.3 Answer: O(n), because the loop iterates over the input string 'n' times where n is the length of the string.

// 12.4 nth Triangle

const nthTriangle = function(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 2] + i);
    }
  }
  return result[n - 1];
};

// 14.4 Answer: O(n), because the loop iterates 'n' number of times to get the nth Triangle number of dots.

// 12.5 String Splitter

const stringSplitter = function(string, separator) {
  splitString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] != separator) {
      splitString += string[i];
    }
  }
  return splitString;
};

// 14.5 Answer: O(n), because the loop iterates through 'n' number of times where n is the length of the string input.

// 12.6 Fibonacci

function fibonacci(num) {
  let result = [];
  for (let i = 1; i <= num + 1; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i == 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result[num];
}

// 14.6 Answer: O(n), because the loop iterates 'n' number of times to get the nth fibonacci number.

// 12.7 Factorial

function factorial(n) {
  let resultArr = [];
  for (let i = 1; i < n + 1; i++) {
    resultArr.push(i);
  }
  return resultArr.reduce((a, b) => a * b);
}

// 14.7 Answer: O(n ^ 2), because the loop that populates the resultArr takes n steps and the reduce function that multiplies all entries also takes 'n' steps. O(n * n) = O (n ^ 2)

// Recursion Algorithm Performance Analysis

// 13.1
// Counting Sheep

const countingSheep = function(n) {
  //base case
  if (n === 0) {
    return "All sheep jumped over the fence";
  } else {
    return (
      `${n}: Another sheep jumps over the fence` + "\n" + countingSheep(n - 1)
    );
  }
};

// Answer: O(n) because the algorithm executes 'n' times to get each message.

// 13.2
// Power Calculator

const powerCalculator = function(base, exp) {
  //base case
  if (exp === 0) {
    return 1;
  }
  //if exp is negative
  else if (exp < 0) {
    return "exponent should be >= 0";
  }
  //while exp is positive
  else {
    return base * powerCalculator(base, exp - 1);
  }
};

// Answer: O(exp), its linear because the algorithm executes 'exp' times multiplying each previous result by the 'base' each time.

// 13.3
// Reverse String

const reverseString = function(string) {
  if (string.length === 0) {
    return "";
  } else {
    return (
      string[string.length - 1] +
      reverseString(string.slice(0, string.length - 1))
    );
  }
};

// Answer: O(n), where n is the length of the string. The function executes itself n times in order to filter the length o the string

// 13.4
// nth Triangle

const nthTriangle = function(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + nthTriangle(n - 1);
  }
};

// Answer: O(n), the algorithm executes n times to get the nth triangle number of dots, hence linear.

// 13.5
// String Splitter

const stringSplitter = function(string, separator) {
  //base case
  if (string.length === 0) {
    return "";
  } else if (string[0] === separator) {
    return stringSplitter(string.slice(1), separator);
  } else {
    return string[0] + stringSplitter(string.slice(1), separator);
  }
};

// Anwer: O(n), the function executes n times where n is the length of the string being filtered for the separator.

// 13.6
// Fibonacci

const fibonacci = function(n) {
  //two bases, n = 1 is 1, n =2 is also 1
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

// Answer: O(n), the function executes n times to get the nth fibonacci number (has to generate all the nth terms before it)

// 13.7
// Factorial

const factorial = function(n) {
  //base case when n = 1
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Answer: O(n), the function executes n times to calculate the factorial of the number n. (need to compute all numbers before first)

// 13.8-9
// Maze

const mazeRunner = function(
  maze,
  position = 0,
  x = 0,
  y = 0,
  direction = "S",
  path = []
) {
  if (y < 0 || x < 0) {
    return;
  }
  if (y >= maze[0].length || x >= maze.length) {
    return;
  }
  path[position] = direction;
  position++;

  if (maze[x][y] === "e") {
    PrintPath(path, 1, position - 1);
    return;
  }
  if (maze[x][y] === " ") {
    // The current cell is free. Mark it as visited
    maze[x][y] = "s";
    // Invoke recursion to explore all possible directions
    mazeRunner(maze, position, x, y - 1, "L", path); // left
    mazeRunner(maze, position, x - 1, y, "U", path); // up
    mazeRunner(maze, position, x, y + 1, "R", path); // right
    mazeRunner(maze, position, x + 1, y, "D", path); // down
  }
  // Remove the last direction from the path
  position--;
};
const PrintPath = function(path, startPos, endPos) {
  console.log("Found path to the exit: ");
  console.log(path);
};

// console.log(mazeRunner(maze), maze);

const mazeRunnerAll = function(
  maze,
  position = 0,
  x = 0,
  y = 0,
  direction = "S",
  path = []
) {
  if (y < 0 || x < 0) {
    return;
  }
  if (y >= maze[0].length || x >= maze.length) {
    return;
  }
  path[position] = direction;
  position++;

  if (maze[x][y] === "e") {
    PrintPath(path, 1, position - 1);
    return;
  }
  if (maze[x][y] === " ") {
    // The current cell is free. Mark it as visited
    maze[x][y] = "s";
    // Invoke recursion to explore all possible directions
    mazeRunnerAll(maze, position, x, y - 1, "L", path); // left
    mazeRunnerAll(maze, position, x - 1, y, "U", path); // up
    mazeRunnerAll(maze, position, x, y + 1, "R", path); // right
    mazeRunnerAll(maze, position, x + 1, y, "D", path); // down
    //remarks current position as unvisited so we can check back for all exits
    maze[x][y] = " ";
  }
  // Remove the last direction from the path
  position--;
};

// Answer: O() ???

// 13.10
// Anagrams

const anagrams = function(word) {
  const anagramList = [];
  if (word.length === 1) {
    anagramList.push(word[0]);
    return anagramList;
  }
  for (let i = 0; i < word.length; i++) {
    let prefix = word[i];
    let otherChars = word.substring(0, i) + word.substring(i + 1);
    let permutations = anagrams(otherChars);
    for (let j = 0; j < permutations.length; j++) {
      anagramList.push(prefix + permutations[j]);
    }
  }
  return anagramList;
};

// Answer: O(n ^ 2), the function takes n steps for each prefix and then recursive call n times for the remaining characters. Hence, O(n * n) = O (n ^ 2)

// 13.11
// Organization Chart

const orgChart = function(org, indent = 0) {
  for (var key in org) {
    console.log(" ".repeat(indent), key);
    orgChart(org[key], indent + 4);
  }
};

// Answer: O(key), the function executes for every key in the object, hence linear.

// 13.12
// Binary Representation

const binaryRep = function(n) {
  if (n === 0) {
    return "0";
  }
  if (n === 1) {
    return "1";
  }
  if (n % 2 === 0) {
    return binaryRep(n / 2) + "0";
  } else {
    return binaryRep((n - 1) / 2) + "1";
  }
};

// Answer: O(log(n)), the function divides the number n by 2 each time to get the next string additition (either "0" or "1").
