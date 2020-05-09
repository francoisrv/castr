import toNumber from "./toNumber"

test('it should cast number to number', () => {
  expect(toNumber(1)).toEqual(1)
})

test('it should cast numeric string to number', () => {
  expect(toNumber('1')).toEqual(1)
})


test('it should cast non numeric string to its length', () => {
  expect(toNumber('hello')).toEqual(5)
})

test('it should cast non numeric string to not a number number', () => {
  expect(toNumber('hello', { count: false })).toEqual(0)
})

test('it should cast non numeric string to not a number custom number', () => {
  expect(toNumber('hello', { count: false, NaN: -1 })).toEqual(-1)
})

test('it should cast true to number', () => {
  expect(toNumber(true)).toEqual(1)
})

test('it should cast false to number', () => {
  expect(toNumber(false)).toEqual(0)
})

test('it should cast null to number', () => {
  expect(toNumber(null)).toEqual(0)
})

test('it should cast undefined to number', () => {
  expect(toNumber(undefined)).toEqual(0)
})

test('it should cast undefined to custom number', () => {
  expect(toNumber(undefined, { NaN: -1 })).toEqual(-1)
})

test('it should cast null to number', () => {
  expect(toNumber(null)).toEqual(0)
})

test('it should cast null to custom number', () => {
  expect(toNumber(null, { NaN: -1 })).toEqual(-1)
})

test('it should cast empty object to its length', () => {
  expect(toNumber({})).toEqual(0)
})

test('it should cast non-empty object to its length', () => {
  expect(toNumber({ a: 1, b: 2, c: 3 })).toEqual(3)
})

test('it should cast empty object to not a number', () => {
  expect(toNumber({}, { count: false })).toEqual(0)
})

test('it should cast empty object to custom not a number', () => {
  expect(toNumber({}, { count: false, NaN: -1 })).toEqual(-1)
})

test('it should cast non empty object to not a number', () => {
  expect(toNumber({ a: 1, b: 2, c: 3 }, { count: false })).toEqual(0)
})

test('it should cast non empty object to custom not a number', () => {
  expect(toNumber({ a: 1, b: 2, c: 3 }, { count: false, NaN: -1 })).toEqual(-1)
})

test('it should count empty array', () => {
  expect(toNumber([])).toEqual(0)
})

test('it should cast empty array to not a number', () => {
  expect(toNumber([], { count: false })).toEqual(0)
})

test('it should cast empty array to custom not a number', () => {
  expect(toNumber([], { count: false, NaN: -1 })).toEqual(-1)
})

test('it should count non empty array', () => {
  expect(toNumber([1, 2, 3])).toEqual(3)
})

test('it should cast non empty array to not a number', () => {
  expect(toNumber([1, 2, 3], { count: false })).toEqual(0)
})

test('it should cast non empty array to custom not a number', () => {
  expect(toNumber([1, 2, 3], { count: false, NaN: -1 })).toEqual(-1)
})

test('it should cast infinity to number', () => {
  expect(toNumber(Infinity)).toEqual(0)
})

test('it should cast infinity to custom number', () => {
  expect(toNumber(Infinity, { Infinity: 8 })).toEqual(8)
})