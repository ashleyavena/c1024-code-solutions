const h1 = document.querySelector('h1') as HTMLHeadElement;
if (!h1) throw new Error('not found');

let count = 4;
const intervalID = setInterval(() => {
  if (count > 0) {
    h1.textContent = count.toString();
    console.log('Count:', count);
    count--;
  } else {
    clearInterval(intervalID);
    h1.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
