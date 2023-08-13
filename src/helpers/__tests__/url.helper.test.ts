import { getLastSegmentFromurl } from 'helpers/url.helper';

describe('getLastSegmentFromurl', () => {
  it('should return the last segment from a URL', () => {
    const shortUrl = 'https://short.com/testseg';
    const expectedLastSegment = 'testseg';

    const actualLastSegment = getLastSegmentFromurl(shortUrl);

    expect(actualLastSegment).toBe(expectedLastSegment);
  });
});
