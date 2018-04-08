import { RefineByPrice } from './refine-by-price.pipe';

describe('RefineByPrice', () => {
  it('create an instance', () => {
    const pipe = new RefineByPrice();
    expect(pipe).toBeTruthy();
  });

  it('refine the flight array based on price', () => {
    const pipe = new RefineByPrice();
  expect(pipe.transform([Object({amount: 2006}), 
   Object({amount: 90}),
   Object({amount: 1980})],"2000")).toEqual([Object({amount: 90}),
   Object({amount: 1980})]);
  });
});
