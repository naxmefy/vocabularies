import permitValidator from './permit-validator'
import validator from 'validator'

describe('permit-validator', () => {
  describe('for required', () => {
    test.each`
      actual             | validator     | expected
      ${0}               | ${'required'} | ${true}
      ${1}               | ${'required'} | ${true}
      ${''}              | ${'required'} | ${true}
      ${'test'}          | ${'required'} | ${true}
      ${true}            | ${'required'} | ${true}
      ${false}           | ${'required'} | ${true}
      ${null}            | ${'required'} | ${false}
      ${undefined}       | ${'required'} | ${false}
      ${0}               | ${'min=0'}    | ${true}
      ${0}               | ${'min=1'}    | ${false}
      ${0}               | ${'max=0'}    | ${true}
      ${1}               | ${'max=0'}    | ${false}
      ${null}            | ${'email'}    | ${false}
      ${''}              | ${'email'}    | ${false}
      ${'test'}          | ${'email'}    | ${false}
      ${'test@test'}     | ${'email'}    | ${false}
      ${'test@test.com'} | ${'email'}    | ${true}
    `('should be $expected for validator $validator with value $actual', ({ actual, validator, expected }) => {
      expect(permitValidator(actual, validator)).toBe(expected)
    })
  })
})
