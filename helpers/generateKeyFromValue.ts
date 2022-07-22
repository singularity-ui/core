import sha1 from 'sha1'

export function generateKeyFromValue(value: any): string {
  try {
    return sha1(JSON.stringify(value))
  } catch (err) {
    return String(value)
  }
}
