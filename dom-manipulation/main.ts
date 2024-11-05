let trackClicks = 0;

const $hotButton: any = document.querySelector('.hot-button');
const $clickCount: any = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The $hotButton query failed');

function handleClick(): void {
  trackClicks++;
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  $clickCount.textContent = `Clicks: ${trackClicks}`;
  if (trackClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (trackClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (trackClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (trackClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (trackClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', handleClick);
