/* exported toObject */

function toObject(keyValuePair: any): any {
  const object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
