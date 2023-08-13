/**
 * Retrieves the last segment from a given URL.
 * 
 * @param {string} shortUrl - The short URL from which to extract the last segment.
 * @returns {string} The last segment of the URL.
 * 
 * @example
 * const shortUrl = 'https://short.com/dsadas';
 * const lastSegment = getLastSegmentFromurl(shortUrl);
 * // lastSegment will be 'dsadas'
 */
export const getLastSegmentFromurl = (shortUrl) => {
    const url = new URL(shortUrl);
    const pathParts = url.pathname.split('/');
    const cleanPathParts = pathParts.filter(part => part !== '');
    const lastSegment = cleanPathParts[cleanPathParts.length - 1];
    return lastSegment;
}