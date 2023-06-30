export default function appendToEachArrayValue(array, appendString) {
  for (const i of array) {
    const value = array[i];
    array[i] = appendString + value;
  }

  return array;
}
