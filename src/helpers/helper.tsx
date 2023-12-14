// установка фокуса на инпут
const setFocus = (inputName) => {
  (document.querySelector(inputName) as HTMLInputElement)?.focus();
};

// установка фокуса на инпут спусят 0.5 сек
const setFocusAfter = (inputName) => {
  setTimeout(() => setFocus(inputName), 500);
};

export { setFocusAfter, setFocus };
