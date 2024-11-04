const $button = document.querySelector('.click-button');
if (!$button) throw new Error('$button was not found');

function handleClick(event: Event): any {
  console.log('button clicked!');
  console.log('event', event);
  console.log('event.target', event.target);
}

$button.addEventListener('click', handleClick);

const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('$hoverButton was not found');

function handleMouseOver(event: Event): any {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}

$hoverButton.addEventListener('mouseover', handleMouseOver);

const $doubleClick = document.querySelector('.double-click-button');
if (!$doubleClick) throw new Error('$doubleClick was not found');

function handleDoubleClick(event: Event): any {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

$doubleClick.addEventListener('dblclick', handleDoubleClick);
