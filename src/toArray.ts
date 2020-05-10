import { CastrArrayOptions, type } from './types'
import toString from './toString'
import toNumber from './toNumber'
import toBoolean from './toBoolean'
import toObject from './toObject'

export default function toArray<T extends any = string>(value: any, options: CastrArrayOptions = {}): T[] {
  if (Array.isArray(value)) {
    return value
  }
  if (typeof value === 'undefined' || value === null || typeof value === 'boolean') {
    return []
  }
  if (typeof value === 'number') {
    if (value <= 0 || options.fill === false) {
      return []
    }
    const array: T[] = []
    for (let i = 0; i < value; i++) {
      // @ts-ignore
      array.push(undefined)
    }
    return array
  }
  if (typeof value === 'string') {
    if (options.delimiter) {
      // @ts-ignore
      const array = value.split(options.delimiter) as T[]
      if (options.castr) {
        return array.map(i => {
          switch (options.castr) {
            case type.string: return toString(i)
            case type.number: return toNumber(i, options.castrOptions)
            case type.boolean: return toBoolean(i, options.castrOptions)
            case type.array: return toBoolean(i, options.castrOptions)
            case type.object: return toObject(i)
          }
        }) as T[]
      }
      return array
    }
    // @ts-ignore
    return value.split('') as T[]
  }
  if (typeof value === 'object') {
    if (options.keys) {
      // @ts-ignore
      return Object.keys(value) as T[]
    }
    const array: T[] = []
    for (const key in value) {
      array.push(value[key])
    }
    return array
  }
  return []
}
