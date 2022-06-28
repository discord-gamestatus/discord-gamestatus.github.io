'use strict';

(function() {
function walkElementTree(startElement, condition, root) {
  if (!root) root = null;
  let element = startElement;
  while (element !== root) {
    if (condition(element)) return element;
    element = element.parentElement;
  }
  return null;
}
document.documentElement.addEventListener('click', (e) => {
  const code = walkElementTree(e.target, (el) => el.tagName === 'DIV' && el.classList.contains('language-shell'));
  if (code) {
    e.preventDefault();
    const shellCode = code.innerText.split('\n')
      .filter(line => line.startsWith('$ '))
      .map(line => line.substring(2).trim())
      .join('\n');
    if (shellCode.length > 0) {
      navigator.clipboard.writeText(shellCode).then(() => {
        code.classList.add('copied-successfully');
        setTimeout(() => code.classList.remove('copied-successfully'), 5000);
      }, (error) => {
        alert(`Error copying text: ${error}`);
      });
    }
  }
});
})();
