export default function toObject(value: any): object {
  if (
    typeof value === 'undefined' ||
    value === null ||
    typeof value === 'boolean' ||
    typeof value === 'number'
  ) {
    return {}
  }
  if (typeof value === 'string') {
    try {
      const obj = JSON.parse(value)
      if (typeof obj === 'object') {
        return obj
      }
      return {}
    } catch (error) {
      return {}
    }
  }
  return {}
}
