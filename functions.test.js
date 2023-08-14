const func=require('./function')
test('returnTwo should return 2',()=>{
    expect(func.returnTwo()).toBe(2)
})
test('greeting should get Hello and name',()=>{
    expect(func.greeting('Laman')).toBe('Hello, Laman.')
})
test('add should return sum of nums',()=>{
     expect(func.add(4,5)).toBe(9)
})