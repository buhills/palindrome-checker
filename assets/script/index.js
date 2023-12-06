// Check point for inputed string
function palindromeText (str) {
  let j = str.length - 1
  for (let i = 0; i < j / 2; i++) {
    if (str[i] !== str[j]) {
      return false
    }
    j--
  }
  return true
}

function checkPalindrome () {
  // Get the input value from the text field
  const inputText = document.getElementById('input-text').value
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
