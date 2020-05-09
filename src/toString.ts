export default function toString(value: any) {
  if (value === null) {
    return 'null'
  }
  if (typeof value === 'undefined') {
    return 'undefined'
  }
  if (typeof value === 'object') {
    return JSON.stringify(value)
  }
  return value.toString()
}
