/* Metodo usanado somente o for
 vogais

let vogais = ["a", "e", "i", "o", "u"];

let texto = "Na natureza nada se cria, nada se perde, tudo se transforma.";

texto = texto.toLocaleLowerCase();

let arrayVogais1 = texto.split("");

let arrayVolgais = [];

for (let i = 0; i < arrayVogais1.length; i++) {
    if (vogais.includes(arrayVogais1[i])) {
        arrayVolgais.push(arrayVogais1[i]);
    }
}

console.log("texto original:", texto);
console.log("vogais encontradas:", arrayVolgais.toString());
console.log("total de vogais:" + arrayVolgais.length)

// consoantes

let consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];

texto = texto.toLocaleLowerCase();

let arrayLetras = texto.split("");

let arrayConsoantes = [];

for (let i = 0; i < arrayLetras.length; i++) {
    if (consoantes.includes(arrayLetras[i])) {
        arrayConsoantes.push(arrayLetras[i]);
    }
}

console.log("consoantes encontradas:", arrayConsoantes.toString());
console.log("total de consoantes: " + arrayConsoantes.length);

// espaços

let espaço = [" "];

texto = texto.toLocaleLowerCase();

let arrayEspaço = texto.split("");

let arrayespaço = [];

for (let i = 0; i < arrayEspaço.length; i++) {
    if (espaço.includes(arrayEspaço[i])) {
        arrayespaço.push(arrayEspaço[i]);
    }
}

console.log("espaço encontradas:", arrayespaço.toString());
console.log("total de espaço: " + arrayespaço.length);

*/

// Código usando for, if, else if e else.

let vogais = ["a", "e", "i", "o", "u"];

let consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

let espaços = [" "];

let Frase = "Na natureza nada se cria nada se perde tudo se transforma";

let Frase2 =  " O sucesso e a soma de pequenos esforcos repetidos dia apos dia";

let Frase3 = " O que interessa e se levantar os tombos fazem parte";

let fraseCompleta = Frase.concat(Frase2 + Frase3);

fraseCompleta = fraseCompleta.toLocaleLowerCase();

let arrayFrase = fraseCompleta.split("");

let Vogais = [];

let Consoantes = [];

let Espaço = [];

for (let i = 0; i < arrayFrase.length; i++) {
    if (vogais.includes(arrayFrase[i])) {
        Vogais.push(arrayFrase[i]);
    } else if (consoantes.includes(arrayFrase[i])) {
        Consoantes.push(arrayFrase[i]);
    } else {
        Espaço.push(arrayFrase[i]);
    }
}

console.log("Texto principal:", fraseCompleta);

console.log("total de espaços presentes:", Espaço.length );

console.log("Essas são as consoantes presentes:" + Consoantes.toString());

console.log("Total de consoantes " + Consoantes.length);

console.log("Essas são as vogais presentes:" + Vogais.toString());

console.log("Total de vogais presentes: " + Vogais.length);