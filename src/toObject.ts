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
      return JSON.parse(value)
    } catch (error) {
      return {}
    }
  }
  return {}
}
