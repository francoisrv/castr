export default function toJSON(value: any): any {
  if (typeof value === 'undefined' || value === null) {
    return ''
  }
  return value
}
