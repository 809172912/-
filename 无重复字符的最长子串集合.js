let lengthOfLongestSubstring = function (str) {
  let currentStr = ''
  let currentMaxStr = ''
  let currentMaxStrArr = []
  str.split('').forEach(item => {
    if (currentStr.includes(item)) {
      if (currentStr.length >= currentMaxStr.length) {
        if (currentStr.length > currentMaxStr.length) currentMaxStrArr = [currentStr]
        if (currentStr.length = currentMaxStr.length && !currentMaxStrArr.includes(currentStr)) currentMaxStrArr.push(currentStr)
        currentMaxStr = currentStr
      }
      let index = currentStr.indexOf(item) + 1
      currentStr = currentStr.substring(index)
    }
    currentStr += item
  })
  if (currentStr.length >= currentMaxStr.length) {
    if (currentStr.length > currentMaxStr.length) currentMaxStrArr = [currentStr]
    if (currentStr.length = currentMaxStr.length && !currentMaxStrArr.includes(currentStr)) currentMaxStrArr.push(currentStr)
    currentMaxStr = currentStr
  }
  return currentMaxStrArr
}
