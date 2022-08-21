document.onmousemove = (move) => {
  const torch = document.querySelector('.torch');

  torch.css({ top: move.pageY, left: move.pageX });
};
