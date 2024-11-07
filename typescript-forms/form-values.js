'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) throw new Error('$contactForm not found');
function handleSubmit(event) {
  event.preventDefault();
  const $formElements = $contactForm?.elements;
  const formObject = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('Form Data:', formObject);
  $contactForm?.reset();
}
$contactForm.addEventListener('submit', handleSubmit);
