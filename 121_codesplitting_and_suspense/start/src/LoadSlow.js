const LoadSlow = (module, duration) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(module), duration);
  });

export default LoadSlow;
