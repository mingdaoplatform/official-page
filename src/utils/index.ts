export function getDateFromCode(code: number) {
  const date = new Date(code);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

export function getSub(id: number): string {
  if (id === 0) {
    return "國文";
  }
  if (id === 1) {
    return "英文";
  }
  if (id === 2) {
    return "數學";
  }
  if (id === 3) {
    return "社會";
  }
  if (id === 4) {
    return "自然";
  }
  return "自訂";
}
