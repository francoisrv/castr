export default function toFunction(value: any): Function {
  return () => value
}
