"use strict";
// const $span = document.querySelector('#container span');
// if (!$span) throw new Error('$span not found');
const $nodeList = document.querySelectorAll('#container span');
if (!$nodeList)
    throw new Error('$nodeList not found');
let currentIndex = 0;
document.addEventListener('keydown', (event) => {
    if (currentIndex < $nodeList.length) {
        const currentSpan = $nodeList[currentIndex];
        if (event.key === currentSpan.textContent) {
            currentSpan.className = 'green';
            currentIndex++;
        }
        else {
            currentSpan.className = 'red';
        }
    }
});
// nodeArray.forEach($span, index)=>{
// $span.addEventListener('keydown', (event)) => {
//   if (event.key=== $span.textContent){
//     $span.classList.add('green');
//     $span.classList.remove('red');
//     currentIndex++;
//     if (currentIndex< nodeArray.length){
//       nodeArray[currentIndex].focus();
//     }
//   }else{
//     $span.classList.add('green');
//     $span.classList.remove('red');
//   }
// }
// };
// nodeArray[0].focus();
// switch (event.key){
//   case "g":
//   $span.className= 'span.green';
//   break;
//   case "r":
//   $span.className= 'span.green';
//   break;
//   default:
//   $span.className= 'span.red';
//   };
// };
// As the user triggers 'keydown' events on the document, keep track of what character of the phrase they are on by its index.
// The user should know what key to type next.
// The user should know when they got a key right.
// The user should know when they got a key wrong and need to retry.
