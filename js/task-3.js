function getElementWidth(content, padding, border) {
  const valueContent = Number.parseInt(content);
  const valuePadding = Number.parseInt(padding);
  const valueBorder = Number.parseFloat(border);
  const value = valueContent + valuePadding * 2 + valueBorder * 2;
  return value;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
