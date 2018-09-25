const sum = require('./sum')
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3)
})

test('object assignment', () => {  //针对object的所有内容比较
  const data = {one: 1}
  data['two'] = 2
  expect(data).toEqual({one: 1,two:2})
})

test('adding positive numbers is not zero', () => {
  for (let a=1 ;a < 10;a++){
    for (let b=1;b<10;b++) {
      expect(a+b).not.toBe(0)
    }
  }
})

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero' ,() => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

test('two plus two', () => {
  const value = 2+2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  expect(value).toBe(4)
  expect(value).toEqual(4)
})


test('adding floating point numbers',() => {
  const value = 0.1 + 0.2
  // expect(value).toBe(0.3)
  expect(value).toBeCloseTo(0.3)
})

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

const  shoppingList = [
  'diapers',
  'kleenex',
  'paper towels',
  'beer'
]

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer')
})

// function compileAndroidCode() {
//   throw new ConfigError('you are using the wrong JDK')
// }

// test('compiler android goes as expected', () => {
//   expect(compileAndroidCode).toThrow()
//   expect(compileAndroidCode).toThrow(ConfigError)
//
//   expect(compileAndroidCode).toThrow('you are using the wrong JDK')
//   expect(compileAndroidCode).toThrow(/JDK/)
// })

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

it('knows that 2 and 2 make 4', () => {
  expect(2 + 2).toBe(4);
});
