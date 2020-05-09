import toArray from "./toArray"

test('it should cast undefined to empty array', () => {
  expect(toArray(undefined)).toEqual([])
})

test('it should cast null to empty array', () => {
  expect(toArray(null)).toEqual([])
})

test('it should cast true to empty array', () => {
  expect(toArray(true)).toEqual([])
})

test('it should cast false to empty array', () => {
  expect(toArray(false)).toEqual([])
})

test('it should cast 0 to empty array', () => {
  expect(toArray(0)).toEqual([])
})

test('it should cast negative number to empty array', () => {
  expect(toArray(-1)).toEqual([])
})

test('it should cast positive number to non empty array', () => {
  expect(toArray(3)).toEqual([undefined, undefined, undefined])
})

test('it should cast positive number to empty array if fill is false', () => {
  expect(toArray(3, { fill: false })).toEqual([])
})

test('it should cast string to split array', () => {
  expect(toArray('hey')).toEqual(['h', 'e', 'y'])
})

test('it should cast string to part if delimiter is present', () => {
  expect(toArray('hey', { delimiter: ',' })).toEqual(['hey'])
})

test('it should cast string to parts if delimiter is present', () => {
  expect(toArray('a,b,c', { delimiter: ',' })).toEqual(['a', 'b', 'c'])
})

test('it should cast empty object to empty array', () => {
  expect(toArray({})).toEqual([])
})

test('it should cast object to array', () => {
  expect(toArray({ foo: 1, bar: true })).toEqual([1, true])
})

test('it should cast object to array of keys', () => {
  expect(toArray({ foo: 1, bar: true }, { keys: true })).toEqual(['foo', 'bar'])
})

test('it should cast empty array to array', () => {
  expect(toArray([])).toEqual([])
})

test('it should cast array to array', () => {
  expect(toArray([1, 2, 3])).toEqual([1, 2, 3])
})