import toBoolean from "./toBoolean"

test('it should cast true to true', () => {
  expect(toBoolean(true)).toEqual(true)
})

test('it should cast false to false', () => {
  expect(toBoolean(false)).toEqual(false)
})

test('it should cast 1 to true', () => {
  expect(toBoolean(1)).toEqual(true)
})

test('it should cast 0 to false', () => {
  expect(toBoolean(0)).toEqual(false)
})

test('it should cast custom isTrue to true', () => {
  expect(toBoolean(true, { true: ['yes'] })).toEqual(true)
})

test('it should cast present custom isTrue to true', () => {
  expect(toBoolean('yes', { true: ['yes'] })).toEqual(true)
})

test('it should cast custom isFalse to false', () => {
  expect(toBoolean(false, { false: ['no'] })).toEqual(false)
})

test('it should cast present custom isFalse to false', () => {
  expect(toBoolean('no', { false: ['no'] })).toEqual(false)
})

test('it should cast empty string to false', () => {
  expect(toBoolean('')).toEqual(false)
})

test('it should cast non empty string to true', () => {
  expect(toBoolean('hey')).toEqual(true)
})

test('it should cast undefined to false', () => {
  expect(toBoolean(undefined)).toEqual(false)
})

test('it should cast null to false', () => {
  expect(toBoolean(null)).toEqual(false)
})

test('it should cast empty object to true', () => {
  expect(toBoolean({})).toEqual(true)
})

test('it should cast empty object to true if empty is true', () => {
  expect(toBoolean({}, { empty: true })).toEqual(true)
})

test('it should cast empty object to false if empty is false', () => {
  expect(toBoolean({}, { empty: false })).toEqual(false)
})

test('it should cast empty array to true', () => {
  expect(toBoolean([])).toEqual(true)
})

test('it should cast empty array to true if empty is true', () => {
  expect(toBoolean([], { empty: true })).toEqual(true)
})

test('it should cast empty array to false if empty is false', () => {
  expect(toBoolean([], { empty: false })).toEqual(false)
})
