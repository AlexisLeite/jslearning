export function numberToText(number) {
  const strN = String(number);
  let finalStr = '';

  // const str = "Hola mundo";
  // str.chartAt(0) = "H"
  // str.chartAt(str.length-1) = "o"

  for (let i = strN.length - 1; i >= 0; i--) {
    finalStr = strN[i] + finalStr;
    if ((strN.length - i) % 3 === 0 && i > 0) finalStr = '.' + finalStr;
  }

  return finalStr;
}
