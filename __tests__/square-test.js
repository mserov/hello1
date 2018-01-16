describe('output tests', () => {
  it('should return \'hello again!\' as first output string', () => {
    expect( console.log.calledWith('hello again!') ).toBe(true);
   });
});
