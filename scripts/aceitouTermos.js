const nome = prompt("Qual é o seu nome?")

// Template String
const aceitou = confirm(`
Olá, ${ nome } !
    Antes de usar o Cake, precisamos que
    você aceite nossos termos de uso:
    • Você aceita que este software foi
        feito por pessoas que participaram
        do curso de JavaScript.
    • Você aceita que o código dessas
        pessoas pode acessar tudo o que
        você digitar aqui.
    • Você aceita que tudo aqui está
        em desenvolvimento e por isso não
        recomendamos que você troque de
        navegador agora
`)

if (!aceitou) {
    alert("Infelizmente não podemos seguir juntos")
    window.close()
}
