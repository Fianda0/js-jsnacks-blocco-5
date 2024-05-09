let zucchina = [
    {
        peso: 101,
        lunghezza: 10
    },
    {
        peso: 100,
        lunghezza: 11
    }, {
        peso: 100,
        lunghezza: 12
    }, {
        peso: 100,
        lunghezza: 13
    }, {
        peso: 100,
        lunghezza: 14
    }, {
        peso: 100,
        lunghezza: 15
    }, {
        peso: 102,
        lunghezza: 16
    }, {
        peso: 100,
        lunghezza: 17
    }, {
        peso: 100,
        lunghezza: 18
    }, {
        peso: 100,
        lunghezza: 19
    }
]
//SNACK 1  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let peso = 0;
// zucchina.forEach((elemento, i, array) => {
//     console.log(elemento.peso)
//     peso += elemento.peso
// })
// console.log('tutte le zucchine pesano', peso, 'grammi')

//SANCK 2  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let zucchinePiccole = []
// let zucchineGrandi = []

// zucchina.forEach((elemento, i, array) => {
//     if (elemento.lunghezza < 15) {
//         zucchinePiccole.push(elemento)
//         // console.log(elemento)
//         // console.log('zucchinepiccola', zucchinePiccole)
//     } else {
//         zucchineGrandi.push(elemento)
//         // console.log(elemento)
//         // console.log('zucchinagrande', zucchineGrandi)
//     }
// }
// )

// let pesoPiccolo = 0;

// zucchinePiccole.forEach((elemento, i, array) => {
//     console.log(elemento.peso)
//     pesoPiccolo += elemento.peso
// })
// console.log('tutte le zucchine piccole pesano', pesoPiccolo, 'grammi')

// let pesoGrande = 0;

// zucchineGrandi.forEach((elemento, i, array) => {
//     console.log(elemento.peso)
//     pesoGrande += elemento.peso
// })
// console.log('tutte le zucchine piccole pesano', pesoGrande, 'grammi')

//SNACK 3  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let parola = prompt('inserisci parola');
// let parolaGirata = ''

// for (let i = 0; i < parola.length; i++) {
//     let fine = parola[parola.length - i - 1]
//     parolaGirata += fine
// }

// console.log(parolaGirata)

//SNACK 4  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let parola1 = [1, 2, 3]
// let parola2 = ['a', 'b', 'c']

// let parolaFinale = []

// for (let i = 0; i < 3; i++) {
//     parolaFinale += parola1[i]
//     parolaFinale += parola2[i]
// }

// console.log(parolaFinale)

//SNACK 5  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let array1 = ['ciao1', 'ciao2', 'ciao3', 'ciao4', 'ciao5', 'ciao6']
// let a;
// let b;
// do {
//     a = prompt(`inserire A numero sotto i ${array1.length}`)
// } while (a > array1.length)

// do {
//     b = prompt(`inserire B numero sotto i ${a}`)
// } while (b > a)

// let array2 = []

// for (let index = b; index < a; index++) {
//     array2.push(array1[index])
// }
// console.log(array2)
