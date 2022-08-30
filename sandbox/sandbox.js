document.querySelector("#btn").addEventListener("click", () => {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  var analyser = audioContext.createAnalyser();

  var osc = audioContext.createOscillator();
  var gainNode = audioContext.createGain();
  gainNode.gain.exponentialRampToValueAtTime(0.6, audioContext.currentTime + 0.1);
  gainNode.gain.exponentialRampToValueAtTime(0.1, audioContext.currentTime + 2);
  osc.frequency.value = 440;
  osc.start(audioContext.currentTime);
  osc.stop(audioContext.currentTime + 2);
  osc.connect(gainNode);
  //osc.connect(analyser);
  gainNode.connect(audioContext.destination);
});

document.querySelector("#btn2").addEventListener("click", () => {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  var analyser = audioContext.createAnalyser();

  var osc = audioContext.createOscillator();
  var gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(0.6, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
  osc.frequency.value = 440;
  osc.start(audioContext.currentTime);
  osc.stop(audioContext.currentTime + 0.5);
  osc.connect(gainNode);
  //osc.connect(analyser);
  gainNode.connect(audioContext.destination);

  var osc2 = audioContext.createOscillator();
  var gainNode2 = audioContext.createGain();
  gainNode2.gain.setValueAtTime(0.4, audioContext.currentTime);
  gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
  osc2.frequency.value = 880;
  osc2.start(audioContext.currentTime);
  osc2.stop(audioContext.currentTime + 0.5);
  osc2.connect(gainNode2);
  //osc2.connect(analyser);
  gainNode2.connect(audioContext.destination);
});
