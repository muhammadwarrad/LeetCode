// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


function isValid(s) {
    const stack = [];
    const map = {
      ")": "(",
      "}": "{",
      "]": "[",
    };
    for (let i = 0; i < s.length; i++) {
      if (s[i] in map) {
        const top = stack.pop() || "#"; // Handle empty stack case
        if (map[s[i]] !== top) {
          return false;
        }
      } else {
        stack.push(s[i]);
      }
    }
    return stack.length === 0;
  }
  