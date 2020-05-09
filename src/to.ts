import { type, CastrArrayOptions } from './types'
import toArray from './toArray'

export default function to<T extends any = any>(castr: type.array, value: any, options: CastrArrayOptions): T[]

export default function to<T extends any = any>(castr: type, value: any, options?: any): any {
  switch (castr) {
    case type.array: return toArray<T>(value, options)
  }
}