function progressBar(modal) {
  const progress = modal.querySelector("PROGRESS");
  progress.value = 0;
  const checkItems = Array.from(progress.nextElementSibling.children);
  const step = Math.ceil(100 / checkItems.length);

  checkItems.forEach((item) => {
    const input = item.querySelector('INPUT');
    if (input.hasAttribute("checked")) {
      progress.value += step;
    }
  });
}

export default progressBar;