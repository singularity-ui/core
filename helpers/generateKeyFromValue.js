import sha1 from 'sha1'

export default function generateKeyFromValue(value) {
  return sha1(JSON.stringify(value))
}
