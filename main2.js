const valorA = document.getElementById('numero_a');
const valorB = document.getElementById('numero_b');
const resultado = document.getElementById('local_resultado');
const errou = document.getElementById('local_erro');
const botao= document.getElementById('butao_verificar');


const mensagemDeSucesso = "SUCESSO ! O valor B  (${inputValor2}) e maior que o valor A (${inputValor1})";
const mensagemDeErro = "ERRO ! O valor B (${inputValor2}) e menor ou igual a valor A (${inputValor1})";



botao.addEventListener("click", function(event){
    event.preventDefault();
    const inputValor1 = valorA.value;
    const inputValor2 = valorB.value;

    if(inputValor1 < inputValor2) {
        const mensagemS = mensagemDeSucesso.replace("${inputValor1}", inputValor1).replace("${inputValor2}", inputValor2);
        resultado.innerText = mensagemS;
        resultado.style.display = 'block';
        errou.style.display = 'none';
    } else if(inputValor1 >= inputValor2) {
        const mensagemE = mensagemDeErro.replace("${inputValor1}", inputValor1).replace("${inputValor2}", inputValor2);
        errou.innerText = mensagemE;
        errou.style.display = 'block';
        resultado.style.display = 'none';}
    });

