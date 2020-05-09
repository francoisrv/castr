import { CastrNumberOptions } from './types'

export default function toNumber(value: any, options: CastrNumberOptions = {}): number {
  const { NaN: notANumber = 0, Infinity: inifnity = 0 } = options
  function finalForm(c: number | typeof Infinity) {
    return isFinite(c) ? c : inifnity
  }
  const parsed = Number(value)
  if (typeof value === 'undefined') {
    return finalForm(notANumber)
  }
  if (value === null) {
    return finalForm(notANumber)
  }
  if (typeof value === 'string') {
    if (/^-?\.\d+(\.\d+)?$/.test(value)) {
      return Number(value)
    }
    if (isNaN(parsed)) {
      if (options.count === false) {
        return finalForm(notANumber)
      }
      return finalForm(value.length)
    } else {
      if (options.count === false) {
        return finalForm(notANumber)
      }
      return finalForm(parsed)
    }
  }
  if (Array.isArray(value)) {
    if (options.count === false) {
      return finalForm(notANumber)
    }
    return finalForm(value.length)
  }
  if (typeof value === 'object') {
    if (options.count === false) {
      return finalForm(notANumber)
    }
    return finalForm(Object.keys(value).length)
  }
  return finalForm(isNaN(parsed) ? notANumber : parsed)
}