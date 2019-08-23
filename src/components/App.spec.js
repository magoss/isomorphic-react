it('should test async test', done => {
  setTimeout(done, 100);
})

it('should test async 2', () => {
  return new Promise(resolve => setTimeout(resolve, 1300));
})
