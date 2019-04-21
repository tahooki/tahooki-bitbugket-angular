import { DemoAnimation001Module } from './demo-animation001.module';

describe('DemoAnimation001Module', () => {
  let demoAnimation001Module: DemoAnimation001Module;

  beforeEach(() => {
    demoAnimation001Module = new DemoAnimation001Module();
  });

  it('should create an instance', () => {
    expect(demoAnimation001Module).toBeTruthy();
  });
});
