function somarNumeros() {
    let total = 0;
    let continuar = true;

    while (continuar) {

        let numero = parseFloat(prompt("digite um número para soma:"));

            //if = SE
        if (!isNaN(numero)) {
            total += numero;
            //total = total + numero
        } else{
            alert("por favor, digite um número válido");
        };
            //else = senão
        
        continuar = confirm("Deseja inserir outro número? (sim/não)");

    }

    alert("o resultado da soma é: "  + total);

}

