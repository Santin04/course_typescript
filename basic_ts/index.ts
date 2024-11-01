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

function showNumbers(a: number, b: number, c?: number){
    console.log('A: ' + a)
    console.log('B: ' + b)
    if(c !== undefined) {
        console.log('C: ' + c)
    }
}

//o terceiro para parâmetro, pro conta do ?, faz com que ele não seja obrigatório
showNumbers(1,3)

//Union type:
function unionType(a: number | string){
    console.log('R$' + a)
}

unionType(500)
unionType('600')

//type alias
type ID = string | number

function showId(id: ID) {
    console.log('ID: ' + id)
}
showId(21)
showId('2i3')

function showDirection(direction: 'left' | 'right' | 'center') {
    console.log(`Direção: ${direction}`)
}

showDirection('left')

//Com '!' você consegue anular o erro do ts

function showText(text: number | string)  {
    if(typeof text === 'string') {
        console.log(text)
    }
}

function funcNoReturn(): void {
    console.log('O void indica que essa é uma função sem retorno')
}