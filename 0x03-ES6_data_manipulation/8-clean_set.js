function cleanSet(set, startString) {
  if (!startString) {
    return ''
  }
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  const cleanedValues = filteredValues.map((value) => value.slice(startString.length));
  return cleanedValues.join('-');
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));