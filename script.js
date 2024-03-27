
/*MILESTONE 1
Creare un array di oggetti di studenti.
Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta.
Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome, cognome, età tramite sfruttando i componenti bootstrap(ad es.in tabella).*/



//Creo array di studenti
const students = [
    {
        nome: 'Marco',
        cognome: 'Rossi',
        età: '32'
    },

    {
        nome: 'Chiara',
        cognome: 'Blando',
        età: '23'
    },

    {
        nome: 'Paolo',
        cognome: 'Rossini',
        età: '36'
    },

    {
        nome: 'Martina',
        cognome: 'Ronio',
        età: '29'
    },

    {
        nome: 'Francesco',
        cognome: 'Donalio',
        età: '21'
    },

]


//Ciclo gli studenti fino alla linmghezza dell'array e ad ogni ciclo stampo lo studente grazie alla function sotto
for (let i = 0; i < students.length; i++) {
    const studentsMember = students[i]

    stampaStudenti(studentsMember)

    console.log(studentsMember)
}


//Creo la function che stampa ogni studente nella tabella creata nell'html 
function stampaStudenti(studente) {

    const bodyTabella = document.getElementById('stampaTabella')

    const htmlStampa =
        `
	<tr>
	  <td>${studente.nome}</td>
	  <td>${studente.cognome}</td>
	  <td>${studente.età}</td>
	</tr>
	`

    bodyTabella.innerHTML += htmlStampa

}



/*MILESTONE 2
Dare la possibilità all’utente di aggiungere un nuovo oggetto studente inserendo nome, cognome ed età tramite form.
Aggiungere il nuovo studente all’array di studenti.
Aggiornare l’interfaccia con il nuovo studente*/



const form = document.getElementById('aggiungiStudente')
form.addEventListener('subimt', aggiungiNuovo)

function aggiungiNuovo(e) {

    e.preventDefault()

    const nome = document.getElementById('nomeDom').value
    const cognome = document.getElementById('cognomeDom').value
    const età = document.getElementById('etàDom').value

    const nuovoStudente = {
        nome: nome,
        cognome: cognome,
        età: età,
    }

    students.push(nuovoStudente)

    stampaStudenti(nuovoStudente)
}