'use strict';
function handleFocus(event) {
  console.log("the 'focus' event was fired");
  const eventTarget = event.target;
  console.log('eventTarget.name:', eventTarget.name);
}
function handleBlur(event) {
  console.log("the 'blur' event was fired");
  const eventTarget = event.target;
  console.log('eventTarget.name:', eventTarget.name);
}
function handleInput(event) {
  console.log("the 'input' event was fired");
  const eventTarget = event.target;
  console.log(
    'eventTarget.name + eventTarget.value:',
    eventTarget.name + eventTarget.value
  );
}
const $userName = document.querySelector('#user-name');
if (!$userName) throw new Error('$userName not found');
const $userEmail = document.querySelector('#user-email');
if (!$userEmail) throw new Error('$userEmail not found');
const $userMessage = document.querySelector('#user-message');
if (!$userMessage) throw new Error('$userMessage not found');
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
