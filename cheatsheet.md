
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
| -1.5 | {} | [] |
| 0 | {} | [] |
| 1 | {} | [null] |
| 1 | {"fill":false} | [] |
| 2.292929192929392 | {} | [null,null,null] |
| 2.292929192929392 | {"fill":false} | [] |
| "" | {} | [] |
| "hey" | {} | ["h","e","y"] |
| "a,b,c" | {} | ["a",",","b",",","c"] |
| "a,b,c" | {"delimiter":","} | ["a","b","c"] |
| "a:b:c" | {} | ["a",":","b",":","c"] |
| "a:b:c" | {"delimiter":":"} | ["a","b","c"] |
| "-1" | {} | ["-","1"] |
| "0" | {} | ["0"] |
| "1.5" | {} | ["1",".","5"] |
| "{}" | {} | ["{","}"] |
| "{"foo": true}" | {} | ["{","\"","f","o","o","\"",":"," ","t","r","u","e","}"] |
| "[]" | {} | ["[","]"] |
| "{"foo": true}" | {} | ["{","\"","f","o","o","\"",":"," ","t","r","u","e","}"] |


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
| -1.5 | {} | true |
| 0 | {} | false |
| 1 | {} | true |
| 2.292929192929392 | {} | true |
| "" | {} | false |
| "hey" | {} | true |
| "a,b,c" | {} | true |
| "a:b:c" | {} | true |
| "-1" | {} | true |
| "0" | {} | true |
| "1.5" | {} | true |
| "{}" | {} | true |
| "{"foo": true}" | {} | true |
| "[]" | {} | true |
| "{"foo": true}" | {} | true |


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
| -1.5 | {} | new Date() |
| 0 | {} | new Date() |
| 1 | {} | new Date() |
| 2.292929192929392 | {} | new Date() |
| "" | {} | new Date() |
| "hey" | {} | new Date() |
| "a,b,c" | {} | new Date() |
| "a:b:c" | {} | new Date() |
| "-1" | {} | new Date() |
| "0" | {} | new Date() |
| "1.5" | {} | new Date() |
| "{}" | {} | new Date() |
| "{"foo": true}" | {} | new Date() |
| "[]" | {} | new Date() |
| "{"foo": true}" | {} | new Date() |


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
| -1.5 | {} | new Error("-1.5") |
| 0 | {} | new Error("0") |
| 1 | {} | new Error("1") |
| 2.292929192929392 | {} | new Error("2.292929192929392") |
| "" | {} | new Error("") |
| "hey" | {} | new Error("hey") |
| "a,b,c" | {} | new Error("a,b,c") |
| "a:b:c" | {} | new Error("a:b:c") |
| "-1" | {} | new Error("-1") |
| "0" | {} | new Error("0") |
| "1.5" | {} | new Error("1.5") |
| "{}" | {} | new Error("{}") |
| "{"foo": true}" | {} | new Error("{"foo": true}") |
| "[]" | {} | new Error("[]") |
| "{"foo": true}" | {} | new Error("{"foo": true}") |


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
| -1.5 | {} | () => -1.5 |
| 0 | {} | () => 0 |
| 1 | {} | () => 1 |
| 2.292929192929392 | {} | () => 2.292929192929392 |
| "" | {} | () => "" |
| "hey" | {} | () => "hey" |
| "a,b,c" | {} | () => "a,b,c" |
| "a:b:c" | {} | () => "a:b:c" |
| "-1" | {} | () => "-1" |
| "0" | {} | () => "0" |
| "1.5" | {} | () => "1.5" |
| "{}" | {} | () => "{}" |
| "{"foo": true}" | {} | () => "{"foo": true}" |
| "[]" | {} | () => "[]" |
| "{"foo": true}" | {} | () => "{"foo": true}" |


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
| -1.5 | {} | -1.5 |
| 0 | {} | 0 |
| 1 | {} | 1 |
| 2.292929192929392 | {} | 2.292929192929392 |
| "" | {} | "" |
| "hey" | {} | "hey" |
| "a,b,c" | {} | "a,b,c" |
| "a:b:c" | {} | "a:b:c" |
| "-1" | {} | "-1" |
| "0" | {} | "0" |
| "1.5" | {} | "1.5" |
| "{}" | {} | "{}" |
| "{"foo": true}" | {} | "{\"foo\": true}" |
| "[]" | {} | "[]" |
| "{"foo": true}" | {} | "{\"foo\": true}" |


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
| -1.5 | {} | -1.5 |
| 0 | {} | 0 |
| 1 | {} | 1 |
| 2.292929192929392 | {} | 2.292929192929392 |
| "" | {} | 0 |
| "hey" | {} | 3 |
| "hey" | {"count":false} | 0 |
| "a,b,c" | {} | 5 |
| "a,b,c" | {"count":false} | 0 |
| "a:b:c" | {} | 5 |
| "a:b:c" | {"count":false} | 0 |
| "-1" | {} | -1 |
| "0" | {} | 0 |
| "1.5" | {} | 1.5 |
| "{}" | {} | 2 |
| "{}" | {"count":false} | 0 |
| "{"foo": true}" | {} | 13 |
| "{"foo": true}" | {"count":false} | 0 |
| "[]" | {} | 2 |
| "[]" | {"count":false} | 0 |
| "{"foo": true}" | {} | 13 |
| "{"foo": true}" | {"count":false} | 0 |


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
| -1.5 | {} | {} |
| 0 | {} | {} |
| 1 | {} | {} |
| 2.292929192929392 | {} | {} |
| "" | {} | {} |
| "hey" | {} | {} |
| "a,b,c" | {} | {} |
| "a:b:c" | {} | {} |
| "-1" | {} | {} |
| "0" | {} | {} |
| "1.5" | {} | {} |
| "{}" | {} | {} |
| "{"foo": true}" | {} | {"foo":true} |
| "[]" | {} | [] |
| "{"foo": true}" | {} | {"foo":true} |


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
| -1.5 | {} |  |
| 0 | {} |  |
| 1 | {} |  |
| 2.292929192929392 | {} |  |
| 2.292929192929392 | {"escape":true} |  |
| "" | {} |  |
| "hey" | {} |  |
| "a,b,c" | {} |  |
| "a:b:c" | {} |  |
| "-1" | {} |  |
| "0" | {} |  |
| "1.5" | {} |  |
| "1.5" | {"escape":true} |  |
| "{}" | {} |  |
| "{}" | {"escape":true} |  |
| "{"foo": true}" | {} |  |
| "{"foo": true}" | {"escape":true} |  |
| "[]" | {} |  |
| "[]" | {"escape":true} |  |
| "{"foo": true}" | {} |  |
| "{"foo": true}" | {"escape":true} |  |


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
| -1.5 | {} | "-1.5" |
| 0 | {} | "0" |
| 1 | {} | "1" |
| 2.292929192929392 | {} | "2.292929192929392" |
| "" | {} | "" |
| "hey" | {} | "hey" |
| "a,b,c" | {} | "a,b,c" |
| "a:b:c" | {} | "a:b:c" |
| "-1" | {} | "-1" |
| "0" | {} | "0" |
| "1.5" | {} | "1.5" |
| "{}" | {} | "{}" |
| "{"foo": true}" | {} | "{\"foo\": true}" |
| "[]" | {} | "[]" |
| "{"foo": true}" | {} | "{\"foo\": true}" |
