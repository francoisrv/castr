import toString from "./toString"

test('it should cast string to string', () => {
  expect(toString('hello')).toEqual('hello')
})

test('it should cast number to string', () => {
  expect(toString(1)).toEqual('1')
})

test('it should cast true to string', () => {
  expect(toString(true)).toEqual('true')
})

test('it should cast false to string', () => {
  expect(toString(false)).toEqual('false')
})

test('it should cast null to string', () => {
  expect(toString(null)).toEqual('null')
})

test('it should cast undefined to string', () => {
  expect(toString(undefined)).toEqual('undefined')
})

test('it should cast object to string', () => {
  expect(toString({})).toEqual('{}')
})

test('it should cast array to string', () => {
  expect(toString([])).toEqual('[]')
})
