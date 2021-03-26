let message: string = 'Hello, World!';

let heading = document.createElement('h1');
heading.textContent = message;

document.body.appendChild(heading);

//depois compilar o arquivo olamundo.ts com comando: tsc olamundo.ts