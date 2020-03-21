import permitValidator from './permit-validator'
import validator from 'validator'

describe('permit-validator', () => {
  describe('for required', () => {
    test.each`
      actual             | validator           | expected
      ${0}               | ${'required'}       | ${undefined}
      ${1}               | ${'required'}       | ${undefined}
      ${''}              | ${'required'}       | ${undefined}
      ${'test'}          | ${'required'}       | ${undefined}
      ${''}              | ${'required'}       | ${undefined}
      ${false}           | ${'required'}       | ${undefined}
      ${null}            | ${'required'}       | ${'required'}
      ${undefined}       | ${'required'}       | ${'required'}
      ${0}               | ${'min=0'}          | ${undefined}
      ${0}               | ${'min=1'}          | ${'min=1'}
      ${0}               | ${'max=0'}          | ${undefined}
      ${1}               | ${'max=0'}          | ${'max=0'}
      ${null}            | ${'email'}          | ${'email'}
      ${''}              | ${'email'}          | ${'email'}
      ${'test'}          | ${'email'}          | ${'email'}
      ${'test@test'}     | ${'email'}          | ${'email'}
      ${'test@test.com'} | ${'email'}          | ${undefined}
      ${null}            | ${'required:email'} | ${'required'}
      ${''}              | ${'required:email'} | ${'email'}
      ${'test@test.com'} | ${'required:email'} | ${undefined}
    `('should be $expected for validator $validator with value $actual', ({ actual, validator, expected }) => {
      expect(permitValidator(actual, validator)).toBe(expected)
    })
  })
})
