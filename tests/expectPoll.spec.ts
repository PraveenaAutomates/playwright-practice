import { test, expect } from '@playwright/test';

test('Practice expect.poll', async () => {

  let attempts = 0;

  async function getOrderStatus(): Promise<string> {
    attempts++;

    if (attempts < 3) {
      return 'Processing';
    }

    return 'Delivered';
  }

  await expect.poll(
    async () => await getOrderStatus(),
    {
      timeout: 5000,
      intervals: [1000]
    }
  ).toBe('Delivered');

  console.log('Total attempts:', attempts);

});