'use strict';
const $tabContainer = document.querySelector('.tab-container');
if (!$tabContainer) throw new Error('$tabContainer not found');
const $tabs = document.querySelectorAll('.tab');
if (!$tabs) throw new Error('$tabs not found');
const $views = document.querySelectorAll('.view');
if (!$views) throw new Error('$views not found');
function firstFunction(event) {
  const $eventTarget = event?.target;
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === $eventTarget) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
    const $data = $eventTarget.getAttribute('data-view');
    for (let x = 0; x < $views.length; x++) {
      if ($data === $views[x].getAttribute('data-view')) {
        $views[x].className = 'view';
      } else {
        $views[x].className = 'view hidden';
      }
    }
  }
}
$tabContainer.addEventListener('click', firstFunction);
