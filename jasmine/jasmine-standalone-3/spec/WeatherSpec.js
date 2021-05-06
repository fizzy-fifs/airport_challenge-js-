describe('Weather', () => {
  let weather
  beforeEach(() => {
    weather = new Weather()
  })
  it('give stormy sometimes', () => {
    spyOn(Math, 'random').and.returnValue(1)
    expect(weather.isStormy()).toBeTruthy()
  })

  it('gives not stormy other times', () => {
    spyOn(Math, 'random').and.returnValue(0)
    expect(weather.isStormy()).toBeFalsy()
  })
})