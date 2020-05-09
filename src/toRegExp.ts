import { CastrRegExpOptions } from './types'
import { escapeRegExp } from 'lodash'

export default function toRegExp(value: RegExp | string, options: CastrRegExpOptions = {}): RegExp {
  const defaultRegexp = /.*/
  if (value instanceof RegExp) {
    return value
  }
  if (
    typeof value === 'undefined' ||
    value === null ||
    typeof value === 'boolean' ||
    (typeof value === 'string' && !value)
  ) {
    return defaultRegexp
  }
  if (options.escape) {
    return new RegExp(escapeRegExp(value), options.flags)
  }
  return new RegExp(value, options.flags)
}
