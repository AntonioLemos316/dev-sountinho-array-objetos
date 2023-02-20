const teste1 = (document.querySelectorAll('.exemplo')) // NODELIST
novoteste = Array.from(teste1) // ARRAY

console.log(teste1)
console.log(novoteste)

novoteste.map(function(...argumentos) {
    console.log(argumentos)
})

novoteste.map(function(elemento, indice, arrayBase) {
    console.dir(elemento)
    console.log(indice)
    console.log(arrayBase)
    // let conteudo = (elemento.textContent)
    // console.log(conteudo)
    c1 = (document.getElementById('ex1')).textContent = "TESTANDO"
    c2 = (document.getElementById('ex2')).textContent = "NEW TESTE"
    c3 = (document.getElementById('ex3')).textContent = "AOS POUCOS MELHORANDO"
    console.log(c1)
    console.log(c2)
    console.log(c3)
    nt1 = document.querySelector('body')
    console.dir(nt1)
    nt1.style.background = "#000"
    nt1.style.color = "#fff"
    nt1.style.textAlign = "center"
    nt1.style.fontSize = "2.2rem"
})