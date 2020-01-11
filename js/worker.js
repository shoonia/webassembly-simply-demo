const webAssemblyOnReady = async (fileName) => {
  const response = await fetch(fileName);
  const bits = await response.arrayBuffer();
  const module = await WebAssembly.compile(bits);

  return new WebAssembly.Instance(module)
}

webAssemblyOnReady('../assets/squarer.wasm')
  .then((instance) => {
    const squarer = instance.exports._Z7squarerd;

    self.addEventListener('message', function (event) {
      const number = squarer(event.data.number);

      self.postMessage({ number });
    });
  });
