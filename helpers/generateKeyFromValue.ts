import sha1 from 'sha1'

export function generateKeyFromValue(value: any): string {
  return sha1(JSON.stringify(value))
}
