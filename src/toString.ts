import { CastrStringOptions } from "./types"

export default function toString(value: any, options: CastrStringOptions = {}): string {
  if (value === null) {
    return toString(options.null || '', options)
  }
  if (typeof value === 'undefined') {
    return toString(options.undefined || '', options)
  }
  if (value === true) {
    return toString(typeof options.true === 'string' ? options.true : 'true', options)
  }
  if (value === false) {
    return toString(typeof options.false === 'string' ? options.false : 'false', options)
  }
  if (value instanceof RegExp){
    return value.toString()
  }
  if (Array.isArray(value) && options.parse) {
    return JSON.stringify(value)
  }
  if (typeof value === 'object') {
    const str = value.toString()
    if (str === '[object Object]') {
      if (options.parse === false) {
        return str
      }
      return JSON.stringify(value)
    }
    return str
  }
  return value.toString()
}
