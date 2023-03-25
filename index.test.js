const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimProperties(input)
    expect(input).toEqual(expected)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed',() => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = {foo: `foo`,bar: `bar`,baz: `baz`}
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in',() => {
    const inputobj = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const resultobj = utils.trimPropertiesMutation(inputobj)
    expect(resultobj).toBe(inputobj)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }',() => {
    const input = [{integer:1},{integer:4},{integer:6},{integer:9}]
    const expected = {integer:9}
    const actual = utils.findLargestInteger(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count',()=> {
    const input = 3
    const expected = 3
    const actual = counter.countDown(input)
    expect(actual).toEqual(expected)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one',() => {
    const input = 3
    const expected = 2
    let actual = counter.countDown(input)
    actual = counter.countDown(actual)
    expect(actual).toEqual(expected)
  })
  test('[8] the count eventually reaches zero but does not go below zero',() => {
    const input = 3
    const expected = 0
    let actual = counter.countDown(input)
    for(let i = 0; i <= 4; i++){
      actual = counter.countDown(actual)
    }
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"',() => {
    let actual = seasons.next()
    expect(actual).toEqual("summer")
  })
  test('[10] the SECOND call of seasons.next returns "fall"',() => {
    let actual = seasons.next()
    actual = seasons.next()
    expect(actual).toEqual("fall")
  })
  test('[11] the THIRD call of seasons.next returns "winter"',() => {
    let actual = ""
    for(let i = 0; i < 3; i++){
      actual = seasons.next()
    }
    expect(actual).toEqual("winter")
  })
  test('[12] the FOURTH call of seasons.next returns "spring"',() => {
    let actual = ""
    for(let i = 0; i < 4; i++){
      actual = seasons.next()
    }
    expect(actual).toEqual("spring")
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let actual = ""
    for(let i = 0; i < 5; i++){
      actual = seasons.next()
    }
    expect(actual).toEqual("summer")
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let actual = ""
    for(let i = 0; i < 40; i++){
      actual = seasons.next()
    }
    expect(actual).toEqual("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer',() => {
    const input = 100
    const expected = 100
    actual = focus.drive(input)
    expect(actual).toEqual(expected)
  })
  test('[16] driving the car uses gas',() => {
    const startingGas = focus.tank
    focus.drive(100)
    const actual = focus.tank
    expect(actual).toBeLessThan(startingGas)
  })
  test('[17] refueling allows to keep driving',() => {
    const expected = 700
    focus.drive(600)
    focus.refuel(20)
    const actual = focus.drive(100)
    expect(actual).toEqual(expected)
  })
  test('[18] adding fuel to a full tank has no effect',()=>{
    const expected = 20
    focus.refuel(20)
    expect(focus.tank).toEqual(expected)    
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const result = await utils.isEvenNumberAsync(2)
    expect(result).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const result = await utils.isEvenNumberAsync(3)
    expect(result).toBe(false)
  })
})
