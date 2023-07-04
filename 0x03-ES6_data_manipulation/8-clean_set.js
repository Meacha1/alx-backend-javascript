function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const cleanstring = [];
  if (startString.length > 0) {
    set.forEach(item => {
      if (item.startsWith(startString)) {
        item = item.slice(startString.length);
        cleanstring.push(item);
      }
    });
  }
  return [...cleanstring].join('-');
}


console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));