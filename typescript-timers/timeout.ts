const $h1 = document.querySelector('h1') as HTMLHeadElement;
if (!$h1) throw new Error('not found');

function messageChange(): void {
  $h1.textContent = 'hello there';
  console.log(' text changed to: hello there');
}

setTimeout(messageChange, 2000);
