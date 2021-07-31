export const freeze = () => {
  // When the modal is shown, we want a fixed body
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
};

export const unFreeze = () => {
  // When the modal is hidden...
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
};
