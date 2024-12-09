import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<void> {
  const message = await read('foo', true);
  console.log(elapsed(), 'throwOnce:', message);
}

async function throwSeveral(): Promise<void> {
  const message = await read('foo1', true);
  console.log(elapsed(), 'throwSeveral1:', message);
  const message2 = await read('foo2', true);
  console.log(elapsed(), 'throwSeveral2:', message2);
  const message3 = await read('foo3', true);
  console.log(elapsed(), 'throwSeveral3:', message3);
}

async function throwChained(): Promise<void> {
  const message1 = await read('foo-chain', true);
  console.log(elapsed(), 'throwChained1:', message1);
  const message2 = await read(message1, true);
  console.log(elapsed(), 'throwChained2:', message2);
  const message3 = await read(message2, true);
  console.log(elapsed(), 'throwChained3:', message3);
}

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.log(elapsed(), 'thrown Error:', error);
}
