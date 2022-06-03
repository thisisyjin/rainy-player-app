// 날짜 렌더링

const $month = document.querySelector('.t-month');
const $date = document.querySelector('.t-date');
const $day = document.querySelector('.t-day');

const monthArr = [
  'JAN',
  'FAB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

const dayArr = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const today = new Date();

console.log(monthArr[today.getMonth()]);
console.log(dayArr[today.getDay()]);

$month.innerText = monthArr[today.getMonth()];
$date.innerText = today.getDate().toString().padStart(2, '0');
$day.innerText = dayArr[today.getDay()];

// 타이머

const $minutes = document.querySelector('#minutes');
const $seconds = document.querySelector('#seconds');
const $startBtn = document.querySelector('.timer-start');
const $stopBtn = document.querySelector('.timer-stop');

let min = 0;
let sec = 0;
let playing = false;

$minutes.addEventListener('change', (e) => {
  min = e.target.value;
});

$seconds.addEventListener('change', (e) => {
  sec = e.target.value;
});

$startBtn.addEventListener('click', () => {
  if (min === 0 && sec === 0) return;
  $startBtn.classList.add('hidden');
  $stopBtn.classList.remove('hidden');
  $minutes.disabled = true;
  $seconds.disabled = true;
  playing = true;
  countDownStart(min, sec);
  startMusic();

  min = 0;
  sec = 0;
});

// 음악 재생

const countDownStart = (min, sec) => {
  const countDown = setInterval(() => {
    if ($minutes.value == 0 && $seconds.value == 1) {
      endCount();
      stopMusic();
    }
    if (sec === 0) {
      sec += 59;
      min -= 1;
    } else {
      sec -= 1;
    }
    $minutes.value = min;
    $seconds.value = sec;
  }, 1000);

  const endCount = () => {
    clearInterval(countDown);
    console.log('끝!');
    playing = false;
    $minutes.disabled = false;
    $seconds.disabled = false;
    $startBtn.classList.remove('hidden');
    $stopBtn.classList.add('hidden');
  };
  // 중지
  $stopBtn.addEventListener('click', () => {
    endCount();
    stopMusic();
    $minutes.value = 0;
    $seconds.value = 0;
  });
};

// audio 태그 제어

const $audio = document.querySelector('#audioContainer');

const startMusic = () => {
  $audio.look = true;
  $audio.play();
};

const stopMusic = () => {
  $audio.pause();
};

// 볼륨 조절
const $desc = document.querySelector('.desc-head');
const $volumeRange = document.querySelector('.volume');

let volume = $volumeRange.value;

$volumeRange.addEventListener('change', (e) => {
  $audio.volume = e.target.value;
});

// 1. 테두리 효과

// Portrait / landscape 변환

const $portland = document.querySelector('.port-land');
const $app = document.querySelector('.app');
let isPortrait = false;

$portland.addEventListener('click', () => {
  if (!isPortrait) {
    isPortrait = true;
    $portland.classList.remove('portrait');
    $portland.classList.add('landscape');
  } else {
    isPortrait = false;
    $portland.classList.add('portrait');
    $portland.classList.remove('landscape');
  }
  isPortrait ? $app.classList.add('port') : $app.classList.remove('port');
});
