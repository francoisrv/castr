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
  if (typeof value === 'object') {
    return JSON.stringify(value)
  }
  return value.toString()
}
