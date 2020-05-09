export default function toDate(value: Date | string | number): Date {
  if (typeof value === 'undefined') {
    return new Date()
  }
  return new Date(value)
}
