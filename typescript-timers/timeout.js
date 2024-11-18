'use strict';
const $h1 = document.querySelector('h1');
if (!$h1) throw new Error('not found');
function messageChange() {
  $h1.textContent = 'hello there';
  console.log(' text changed to: hello there');
}
setTimeout(() => {
  messageChange();
}, 2000);
