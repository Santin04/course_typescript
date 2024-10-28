//npm i -g typescript => para instalar o typescript globalmente
//tsc arquivo.ts => cria um arquivo js com o código do ts
//tsc --init => cria o tsconfig
//tsc -w => assim você não precisa ficar compilando toda hora o seu arquivo ts

//numbers
const numero01: number = 10;
const numero02: number = 3;

function exibir(n1: number, n2: number): number {
    const soma: number = n1 + n2;
    return soma;
};

exibir(numero01, numero02);

//string
let firstName: string = 'Mateus';

//boolean
let a: boolean = true;

//array
const numbers: number[] = [1, 2, 3];

const nomes: string[] = ['Mateus', 'Santin'];

//any => definir um dado como any, significa que ele aceita qualquer tipo (evitar)