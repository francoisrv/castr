import { CastrBooleanOptions } from './types'
import includes from 'lodash.includes'

export default function toBoolean(value: any, options: CastrBooleanOptions = {}): boolean {
  const isTrue = [true, 'true', 1]
  if (options.true) {
    isTrue.push(...options.true)
  }
  const isFalse = [false, 'false', 0]
  if (options.false) {
    isFalse.push(...options.false)
  }
  if (options.empty === false && value !== null) {
    if (Array.isArray(value)) {
      
    }
    if (typeof value === 'object') {
      return Object.keys(value).length > 0
    }
  }
  if (includes(isFalse, value)) {
    return false
  }
  if (includes(isTrue, value)) {
    return true
  }
  return Boolean(value)
}
