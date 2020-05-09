import toObject from "./toObject"

test('it should cast undefined to empty object', () => {
  expect(toObject(undefined)).toEqual({})
})