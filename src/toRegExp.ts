import { CastrRegExpOptions } from './types'
import { escapeRegExp } from 'lodash'
import toString from './toString'

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
  const v = toString(value) || defaultRegexp
  if (options.escape && typeof v === 'string') {
    return new RegExp(escapeRegExp(v), options.flags)
  }
  return new RegExp(v, options.flags)
}
