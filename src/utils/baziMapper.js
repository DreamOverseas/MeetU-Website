export function mapFormDataToBaziPerson(form) {
  if (!form.year || !form.month || !form.day) {
    throw new Error("出生日期不完整");
  }

  return {
    year: Number(form.year),
    month: Number(form.month),
    day: Number(form.day),
    hour: Number(form.birth_hour) || 0,
    minute: Number(form.birth_minute) || 0,
    gender: form.gender === "男" ? 1 : 0  // 1 = 男, 0 = 女
  };
}