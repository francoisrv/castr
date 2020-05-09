import * as castr from '.'
import { strollers } from './castr.specs'

for (const stroller of strollers) {
  describe(stroller.label, () => {
    for (const type in stroller.castrs) {
      describe(type, () => {
        for (const spec of stroller.castrs[type]) {
          const labels = [stroller.label]
          if ('options' in spec) {
            labels.push(JSON.stringify(spec.options))
          }
          labels.push('=>')
          if ('expect' in spec) {
            if (typeof spec.expect === 'function') {
              labels.push(spec.expect.toString())
            } else {
              labels.push(JSON.stringify(spec.expect))
            }
          }
          if ('expectType' in spec) {
            labels.push(spec.expectType.name)
          }
          if ('expectProperty' in spec) {
            labels.push(JSON.stringify(spec.expectProperty))
          }
          if ('expectStringified' in spec) {
            labels.push(spec.expectStringified)
          }
          if ('expectCalled' in spec) {
            labels.push(`() => ${castr.toString(spec.expectCalled, {
              undefined: 'undefined',
              null: 'null'
            })}`)
          }
          it(labels.join(' '), () => {
            const casted = castr.to(type, stroller.value, spec.options)
            if ('expect' in spec) {
              expect(casted).toEqual(spec.expect)
            }
            if ('expectType' in spec) {
              expect(casted).toBeInstanceOf(spec.expectType)
            }
            if ('expectProperty' in spec) {
              if (typeof spec.expectProperty === 'string') {
                expect(casted).toHaveProperty(spec.expectProperty)
              } else {
                for (const prop in spec.expectProperty){
                  expect(casted).toHaveProperty(prop, spec.expectProperty[prop])
                }
              }
            }
            if ('expectStringified' in spec) {
              const incastr = castr.to(castr.type.string, casted)
              expect(incastr).toEqual(spec.expectStringified)
            }
            if('expectCalled' in spec) {
              const r = casted()
              expect(r).toEqual(spec.expectCalled)
            }
          })
        }
      })
    }
  })
}
