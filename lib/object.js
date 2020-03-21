export function getAt(target, key) {
  return key.split('.').reduce((prev, curr) => prev[curr], target)
}
