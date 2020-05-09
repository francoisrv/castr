castr
===

Cast value to any type

```js
import * as castr from 'castr'

castr.toNumber('1') // 1
```

View [cheat sheet](./cheatsheet.md)

## String

Turn any value into a string

```js
castr.toString('hello') // "hello"
castr.toString(22) // "22"
castr.toString(true) // "true"
castr.toString([{ b: 1 }]) // "[{"b":1}]"
```

### Options

```ts
function toString(value: any, options: Options = {}): string

interface Options {
  false?: string        // if value is false, will use this string (default "false")
  null?: string         // if value is null, will use this string (default "null")
  true?: string         // if value is true, will use this string (default "true")
  undefined?: string    // if value is undefined, will use this string (default "undefined")
}
```