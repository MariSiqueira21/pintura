
let inputSalaEstar = document.getElementById("metSalaEs");
let inputSalaJantar = document.getElementById("metSalaJ");
let inputQuartoC = document.getElementById("metQuartoC");
let inputQuarto2 = document.getElementById("metQuarto2");


let resultComodos = document.getElementById("resultComodos");



let btnCalc = document.getElementById("calcOrcamento");

btnCalc.addEventListener("click", calcular);



function calcular() {

    let salaEstar = inputSalaEstar.value;
    let salaJantar = inputSalaJantar.value;
    let quartoC = inputQuartoC.value;
    let quarto2 = inputQuarto2.value;

    let metragem1 = salaEstar;
    let metragem2 = salaJantar;
    let metragem3 = quartoC;
    let metragem4 = quarto2;
    
    let resultadoMetSalaE = metragemPM(metragem1) * salaEstar;
    let resultadoMetSalaJ = metragemPM(metragem2) * salaJantar;
    let resultadoMetQuartoC = metragemPM(metragem3) * quartoC;
    let resultadoMetQuarto2 = metragemPM(metragem4) * quarto2;
    let resultadoTotal = resultadoMetSalaE + resultadoMetSalaJ + resultadoMetQuartoC + resultadoMetQuarto2;

        if (resultadoMetSalaE > 0 ) {

            resultComodos.innerHTML = `<p>Orçamento Sala de Estar: R$${resultadoMetSalaE}` + ",00";
        };

        if (resultadoMetSalaJ > 0 ) {

            resultComodos.innerHTML += `<p>Orçamento Sala de Jantar: R$${resultadoMetSalaJ}` + ",00";
        };

        if (resultadoMetQuartoC > 0 ) {

            resultComodos.innerHTML += `<p>Orçamento Quarto de casal: R$${resultadoMetQuartoC}` + ",00";
        }

        if (resultadoMetQuarto2 > 0 ) {

            resultComodos.innerHTML += `<p>Orçamento Quarto 2: R$${resultadoMetQuarto2}` + ",00";
        };

    
        resultComodos.innerHTML += `<p>Orçamento Total: R$${resultadoTotal}` + ",00";

        

        
        

} 

function metragemPM(metragem1) {

    if (metragem1 >= 30) {
        return 80;
    } else {
        return 50;
    }

    
};







