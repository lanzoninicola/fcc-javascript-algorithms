/**
 Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
 */

function reverseString(str) {
  let newStrArr = [];

  const strArr = str.split("");

  for (let i = strArr.length; i--; i == 0) {
    newStrArr.push(str[i]);
  }

  return newStrArr.join("").toString();
}

reverseString("hello");
