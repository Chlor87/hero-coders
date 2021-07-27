import { expect, it } from '@jest/globals'
import { extractIds, groupByComponent, preparePrint } from './utils'

describe('utils', () => {
  describe('extractIds', () => {
    it('should extract ids from objects with "lead" field missing', () => {
      expect(
        extractIds([
          { id: 1 },
          { id: 2, lead: 'a' },
          { id: 3, lead: 'b' },
          { id: 4 }
        ])
      ).toEqual([1, 4])
    })
  })

  describe('groupByComponent', () => {
    it(`should group-count an array of objects by first component's name`, () => {
      expect(
        groupByComponent([
          { fields: { components: [{ name: 'a' }] } },
          { fields: { components: [{ name: 'b' }] } },
          { fields: { components: [{ name: 'c' }] } },
          { fields: { components: [{ name: 'a' }] } },
          { fields: { components: [{ name: 'b' }] } },
          { fields: { components: [{ name: 'c' }] } }
        ])
      ).toEqual({ a: 2, b: 2, c: 2 })
    })
  })

  describe('preparePrint', () => {
    it('should convert a mapping to pretty-printable array', () => {
      expect(preparePrint({ a: 2, b: 2, c: 2 })).toEqual([
        { component: 'a', issues: 2 },
        { component: 'b', issues: 2 },
        { component: 'c', issues: 2 }
      ])
    })
  })
})
