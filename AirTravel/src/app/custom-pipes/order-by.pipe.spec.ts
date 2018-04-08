import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
  it('sort the flight array based on price', () => {
    const pipe = new OrderByPipe();
    expect(pipe.transform([Object({amount: '2006'}), Object({amount: '1980'}), Object({amount: '890'})])).toEqual([Object({amount: '890'}), Object({amount: '1980'}), Object({amount: '2006'}) ]);
  });
});
