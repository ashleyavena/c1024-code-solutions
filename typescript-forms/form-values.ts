interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector<HTMLFormElement>('#contact-form');
if (!$contactForm) throw new Error('$contactForm not found');

function handleSubmit(event: Event): void {
  event.preventDefault();
  const $formElements = $contactForm?.elements as FormElements;
  const formObject = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('Form Data:', formObject);
  $contactForm?.reset();
}

$contactForm.addEventListener('submit', handleSubmit);
