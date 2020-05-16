import * as castr from '.'

interface Spec {
  expect?: any
  expectType?: Function
  expectProperty?: string | { [property: string]: any }
  expectStringified?: string
  options?: any
  expectCalled?: any
}

interface Stroller {
  label: string
  value: any
  castrs: {
    [t in castr.type]: Spec[]
  }
}

export const strollers: Stroller[] = [
  // undefined
  {
    value: undefined,
    label: 'undefined',
    castrs: {
      [castr.type.array]: [
        { expect: [] }
      ],
      [castr.type.boolean]: [
        { expect: false }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '' } }
      ],
      [castr.type.function]: [
        { expectCalled: undefined }
      ],
      [castr.type.json]: [
        { expect: '' }
      ],
      [castr.type.number]: [
        { expect: 0 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/.*/' }
      ],
      [castr.type.string]: [
        { expect: '' },
        { options: { undefined: 'undefined' }, expect: 'undefined' },
        { options: { undefined: 'cool' }, expect: 'cool' },
        { options: { undefined: 2 }, expect: '2' },
      ],
    }
  },

  // null
  {
    value: null,
    label: 'null',
    castrs: {
      [castr.type.array]: [
        { expect: [] }
      ],
      [castr.type.boolean]: [
        { expect: false }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '' } }
      ],
      [castr.type.function]: [
        { expectCalled: null }
      ],
      [castr.type.json]: [
        { expect: '' }
      ],
      [castr.type.number]: [
        { expect: 0 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/.*/' }
      ],
      [castr.type.string]: [
        { expect: '' },
        { options: { null: 'null' }, expect: 'null' },
        { options: { null: 'cool' }, expect: 'cool' },
        { options: { null: 2 }, expect: '2' },
      ],
    }
  },

  // true
  {
    value: true,
    label: 'true',
    castrs: {
      [castr.type.array]: [
        { expect: [] }
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '' } }
      ],
      [castr.type.function]: [
        { expectCalled: true }
      ],
      [castr.type.json]: [
        { expect: true }
      ],
      [castr.type.number]: [
        { expect: 1 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/.*/' }
      ],
      [castr.type.string]: [
        { expect: 'true' },
        { options: { true: 'true' }, expect: 'true' },
        { options: { true: 'cool' }, expect: 'cool' },
        { options: { true: true }, expect: 'true' },
      ],
    }
  },

  // false
  {
    value: false,
    label: 'false',
    castrs: {
      [castr.type.array]: [
        { expect: [] }
      ],
      [castr.type.boolean]: [
        { expect: false }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '' } }
      ],
      [castr.type.function]: [
        { expectCalled: false }
      ],
      [castr.type.json]: [
        { expect: false }
      ],
      [castr.type.number]: [
        { expect: 0 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/.*/' }
      ],
      [castr.type.string]: [
        { expect: 'false' },
        { options: { false: 'false' }, expect: 'false' },
        { options: { false: 'cool' }, expect: 'cool' },
        { options: { false: false }, expect: 'false' },
      ],
    }
  },

  // -1
  {
    value: -1,
    label: '-1',
    castrs: {
      [castr.type.array]: [
        { expect: [] }
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date, expectStringified: castr.toString(new Date(-1)) }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '-1' } }
      ],
      [castr.type.function]: [
        { expectCalled: -1 }
      ],
      [castr.type.json]: [
        { expect: -1 }
      ],
      [castr.type.number]: [
        { expect: -1 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/-1/' }
      ],
      [castr.type.string]: [
        { expect: '-1' }
      ],
    }
  },

  // -1.5
  {
    value: -1.5,
    label: '-1.5',
    castrs: {
      [castr.type.array]: [
        { expect: [] }
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date, expectStringified: castr.toString(new Date(-1.5)) }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '-1.5' } }
      ],
      [castr.type.function]: [
        { expectCalled: -1.5 }
      ],
      [castr.type.json]: [
        { expect: -1.5 }
      ],
      [castr.type.number]: [
        { expect: -1.5 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/-1.5/' }
      ],
      [castr.type.string]: [
        { expect: '-1.5' }
      ],
    }
  },

  // 0
  {
    value: 0,
    label: '0',
    castrs: {
      [castr.type.array]: [
        { expect: [] }
      ],
      [castr.type.boolean]: [
        { expect: false }
      ],
      [castr.type.date]: [
        { expectType: Date, expectStringified: castr.toString(new Date(0)) }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '0' } }
      ],
      [castr.type.function]: [
        { expectCalled: 0 }
      ],
      [castr.type.json]: [
        { expect: 0 }
      ],
      [castr.type.number]: [
        { expect: 0 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/0/' }
      ],
      [castr.type.string]: [
        { expect: '0' }
      ],
    }
  },

  // 1
  {
    value: 1,
    label: '1',
    castrs: {
      [castr.type.array]: [
        { expect: [undefined] },
        { options: { fill: false }, expect: [] },
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date, expectStringified: castr.toString(new Date(1)) }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '1' } }
      ],
      [castr.type.function]: [
        { expectCalled: 1 }
      ],
      [castr.type.json]: [
        { expect: 1 }
      ],
      [castr.type.number]: [
        { expect: 1 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/1/' }
      ],
      [castr.type.string]: [
        { expect: '1' }
      ],
    }
  },

  // 2.292929192929392
  {
    value: 2.292929192929392,
    label: '2.292929192929392',
    castrs: {
      [castr.type.array]: [
        { expect: [undefined, undefined, undefined] },
        { options: { fill: false }, expect: [] },
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date, expectStringified: castr.toString(new Date(2.292929192929392)) }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '2.292929192929392' } }
      ],
      [castr.type.function]: [
        { expectCalled: 2.292929192929392 }
      ],
      [castr.type.json]: [
        { expect: 2.292929192929392 }
      ],
      [castr.type.number]: [
        { expect: 2.292929192929392 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/2.292929192929392/' },
        { options: { escape: true }, expectStringified: '/2\.292929192929392/' },
      ],
      [castr.type.string]: [
        { expect: '2.292929192929392' }
      ],
    }
  },

  // ""
  {
    value: '',
    label: '""',
    castrs: {
      [castr.type.array]: [
        { expect: [] }
      ],
      [castr.type.boolean]: [
        { expect: false }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '' } }
      ],
      [castr.type.function]: [
        { expectCalled: '' }
      ],
      [castr.type.json]: [
        { expect: '' }
      ],
      [castr.type.number]: [
        { expect: 0 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/.*/' },
      ],
      [castr.type.string]: [
        { expect: '' }
      ],
    }
  },

  // "hey"
  {
    value: 'hey',
    label: '"hey"',
    castrs: {
      [castr.type.array]: [
        { expect: ['h', 'e', 'y'] }
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: 'hey' } }
      ],
      [castr.type.function]: [
        { expectCalled: 'hey' }
      ],
      [castr.type.json]: [
        { expect: 'hey' }
      ],
      [castr.type.number]: [
        { expect: 3 },
        { options: { count: false }, expect: 0 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/hey/' },
      ],
      [castr.type.string]: [
        { expect: 'hey' }
      ],
    }
  },

  // "a,b,c"
  {
    value: 'a,b,c',
    label: '"a,b,c"',
    castrs: {
      [castr.type.array]: [
        { expect: ['a', ',', 'b', ',', 'c'] },
        { expect: ['a', 'b', 'c'], options:{  delimiter: ',' } },
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: 'a,b,c' } }
      ],
      [castr.type.function]: [
        { expectCalled: 'a,b,c' }
      ],
      [castr.type.json]: [
        { expect: 'a,b,c' }
      ],
      [castr.type.number]: [
        { expect: 5 },
        { options: { count: false }, expect: 0 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/a,b,c/' },
      ],
      [castr.type.string]: [
        { expect: 'a,b,c' }
      ],
    },
  },

  // "-1"
  {
    value: '-1',
    label: '"-1"',
    castrs: {
      [castr.type.array]: [
        { expect: ['-', '1'] },
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '-1' } }
      ],
      [castr.type.function]: [
        { expectCalled: '-1' }
      ],
      [castr.type.json]: [
        { expect: '-1' }
      ],
      [castr.type.number]: [
        { expect: -1 },
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/-1/' },
      ],
      [castr.type.string]: [
        { expect: '-1' }
      ],
    },
  },

  // "0"
  {
    value: '0',
    label: '"0"',
    castrs: {
      [castr.type.array]: [
        { expect: ['0'] },
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '0' } }
      ],
      [castr.type.function]: [
        { expectCalled: '0' }
      ],
      [castr.type.json]: [
        { expect: '0' }
      ],
      [castr.type.number]: [
        { expect: 0 },
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/0/' },
      ],
      [castr.type.string]: [
        { expect: '0' }
      ],
    },
  },

  // "1.5"
  {
    value: '1.5',
    label: '"1.5"',
    castrs: {
      [castr.type.array]: [
        { expect: ['1', '.', '5'] },
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '1.5' } }
      ],
      [castr.type.function]: [
        { expectCalled: '1.5' }
      ],
      [castr.type.json]: [
        { expect: '1.5' }
      ],
      [castr.type.number]: [
        { expect: 1.5 },
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/1.5/' },
        { expectStringified: '/1\.5/', options: { escape: true } },
      ],
      [castr.type.string]: [
        { expect: '1.5' }
      ],
    },
  },

  // "{}"
  {
    value: '{}',
    label: '"{}"',
    castrs: {
      [castr.type.array]: [
        { expect: ['{', '}'] },
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '{}' } }
      ],
      [castr.type.function]: [
        { expectCalled: '{}' }
      ],
      [castr.type.json]: [
        { expect: '{}' }
      ],
      [castr.type.number]: [
        { expect: 2 },
        { options: { count: false }, expect: 0 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/{}/' },
        { expectStringified: '/\{\}/', options: { escape: true } },
      ],
      [castr.type.string]: [
        { expect: '{}' }
      ],
    },
  },

  // "{\"foo\": true}"
  {
    value: '{"foo": true}',
    label: '"{\"foo\": true}"',
    castrs: {
      [castr.type.array]: [
        { expect: '{"foo": true}'.split('') },
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '{"foo": true}' } }
      ],
      [castr.type.function]: [
        { expectCalled: '{"foo": true}' }
      ],
      [castr.type.json]: [
        { expect: '{"foo": true}' }
      ],
      [castr.type.number]: [
        { expect: 13 },
        { options: { count: false }, expect: 0 }
      ],
      [castr.type.object]: [
        { expect: {"foo": true} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/{"foo": true}/' },
        { expectStringified: '/\{"foo": true\}/', options: { escape: true } },
      ],
      [castr.type.string]: [
        { expect: '{"foo": true}' }
      ],
    },
  },

  // "[]"
  {
    value: '[]',
    label: '"[]"',
    castrs: {
      [castr.type.array]: [
        { expect: '[]'.split('') },
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '[]' } }
      ],
      [castr.type.function]: [
        { expectCalled: '[]' }
      ],
      [castr.type.json]: [
        { expect: '[]' }
      ],
      [castr.type.number]: [
        { expect: 2 },
        { options: { count: false }, expect: 0 }
      ],
      [castr.type.object]: [
        { expect: [] }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/[]/' },
        { expectStringified: '/\[\]/', options: { escape: true } },
      ],
      [castr.type.string]: [
        { expect: '[]' }
      ],
    },
  },

  // {}
  {
    value: {},
    label: '{}',
    castrs: {
      [castr.type.array]: [
        { expect: [] },
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '{}' } }
      ],
      [castr.type.function]: [
        { expectCalled: {} }
      ],
      [castr.type.json]: [
        { expect: {} }
      ],
      [castr.type.number]: [
        { expect: 0 },
        { options: { count: false }, expect: 0 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/{}/' },
        { expectStringified: '/\{\}/', options: { escape: true } },
      ],
      [castr.type.string]: [
        { expect: '{}' },
        { options: { parse: false }, expect: '[object Object]'}
      ],
    },
  },

  // { foo: true }
  {
    value: { foo: true },
    label: '{ "foo": true }',
    castrs: {
      [castr.type.array]: [
        { expect: [true] },
        { expect: ['foo'], options: { keys: true } },
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '{"foo":true}' } }
      ],
      [castr.type.function]: [
        { expectCalled: { foo: true } }
      ],
      [castr.type.json]: [
        { expect: { foo: true } }
      ],
      [castr.type.number]: [
        { expect: 1 },
        { options: { count: false }, expect: 0 }
      ],
      [castr.type.object]: [
        { expect: { foo: true } }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/{"foo":true}/' },
        { expectStringified: '/\{"foo":true\}/', options: { escape: true } },
      ],
      [castr.type.string]: [
        { expect: '{"foo":true}' },
        { options: { parse: false }, expect: '[object Object]'}
      ],
    },
  },

  // []
  {
    value: [],
    label: '[]',
    castrs: {
      [castr.type.array]: [
        { expect: [] },
      ],
      [castr.type.boolean]: [
        { expect: true }
      ],
      [castr.type.date]: [
        { expectType: Date }
      ],
      [castr.type.error]: [
        { expectType: Error, expectProperty: { message: '' } }
      ],
      [castr.type.function]: [
        { expectCalled: [] }
      ],
      [castr.type.json]: [
        { expect: [] }
      ],
      [castr.type.number]: [
        { expect: 0 },
        { options: { count: false }, expect: 0 }
      ],
      [castr.type.object]: [
        { expect: {} }
      ],
      [castr.type.regexp]: [
        { expectStringified: '/.*/' },
      ],
      [castr.type.string]: [
        { expect: '' },
        { options: { parse: true }, expect: '[]'}
      ],
    },
  },

  // new Error('foo')
  // {
  //   value: new Error('foo'),
  //   label: 'new Error("foo")',
  //   castrs: {
  //     [castr.type.array]: [
  //       { expect: [] },
  //     ],
  //     [castr.type.boolean]: [
  //       { expect: true }
  //     ],
  //     [castr.type.date]: [
  //       { expectType: Date }
  //     ],
  //     [castr.type.error]: [
  //       { expectType: Error, expectProperty: { message: 'Error: foo' } }
  //     ],
  //     [castr.type.function]: [
  //       { expectCalled: {} }
  //     ],
  //     [castr.type.json]: [
  //       { expect: {} }
  //     ],
  //     [castr.type.number]: [
  //       { expect: 0 },
  //       { options: { count: false }, expect: 0 }
  //     ],
  //     [castr.type.object]: [
  //       { expect: {} }
  //     ],
  //     [castr.type.regexp]: [
  //       { expectStringified: '/{}/' },
  //       { expectStringified: '/\{\}/', options: { escape: true } },
  //     ],
  //     [castr.type.string]: [
  //       { expect: '{}' },
  //       { options: { parse: false }, expect: '[object Object]'}
  //     ],
  //   },
  // }
]
// .filter(stroller => stroller.label === '[]')
