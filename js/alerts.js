/* ================================
   USS AZURA ALERT SYSTEM
   Web Audio (.mp3 via URL)
   Mobile Friendly
================================ */

// 🔊 ใส่ลิงก์เสียงของคุณตรงนี้
const ALERT_SOUNDS = {
  red: 'https://www.trekcore.com/audio/redalertandklaxons/tng_nemesis_intruder_alert.mp3',
  yellow: 'https://www.trekcore.com/audio/redalertandklaxons/voy_intruder_alert.mp3',
  blue: 'https://www.trekcore.com/audio/redalertandklaxons/voybluealert.mp3',
  black: 'https://www.trekcore.com/audio/aliensounds/romulan_alarm.mp3',
  proximity: 'https://www.trekcore.com/audio/redalertandklaxons/alertklaxon_clean2.mp3'
};

// สร้าง Audio Objects
const audioBank = {};
Object.keys(ALERT_SOUNDS).forEach(key => {
  audioBank[key] = new Audio(ALERT_SOUNDS[key]);
  audioBank[key].preload = 'auto';
});

// 🔓 ปลดล็อกเสียง (ต้องกดครั้งแรกบนมือถือ)
function initAudioSystem() {
  Object.values(audioBank).forEach(audio => {
    audio.play().then(() => {
      audio.pause();
      audio.currentTime = 0;
    }).catch(() => {});
  });
  console.log('Audio system initialized');
}

// 🔊 เล่นเสียง
function playAlertSound(key) {
  const audio = audioBank[key];
  if (!audio) return;

  audio.pause();
  audio.currentTime = 0;
  audio.play().catch(() => {
    console.warn('Audio blocked until user interaction');
  });
}

// 🎛️ ตั้งค่า Alert
function setAlert(colorClass, text, soundKey) {
  document.body.className = colorClass || '';
  const el = document.getElementById('alertText');
  if (el) el.innerText = text;
  playAlertSound(soundKey);
}

/* ================================
   ALERT COMMANDS
================================ */

function redAlert() {
  setAlert(
    'red',
    'RED ALERT — ALL HANDS TO BATTLE STATIONS',
    'red'
  );
}

function yellowAlert() {
  setAlert(
    'yellow',
    'YELLOW ALERT — DEFENSIVE SYSTEMS ACTIVE',
    'yellow'
  );
}

function blueAlert() {
  setAlert(
    'blue',
    'BLUE ALERT — LANDING SEQUENCE INITIATED',
    'blue'
  );
}

function blackAlert() {
  setAlert(
    'black',
    'BLACK ALERT — SPORE DRIVE ENGAGED',
    'black'
  );
}

function proximityAlert() {
  setAlert(
    '',
    'PROXIMITY ALERT — OBJECT DETECTED',
    'proximity'
  );
    }
