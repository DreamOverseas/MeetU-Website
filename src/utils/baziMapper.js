// src/utils/baziMapper.js

export function mapFormDataToBaziPerson(formData) {
  const [year, month, day] = formData.date_of_birth
    .split("-")
    .map(Number);

  return {
    year,
    month,
    day,
    hour: Number(formData.birth_hour),
    minute: Number(formData.birth_minute),
    gender: formData.gender === "male" ? 1 : 0,
  };
}
