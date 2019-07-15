let display = document.getElementById('riffdisplay');
let trigger = document.getElementById('trigger');
trigger.addEventListener('mouseup', () => showRiffi());

function arpoja(range) {
  return Math.floor(Math.random() * (range + 1));
}

function riffitys(range) {
  let riffi = [];
  riffi.push(arpoja(range))
  for (let i = 0; i < 15; i++) {
    let seed = arpoja(range);

    if (seed < range/3*2) {
      if (arpoja(2) > 1 && riffi[i] != '.') {
        riffi.push('‒')
      } else {
        riffi.push('.')
      }
    }
    else riffi.push(arpoja(range))
  }

  // display.innerHTML = riffi.join(' ');
  return riffi;
}

function showRiffi(riffi) {
  // riffi = [0, '-', 3, '.', 5, '-', '-', 0, '.', 3, 6, 5, '.', 3, '-', 0];
  riffi = [0, 2, 3, 0, 0, 5, 0, 0, 7, 0, 0, 8, 7, 5, 7, 0, 0, 0, 10, 0, 2, 5, 3, 2, 0,
    2, 3, 0, 0, 5, 0, 0, 7, 0, 0, 8, 5, 7, 8, 5, 5, 5, 7, 8, 10, 8, 7, 5, 3, 2,];
  // riffi = riffitys(7)
  display.innerHTML = riffi.join(' ');
  soitto(riffi);
}