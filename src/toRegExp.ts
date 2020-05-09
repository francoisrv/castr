import { CastrRegExpOptions } from './types'
import { escapeRegExp } from 'lodash'

export default function toRegExp(value: RegExp | string, options: CastrRegExpOptions = {}): RegExp {
  if (value instanceof RegExp) {
    return value
  }
  if (options.escape) {
    return new RegExp(escapeRegExp(value), options.flags)
  }
  return new RegExp(value, options.flags)
}