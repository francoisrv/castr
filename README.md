castr
===

Cast value to any type

```js
import * as castr from 'castr'

castr.toNumber('1') // 1
```

## toArray

```js
castr.toArray(value, options) // cast
// or
castr.to(castr.type.array)(value, options)
```

| value | options | cast |
|-------|---------|------|
| undefined | {} | [] |
| null | {} | [] |
| true | {} | [] |
| false | {} | [] |
| -1 | {} | [] |
 
## toBoolean

```js
castr.toBoolean(value, options) // cast
// or
castr.to(castr.type.boolean)(value, options)
```

| value | options | cast |
|-------|---------|------|
| undefined | {} | false |
| null | {} | false |
| true | {} | true |
| false | {} | false |
| -1 | {} | true |
 
## toDate

```js
castr.toDate(value, options) // cast
// or
castr.to(castr.type.date)(value, options)
```

| value | options | cast |
|-------|---------|------|
| undefined | {} | new Date() |
| null | {} | new Date() |
| true | {} | new Date() |
| false | {} | new Date() |
| -1 | {} | new Date() |
 
## toError

```js
castr.toError(value, options) // cast
// or
castr.to(castr.type.error)(value, options)
```

| value | options | cast |
|-------|---------|------|
| undefined | {} | new Error("") |
| null | {} | new Error("") |
| true | {} | new Error("") |
| false | {} | new Error("") |
| -1 | {} | new Error("-1") |
 
## toFunction

```js
castr.toFunction(value, options) // cast
// or
castr.to(castr.type.function)(value, options)
```

| value | options | cast |
|-------|---------|------|
| undefined | {} | () => undefined |
| null | {} | () => null |
| true | {} | () => true |
| false | {} | () => false |
| -1 | {} | () => -1 |
 
## toJSON

```js
castr.toJSON(value, options) // cast
// or
castr.to(castr.type.json)(value, options)
```

| value | options | cast |
|-------|---------|------|
| undefined | {} | "" |
| null | {} | "" |
| true | {} | true |
| false | {} | false |
| -1 | {} | -1 |
 
## toNumber

```js
castr.toNumber(value, options) // cast
// or
castr.to(castr.type.number)(value, options)
```

| value | options | cast |
|-------|---------|------|
| undefined | {} | 0 |
| null | {} | 0 |
| true | {} | 1 |
| false | {} | 0 |
| -1 | {} | -1 |
 
## toObject

```js
castr.toObject(value, options) // cast
// or
castr.to(castr.type.object)(value, options)
```

| value | options | cast |
|-------|---------|------|
| undefined | {} | {} |
| null | {} | {} |
| true | {} | {} |
| false | {} | {} |
| -1 | {} | {} |
 
## toRegExp

```js
castr.toRegExp(value, options) // cast
// or
castr.to(castr.type.regexp)(value, options)
```

| value | options | cast |
|-------|---------|------|
| undefined | {} |  |
| null | {} |  |
| true | {} |  |
| false | {} |  |
| -1 | {} |  |
 
## toString

```js
castr.toString(value, options) // cast
// or
castr.to(castr.type.string)(value, options)
```

| value | options | cast |
|-------|---------|------|
| undefined | {} | "" |
| undefined | {"undefined":"undefined"} | "undefined" |
| undefined | {"undefined":"cool"} | "cool" |
| undefined | {"undefined":2} | "2" |
| null | {} | "" |
| null | {"null":"null"} | "null" |
| null | {"null":"cool"} | "cool" |
| null | {"null":2} | "2" |
| true | {} | "true" |
| true | {"true":"true"} | "true" |
| true | {"true":"cool"} | "cool" |
| true | {"true":true} | "true" |
| false | {} | "false" |
| false | {"false":"false"} | "false" |
| false | {"false":"cool"} | "cool" |
| false | {"false":false} | "false" |
| -1 | {} | "-1" |
