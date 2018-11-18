const webAssemblyOnReady = async (fileName, callback) => {
  const response = await fetch(fileName);
  const bits = await response.arrayBuffer();
  const module = await WebAssembly.compile(bits);
  const instance = new WebAssembly.Instance(module);

  if (typeof callback === 'function') {
    callback(instance);
  }

  return instance;
}

webAssemblyOnReady('../assets/squarer.wasm', instance => {
  const squarer = instance.exports._Z7squarerd;

  self.addEventListener('message', function(event) {
    const number = squarer(event.data.number);
    self.postMessage({ number });
  });
});
