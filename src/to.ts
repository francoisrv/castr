import { type, CastrArrayOptions, CastrBooleanOptions, CastrNumberOptions, CastrRegExpOptions, CastrStringOptions } from './types'
import toArray from './toArray'
import toString from './toString'
import toNumber from './toNumber'
import toBoolean from './toBoolean'
import toObject from './toObject'
import toDate from './toDate'
import toError from './toError'
import toFunction from './toFunction'
import toJSON from './toJSON'
import toRegExp from './toRegExp'

export default function to<T extends any = any>(castr: type.array, value: any, options?: CastrArrayOptions): T[]

export default function to(castr: type.boolean, value: any, options?: CastrBooleanOptions): boolean

export default function to(castr: type.date, value: any): Date

export default function to(castr: type.error, value: any): Error

export default function to<T extends Function = Function>(castr: type.function, value: any): T

export default function to<T extends any = any>(castr: type.json, value: any): T

export default function to(castr: type.number, value: any, options: CastrNumberOptions): number

export default function to<T extends object = object>(castr: type.object, value: any): T

export default function to(castr: type.regexp, value: any, options: CastrRegExpOptions): RegExp

export default function to(castr: type.string, value: any, options: CastrStringOptions): string

export default function to<T extends any = any>(castr: type, value: any, options?: any): any {
  switch (castr) {
    case type.array: return toArray<T>(value, options)
    case type.boolean: return toBoolean(value, options)
    case type.date: return toDate(value)
    case type.error: return toError(value)
    case type.function: return toFunction(value)
    case type.json: return toJSON(value)
    case type.number: return toNumber(value, options)
    case type.object: return toObject(value)
    case type.regexp: return toRegExp(value)
    case type.string: return toString(value, options)
  }
}
