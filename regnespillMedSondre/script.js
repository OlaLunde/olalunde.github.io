// Henter elementer fra DOM
let svarInputEl = document.getElementById('svar-input')
let svarKnappEl = document.getElementById('svar-knapp')
let tilbakemeldingEl = document.getElementById(`tilbakemelding`)
let oppgaveEl = document.getElementById(`oppgave`)
let bodyEl = document.querySelector('body')
let poengEl = document.getElementById('poeng')
let nyOppgaveEl = document.getElementById('ny-oppgave')
 
// Legger til en lytter til knappen.
// Kaller funksjonen "sjekkSvar" når vi trykker på knappen.
svarKnappEl.addEventListener('click', sjekkSvar)
//svarInputEl.addEventListener('change', sjekkSvar)
 
let poeng = 0
 
function sjekkSvar(){
    console.log("Sjekker svaret")
 
    // Henter tallet brukeren skriver inn fra input feltet
    let svar = Number(svarInputEl.value)
    
    // Bruker en if-test til å sjekke om svaret er korrekt.
    if (svar === a*b){
        tilbakemeldingEl.innerHTML = "Korrekt! Bra jobba:)"
        bodyEl.style.backgroundColor = 'green'
        poeng += 1
        poengEl.innerHTML = "poeng: " + `${poeng}`
        
    }else {
        tilbakemeldingEl.innerHTML = "Feil svar! Prøv igjen"
        bodyEl.style.backgroundColor = 'red'
        poengEl.innerHTML = "Poeng: " + 0
        poeng = 0
    }

    svarKnappEl.style.display = 'none'
    nyOppgaveEl.style.display = 'block'
}
 
//Globale variabler vi kan endre på
let a
let b
function lagOppgave(){
    //Lager tilfeldig heltall mellom o og 10 (inklusiv)
    a = Math.floor(Math.random()*11)
    b = Math.floor(Math.random()*11)
 
    oppgaveEl.innerHTML = `${a} x ${b} = ?`
}
 
 
//Kaller funksjonen som lager ny oppgave
//lagOppgave()
 
nyOppgaveEl.addEventListener('click', nyOpp)
 
function nyOpp(){
 
    tilbakemeldingEl.innerHTML = "";
 
    // Nullstiller inputfeltet
    svarInputEl.value = "";
 
    // Endrer bakgrunnsfargen til standard
    bodyEl.style.backgroundColor = '';

    svarKnappEl.style.display = 'block'
 
    lagOppgave()

    nyOppgaveEl.style.display = 'none'
    
}
 
nyOpp();