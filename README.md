castr
===

Cast value to any type

```js
import * as castr from 'castr'

castr.toNumber('1') // 1
```

View [cheat sheet](./cheatsheet.md)

## String

Turn any value into a string ([cheat sheet](https://github.com/francoisrv/castr/blob/master/cheatsheet.md#tostring))

```js
castr.toString('hello') // "hello"
```
```ts
function toString(value: any, options: Options = {}): string

interface Options {
  false?: string
  null?: string
  parse?: boolean
  true?: string
  undefined?: string
}
```

### Cases

If you pass a number, it will be converted to a string:

```ts
castr.toString(-42.5) // "-42.5"
```

`undefined` or `null` are translated into empty strings:

```ts
castr.toString(undefined) // ""
castr.toString(null) // ""
```

You can overwrite this by passing a custom string:

```ts
castr.toString(undefined, { undefined: 'missing' }) // "missing"
castr.toString(null, { null: 'ignored' }) // "ignored"
```

Booleans are stringified like this:

```ts
castr.toString(true) // "true"
castr.toString(false) // "false"
```

You can also owerwrite this:

```ts
castr.toString(true, { true: 'yes' }) // "yes"
castr.toString(false, { false: 'no' }) // "no"
```

If you pass a plain object as a JSON string, it will be parsed:

```ts
castr.toString({ foo: 1 }) // "{\"foo\": 1}"
```

You can also overwrite this:

```ts
castr.toString({ foo: 1 }, { parse: false }) // "[object Object]"
```

In case you pass an instantiated class, the method `toString` will be called on it:

```ts
castr.toString(new Error('foo')) // "Error: foo"
```

Arrays are joined with a comma:

```ts
castr.toString([1, 2, 3]) // "1,2,3"
castr.toString([]) // ""
```

You can force the array to be stringified as JSON:

```ts
castr.toString([1, 2, 3], { parse: true }) // "[1,2,3]"
castr.toString([], { parse: true }) // "[]"
```
