/* exported getKeys */

function getKeys(object: object): any {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
