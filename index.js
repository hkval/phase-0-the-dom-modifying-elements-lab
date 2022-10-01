// Write your code here!
main = document.querySelector('main#main');
main.remove();

const newHeader = document.createElement('h1');
const head = document.querySelector('head');
/*document.head.append(newHeader);*/
newHeader.id = "victory"

newHeader.textContent = 'Gizzy is the champion'