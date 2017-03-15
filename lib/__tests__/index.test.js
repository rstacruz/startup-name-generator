const name = require('../index')

test('works for two words', () => {
  const result = name('health fit')
  expect(result).toContain('Fitline')
  expect(result).toContain('Healthmark')
  expect(result).toContain('Fitness')
  expect(result).toContain('Omnifit')
})

test('works for no words', () => {
  const result = name([])
  expect(result).toContain('Truecast')
  expect(result).toContain('Coredock')
  expect(result).toContain('Goup')
})

test('works for one word in an array', () => {
  const result = name(['a'])
  expect(result).toContain('Ary')
  expect(result).toContain('Meta')
  expect(result).toContain('Ina')
})

test('works for super long words', () => {
  const result = name(['management'])
  expect(result).toContain('Managementary')
})

test('works for super super long words', () => {
  const result = name(['cocacola'])
  expect(result).toContain('Cocacolary')
})
