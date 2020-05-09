castr
===

Cast value to any type

```js
import * as castr from 'castr'

castr.toNumber('1') // 1
```

## string

```js
castr.toString('hello') // hello
castr.toString(1) // "1"
castr.toString(true) // "true"
castr.toString(null) // "null"
castr.toString(undefined) // "undefined"
castr.toString({}) // "{}"
castr.toString([]) // "[]"
castr.toString(new Date()) // "Sat May 09 2020 10:52:05 GMT+0200 (Central European Summer Time)"
castr.toString(/foo/i) // "/foo/i"
castr.toString(new Error('failed')) // "Error: failed"
castr.toString(b => b + 1) // "b => b + 1"
```

### number

Returns a number. If a number could not be casted(`NaN`), `0` is returned, unless specified otherwise via `NaN`

```js
castr.toNumber(1) // 1
castr.toNumber('1') // 1
castr.toNumber('abc') // 3 -- string length
castr.toNumber('abc', { count: false }) // 0 -- not a number
castr.toNumber('abc', { count: false, NaN: -1 }) // -1 -- not a number
castr.toNumber(true) // 1
castr.toNumber(null) // 0
castr.toNumber(undefined) // 0
castr.toNumber(null) // 0
castr.toNumber({}) // 0
castr.toNumber({ foo: 'a', bar: 'b' }) // 2 -- count the object keys
castr.toNumber({ foo: 'a', bar: 'b' }, { count: false }) // 0
castr.toNumber([]) // 0 -- array length
castr.toNumber([1, 2, 3]) // 3 -- array length
castr.toNumber([1, 2, 3], { count: 'false' }) // 0
castr.toNumber(Infinity) // 0
castr.toNumber(Infinity, { Infinity: -1 }) // -1
castr.toNumber(b => b + 1) // 0
```

## boolean

```js
castr.toBoolean(true) // true
castr.toBoolean(false) // false
castr.toBoolean(1) // true
castr.toBoolean(0) // false
castr.toBoolean('yes', { true: ['yes'] }) // true
castr.toBoolean('no', { false: ['no'] }) // false
castr.toBoolean(false, { false: ['no'] }) // false
castr.toBoolean('') // false
castr.toBoolean('hey') // true
castr.toBoolean(undefined) // false
castr.toBoolean(null) // false
castr.toBoolean({}) // true
castr.toBoolean({}, { empty: true }) // true
castr.toBoolean({}, { empty: false }) // false
castr.toBoolean([]) // true
castr.toBoolean([], { empty: true }) // true
castr.toBoolean([], { empty: false }) // false
castr.toBoolean(b => b + 1) // true
```

## object

```js
castr.toObject(undefined) // {}
castr.toObject(null) // {}
castr.toObject(true) // {}
castr.toObject(false) // {}
castr.toObject(0) // {}
castr.toObject(1) // {}
castr.toObject('hey') // {}
castr.toObject('{"foo": 1}') // {foo: 1}
castr.toObject('{"foo"') // {}
castr.toObject('[1,2,3]') // {}
castr.toObject({}) // {}
castr.toObject([]) // {}
castr.toObject([1, 2, 3]) // {}
castr.toObject(b => b + 1) // {}
```

## array

```js
castr.toArray(undefined) // []
castr.toArray(null) // []
castr.toArray(true) // []
castr.toArray(false) // []
castr.toArray(0) // []
castr.toArray(-1) // []
castr.toArray(3) // [undefined, undefined, undefined]
castr.toArray(3, { fill: false }) // []
castr.toArray('hey') // ['h', 'e', 'y']
castr.toArray('hey', { delimiter: ',' }) // ['hey']
castr.toArray('a,b,c', { delimiter: ',' }) // ['a', 'b', 'c']
castr.toArray('1,2,3', { delimiter: ',' }) // ['1', '2', '3']
castr.toArray('1,2,3', { delimiter: ',', castr: castr.types.number }) // [1, 2, 3]
castr.toArray('y,y,n', {
  delimiter: ',',
  castr: castr.types.boolean,
  castrOptions: {
    true: ['y'],
    false: ['n']
  }
}) // [true, true, false]
castr.toArray('1,2,3', {
  delimiter: ',',
  castrTuple: [
    castr.types.boolean,
    castr.types.string,
    castr.types.number
  ],
  castrTupleOptions: [
    { true: '1', false: '0' }
  ]
}) // [true, "2", 3]
castr.toArray({}) // []
castr.toArray({ foo: 1, bar: true }) // [1, true]
castr.toArray({ foo: 1, bar: true }, { keys: true }) // ['foo', 'bar']
castr.toArray([]) // []
castr.toArray([1, 2, 3]) // [1, 2, 3]
castr.toArray(b => b + 1) // []
```

## json

```js
castr.toJson(undefined) // ""
castr.toJson(null) // ""
castr.toJson(true) // true
castr.toJson(false) // false
castr.toJson(1) // 1
castr.toJson('hey') // "hey"
castr.toJson({}) // {}
castr.toJson([]) // []
castr.toJson(b => b + 1) // ""
castr.toJson(new Date()) // "Sat May 09 2020 10:52:05 GMT+0200 (Central European Summer Time)"
castr.toJson(/foo/i) // { pattern: 'foo', flags: 'i' }
castr.toJson(new Error('boom')) // { message: 'boom' }
```

## date

```js
castr.toDate(undefined) // new Date()
castr.toDate(null) // new Date()
castr.toDate(true) // new Date()
castr.toDate(false) // new Date()
castr.toDate(1) // new Date(1)
castr.toDate('hey') // new Date(1)
castr.toDate('2011-10-12') // new Date('2011-10-12')
castr.toDate({}) // new Date()
castr.toDate([]) // new Date()
castr.toDate(b => b + 1) // new Date()
```

## error

```js
castr.toDate(undefined) // new Date()
castr.toDate(null) // new Date()
castr.toDate(true) // new Date()
castr.toDate(false) // new Date()
castr.toDate(1) // new Date(1)
castr.toDate('hey') // new Date(1)
castr.toDate('2011-10-12') // new Date('2011-10-12')
castr.toDate({}) // new Date()
castr.toDate([]) // new Date()
castr.toDate(b => b + 1) // 0
```

## regular expression

```js
castr.toRegExp(undefined) // /.*/
castr.toRegExp(null) // /.*/
castr.toRegExp(true) // /.*/
castr.toRegExp(false) // /.*/
castr.toRegExp(1) // /1/
castr.toRegExp('hey') // /hey/
castr.toRegExp('hey', {
  insensitive: true, // i
  repeat: true, // g
  multiline: true, // m
  dotall: true, // s
  unicode: true, // u
  sticky: true, // y
}) // /hey/igmsuy
castr.toRegExp('/foo/bar') // /.*/ -- invalid regexp, defaults to all
castr.toRegExp('/foo/bar', { escape: true }) // /\/foo\/bar/
castr.toRegExp({}) // /.*/
castr.toRegExp([]) // /.*/
castr.toRegExp(new Date()) // /.*/
castr.toRegExp(/abc/ig) // /abc/ig
castr.toRegexp(b => b * 1) // /.*/
```

## all

```js
castr.to(castr.types.string, 1) // "1"
castr.to(catr.types.boolean, 'yes', { true: ['yes'] }) // true
```
