export function parseUrl(urlStr: string) {
  if (typeof URL === 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Url = require('url');
    const url = Url.parse(urlStr, true);
    return {
      pathname: url.pathname,
      query: url.query,
      hash: url.hash,
    };
  }

  const url = new URL(urlStr);
  return {
    pathname: url.pathname,
    query: url.search,
    hash: url.hash,
  };
}

export function parseQs(queryStr: string) {
  if (typeof window === 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const qs = require('querystring');
    return qs.parse(queryStr);
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const qs = require('qs');
  return qs.parse(queryStr);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function qsStringify(obj: any) {
  if (typeof window === 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const qs = require('querystring');
    return qs.stringify(obj);
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const qs = require('qs');
  return qs.stringify(obj);
}
