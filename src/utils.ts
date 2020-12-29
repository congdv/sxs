//https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
export function isNumeric(x: string): Boolean {
  if (typeof x != 'string') return false;
  return !isNaN(Number(x)) && !isNaN(parseFloat(x)); //
}
