export type CastrValue =
| string
| number
| boolean

export interface CastrStringOptions {
  null?: string
  undefined?: string
  true?: string
  false?: string
  parse?: boolean
}

export interface CastrArrayOptions {
  delimiter?: string
  fill?: boolean
  keys?: boolean
  castr?: type
  castrOptions?: any
  castrTuple?: type[]
  castrTupleOptions?: any[]
}

export interface CastrBooleanOptions {
  false?: (boolean | string | number)[]
  true?: (boolean | string | number)[]
  empty?: boolean
}

export interface CastrRegExpOptions {
  escape?: boolean
  flags?: string
}

export interface CastrNumberOptions {
  count?: boolean
  NaN?: number
  Infinity?: number
}

export type CastrTupleOptions = Array<type>

export enum type {
  array = 'array',
  boolean = 'boolean',
  date = 'date',
  error = 'error',
  function = 'function',
  json = 'json',
  number = 'number',
  object = 'object',
  regexp = 'regexp',
  string = 'string',
}
