import toString from "./toString"

export default function toError(value: any): Error {
  if (
    typeof value === 'undefined' ||
    value === null ||
    typeof value === 'boolean'
  ) {
    return new Error()
  }
  return new Error(toString(value))
}
