onmessage = (e) => {
  postMessage(e.data);
};

postMessage({ abc: 123 });
