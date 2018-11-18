const worker = new Worker('js/worker.js');

const input = document.getElementById('input-text');
const outCpp = document.getElementById('out-cpp');

input.addEventListener('keyup', function(event) {
  const number = parseFloat(event.target.value);
  worker.postMessage({ number });
});

worker.addEventListener('message', function(event) {
  outCpp.textContent = event.data.number;
});
