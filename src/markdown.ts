import { type } from './types'
import { strollers } from './castr.specs'
import compact from 'lodash.compact'

export default function markdown(t: type) {
  let f = ''
  if (t === type.array) {
    f = 'toArray'
  } else if (t === type.boolean) {
    f = 'toBoolean'
  } else if (t === type.date) {
    f = 'toDate'
  } else if (t === type.string) {
    f = 'toString'
  } else if (t === type.error) {
    f = 'toError'
  } else if (t === type.function) {
    f = 'toFunction'
  } else if (t === type.json) {
    f = 'toJSON'
  } else if (t === type.number) {
    f = 'toNumber'
  } else if (t === type.regexp) {
    f = 'toRegExp'
  } else if (t === type.object) {
    f = 'toObject'
  }
  return `
## ${ f }

\`\`\`js
castr.${ f }(value, options) // cast
// or
castr.to(castr.type.${ t })(value, options)
\`\`\`

| value | options | cast |
|-------|---------|------|${
  strollers.map(stroller => {
    const specs: string[] = ['']
    for (const spec of stroller.castrs[t]) {
      const inner = [
        stroller.label,
        JSON.stringify(spec.options || {}),
        compact([
          ('expect' in spec) && JSON.stringify(spec.expect),
          ('expectType' in spec) && spec.expectType === Date && `new Date()`,
          ('expectType' in spec) && spec.expectType === Error && `new Error("${ spec.expectProperty.message }")`,
          ('expectCalled' in spec) && `() => ${ stroller.label }`
        ]).join(' ')
      ]
      specs.push(`| ${ inner.join(' | ') } |`)
    }
    return specs.join('\n')
  }).join('')
}
`
}
