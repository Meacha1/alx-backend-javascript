export default function cleanSet(set, startString) {
  if (startString.length === 0 || set.size === 0 || startString === undefined || startString === null || startString === '' || startString.length > 1) {
    return '';
  }
  if (startString.length > 0) {
    const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
    const cleanedValues = filteredValues.map((value) => value.slice(startString.length));
    return cleanedValues.join('-');
  }

  return '';
}
