import trim from '../src';

describe('trim test', (): void => {
  test('no space', (): void => {
    const response: string = trim('test');
    expect(response).toBe('test');
  });

  test('left space', (): void => {
    const response: string = trim('   test');
    expect(response).toBe('test');
  });

  test('right space', (): void => {
    const response: string = trim('test   ');
    expect(response).toBe('test');
  });

  test('left&right space', (): void => {
    const response: string = trim('   test   ');
    expect(response).toBe('test');
  });
});