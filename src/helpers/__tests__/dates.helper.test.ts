import { getCurrentTimestampInSeconds } from 'helpers/dates.helpers';

describe('getCurrentTimestampInSeconds', () => {
  it('should return the current timestamp in seconds', () => {
    const now = new Date().getTime();
    const expectedTimestamp = Math.floor(now / 1000);
    const actualTimestamp = getCurrentTimestampInSeconds();
    expect(actualTimestamp).toBe(expectedTimestamp);
  });
});
