const footerElement = document.getElementById('dynamicFooter');
const copyrightNotice = document.createElement('span');
copyrightNotice.textContent = '© 2024 Logic Harvest';
copyrightNotice.style.fontStyle = 'italic';
copyrightNotice.style.fontSize = 'small';
footerElement.appendChild(lineBreakElement);
footerElement.appendChild(copyrightNotice);
