const add = (a, b) => a + b;

const generateGreeting = (name) => `Hello ${name}`;

test('Should add two numbers', () => {
  const result = add(1,4);
  expect(result).toBe(5);
});

test('Should output name in greeting', () => {
  const result = generateGreeting('test');
  expect(result).toMatch('Hello test');
});