function soma(a: number, b: number) {
    return a + b
}

console.log(soma(3, 1))

//interfaces

interface IPessoa {
    cpf: string,
    nome: string,
    rg: number,
    idade: number,
    sexo: "M" | "F"
}

interface ITecnologia extends IPessoa {
    programador: boolean
}

interface IMedico extends IPessoa {
    estetoscopio: boolean
}

const pessoa: IPessoa = {
    cpf: "02838904108",
    nome: "Ericskon",
    rg: 1580850,
    idade: 33,
    sexo: "M"
}

const erickson: ITecnologia = {
    cpf: "72919473670",
    nome: "Erickson",
    rg: 1580850,
    sexo: "M",
    idade: 33,
    programador: true
}

console.log(erickson)
console.log(pessoa)

// type

type profisssional = ITecnologia | IMedico

const drMartinez: profisssional = {
    cpf: "028389",
    estetoscopio: true,
    rg: 1,
    idade: 10,
    nome: "Erickson",
    sexo: "M"
}

console.log(drMartinez)