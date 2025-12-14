const grid = document.getElementById('grid');
const fileInput = document.getElementById('fileInput');

let pads = JSON.parse(localStorage.getItem('pads')) ||
  Array.from({ length: 16 }, (_, i) => ({
    text: `КНОПКА ${i + 1}`,
    sound: '',
    color: '#1e293b',
    loop: false
  }));

let currentAudio = null;
let activePad = null;
let adminPadIndex = null;

function savePads() {
  localStorage.setItem('pads', JSON.stringify(pads));
}

function render() {
  grid.innerHTML = '';
  pads.forEach((pad, i) => {
    const btn = document.createElement('div');
    btn.className = 'pad';
    btn.innerHTML = pad.text.replace('\n', '<br>');
    btn.style.background = pad.color;

    btn.onclick = () => playPad(btn, i);

    let timer;
    btn.ontouchstart = () => {
      timer = setTimeout(() => openAdmin(i), 2000);
    };
    btn.ontouchend = () => clearTimeout(timer);

    grid.appendChild(btn);
  });
}

function playPad(btn, index) {
  const pad = pads[index];

  if (!pad.sound) return;

  if (activePad === btn) {
    currentAudio.pause();
    btn.classList.remove('active');
    activePad = null;
    currentAudio = null;
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
    activePad.classList.remove('active');
  }

  currentAudio = new Audio(pad.sound);
  currentAudio.loop = pad.loop;
  activePad = btn;

  btn.classList.add('active');
  currentAudio.play();

  currentAudio.onended = () => {
    if (!pad.loop) {
      btn.classList.remove('active');
      activePad = null;
      currentAudio = null;
    }
  };
}

function openAdmin(index) {
  adminPadIndex = index;

  const t = prompt("Текст кнопки:", pads[index].text);
  if (t !== null) pads[index].text = t;

  const c = prompt("Цвет (#HEX):", pads[index].color);
  if (c) pads[index].color = c;

  pads[index].loop = confirm("Автоповтор?");
  savePads();
  render();

  fileInput.click();
}

fileInput.onchange = e => {
  const file = e.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  pads[adminPadIndex].sound = url;
  savePads();
};

render();
