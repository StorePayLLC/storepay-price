export function formatGidToInt(gid: string): number {
  const id = /\/(\d+)$/.exec(Buffer.from(gid, 'base64').toString('utf8'));
  return id ? parseInt(id[1]) : 0;
}

export function formatStringToBase64(val: string): string {
  return btoa(val);
}

export function formatGidToIntCustom(gid: string | undefined): number {
  if (!gid) {
    console.error('Invalid argument:', gid);
    return 0;
  }

  try {
    const decoded = Buffer.from(gid, 'base64').toString('utf8');
    const match = /\/(\d+)$/.exec(decoded);
    return match ? parseInt(match[1]) : 0;
  } catch (error) {
    console.error('Invalid base64 string:', gid);
    return 0;
  }
}

export function formatGidToIntNew(gid: unknown): number {
  if (typeof gid !== 'string') {
    console.error('Invalid gid type:', typeof gid, gid); // Debugging purpose
    return 0; // Or throw an error
  }

  const id = /\/(\d+)$/.exec(Buffer.from(gid, 'base64').toString('utf8'));
  return id ? parseInt(id[1], 10) : 0;
}
