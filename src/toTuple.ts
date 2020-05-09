import { CastrValue, CastrTupleOptions } from './types'

export default function toTuple(value: CastrValue, options?: CastrTupleOptions) {
  return value.toString()
}
