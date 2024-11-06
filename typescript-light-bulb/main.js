"use strict";
const $circleLight = document.querySelector('.circle-light ');
if (!$circleLight)
    throw new Error('$circleLight not found');
const $circleDark = document.querySelector('.circle-dark ');
if (!$circleDark)
    throw new Error('$circleDark not found');
const $dialog = document.querySelector('dialog');
if (!$dialog)
    throw new Error('$dialog not found');
// const $containerTransition= document.querySelector('.container-transition')
// if (!$containerTransition) throw new Error('$containerTransition not found');
$circleLight.addEventListener('click', () => {
    $dialog.show();
}, $circleDark.addEventListener('click', () => {
    $dialog.close();
}));
