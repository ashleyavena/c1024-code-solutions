'use strict';
const $circleLight = document.querySelector('.circle-light');
if (!$circleLight) throw new Error('$circleLight not found');
const $container = document.querySelector('.container');
if (!$container) throw new Error('$container not found');
$circleLight.addEventListener('click', () => {
  if ($circleLight.className === 'circle-light') {
    $circleLight.className = 'circle-dark';
    $container.className = 'container darkGround';
  } else {
    $circleLight.className = 'circle-light';
    $container.className = 'container';
  }
});
