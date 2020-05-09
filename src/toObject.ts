export default function toObject(value: any): object {
  if (typeof value === 'string') {
    return JSON.parse(value)
  }
  return value
}