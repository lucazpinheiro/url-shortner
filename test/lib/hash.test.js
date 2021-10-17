const { hash } = require('../../src/lib')

describe('[hash function]', () => {
  test('ensure hash function generates a hash for a given url', () => {
    expect(hash('www.github.com'))
      .toBe('2d191c8c')

    expect(hash('www.github.com/lucazpinheiro'))
      .toBe('9cfd8e4')

    expect(hash('backendbrasil.com'))
      .toBe('39aed477')

    expect(hash('https://developer.mozilla.org/en-US/docs/Web/JavaScript'))
      .toBe('678e8c1')
  })
})
