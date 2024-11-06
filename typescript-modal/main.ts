const $openModal = document.querySelector('.open-modal');
if (!$openModal) throw new Error('$openModal not found');

const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) throw new Error('$dismissModal not found');

const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('$dialog not found');

$openModal.addEventListener('click', () => {
  $dialog.showModal();
});

$dismissModal.addEventListener('click', () => {
  $dialog.close();
});
