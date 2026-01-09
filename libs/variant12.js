// Перевіряє, чи є об'єкт допустимим числовим діапазоном
export function isRangeTest(obj) {
  return obj &&
    typeof obj.start === 'number' &&
    typeof obj.end === 'number' &&
    Number.isFinite(obj.start) &&
    Number.isFinite(obj.end) &&
    obj.start <= obj.end;
}

// Перевіряє, чи є число парним індексом >= 0
export function isIndexTest(num) {
  return Number.isInteger(num) && num >= 0 && num % 2 === 0;
}

// Перевіряє, чи значення булеве
export function isBooleanTest(value) {
  return typeof value === 'boolean';
}

// Перевіряє, чи є об'єкт валідним набором числових результатів
export function isResultSetTest(obj) {
  if (!obj || !Array.isArray(obj.values) || obj.values.length === 0) return false;
  const avg = obj.values.reduce((sum, n) => sum + n, 0) / obj.values.length;
  return obj.values.every(n => typeof n === 'number' && Number.isFinite(n)) && avg !== 0;
}

// Перевіряє, чи є об'єкт валідною допоміжною інформацією
export function isHelpTest(obj) {
  return obj &&
    typeof obj.text === 'string' &&
    obj.text.length > 5 &&
    /^[A-Z]/.test(obj.text);
}

// Перевіряє, чи функція повертає число
export function isFunctionTest(fn) {
  return typeof fn === 'function' && Number.isFinite(fn(0));
}

// Перевіряє, чи дата не в майбутньому
export function isDateTest(date) {
  return date instanceof Date && !isNaN(date.getTime()) && date.getTime() <= Date.now();
}

// Перевіряє, чи це регулярний вираз
export function isRegExpTest(rx) {
  return rx instanceof RegExp && rx.source.length > 0 && rx.test('test') !== undefined;
}

// Перевіряє, чи об'єкт містить хоча б одне ненульове числове поле
export function isObjectTest(obj) {
  return obj &&
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    Object.keys(obj).some(k => typeof obj[k] === 'number' && obj[k] !== 0);
}

// Перевіряє, чи значення null
export function isNullTest(val) {
  return val === null;
}
