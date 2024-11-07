'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('$taskList not found');
function handleClicks(event) {
  const eventTarget = event.target;
  console.log('event.target', eventTarget);
  console.log('event.target.tagName', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const parentLiElement = eventTarget.closest('.task-list-item');
    console.log(parentLiElement);
    parentLiElement.remove();
  }
}
$taskList.addEventListener('click', handleClicks);
