// Check point for inputed string
function palindromeText (str) {
  const strArr = str.split(' ').join('')
  let j = strArr.length - 1
  for (let i = 0; i < j / 2; i++) {
    if (strArr[i] !== strArr[j]) {
      return false
    }
    j--
  }
  return true
}

function checkPalindrome () {
  // Get the input value from the text field
  const inputText = document.getElementById('input-text').value
  // const inputTextWithOutSpace = inputText.join('')
  // Checking if it is a palindrome
  const isPalindrome = palindromeText(inputText)
  const resultElement = document.getElementById('result')
  if (isPalindrome) {
    resultElement.innerHTML = 'Yes, input text is a palindrome.'
  } else {
    resultElement.innerHTML = 'Sorry, input text is not a palindrome.'
  }
}

if (onclick) {
  checkPalindrome()
}
