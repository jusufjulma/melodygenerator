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
  riffi = riffitys(7)
  display.innerHTML = riffi.join(' ');
}

showRiffi();