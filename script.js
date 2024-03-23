
/* MILESTONE 1
1. Creare un array di oggetti di studenti.
2. Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta
3. Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
4. prima ciclate con un ciclo for
5. poi commentate il ciclo for e usate il forEach*/


//1. Creare un array di oggetti di studenti.
//2. Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta

const students = [
    Marco = {
        nome: 'Marco',
        cognome: 'Rossi',
        età: '32'
    },

        Chiara = {
        nome: 'Chiara',
        cognome: 'Blando',
        età: '23'
    },

        Paolo = {
        nome: 'Paolo',
        cognome: 'Rossini',
        età: '36'
    },

        Martina = {
        nome: 'Martina',
        cognome: 'Ronio',
        età: '29'
    },

        Francesco = {
        nome: 'Francesco',
        cognome: 'Donalio',
        età: '21'
    }
]

//console.log(students)



/*3. Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
4. prima ciclate con un ciclo for*/

/*for (let i = 0; i < students.length; i++) {
    const element = students[i];

    console.log(element)
    
}*/



//5. poi commentate il ciclo for e usate il forEach

students.forEach(function (element,index) {
  console.log(element)   
});