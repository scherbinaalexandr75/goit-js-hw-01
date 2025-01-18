function getElementWidth(content, padding, border) {
  const valueCont = Number.parseInt(content);
  const valuePadd = Number.parseInt(padding);
  const valueBord = Number.parseFloat(border);
  const value = valueCont + valuePadd * 2 + valueBord * 2;
  return value;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
