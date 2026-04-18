let nome;
let renda;
let qntdDespesa;  
let valorDespesa;
let totalDespesa;
totalDespesa = Number(0);
let sobra;
let mensagem;

nome = window.prompt('qual o seu nome');

renda = window.prompt('qual a sua renda mensal');
renda = Number(renda);
while(Number.isNaN(renda) == true){
    renda = window.prompt('qual a sua renda mensal');
    renda = Number(renda);
}

qntdDespesa = window.prompt('qual a quantidade de despesas');
qntdDespesa = Number(qntdDespesa);
while(Number.isNaN(qntdDespesa) == true){
    qntdDespesa = window.prompt('qual a quantidade de despesas');
    qntdDespesa = Number(qntdDespesa);
}

if(qntdDespesa < 1){
    qntdDespesa = 1;
}
else if(qntdDespesa > 5){
    qntdDespesa = 5;
}


for(let i = 1; i <= qntdDespesa; i++){
    valorDespesa = window.prompt("Qual o valor da despesa");
    valorDespesa = Number(valorDespesa);
    while(Number.isNaN(valorDespesa) == true){
        valorDespesa = window.prompt('qual o valor da despesa');
        valorDespesa = Number(valorDespesa);
    }
    totalDespesa += valorDespesa;
}

sobra = Number(sobra);
if(totalDespesa > renda){
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
}
else{
    sobra = renda - totalDespesa;
    if(sobra >= (0.3*renda)){
        mensagem = "✅ Ótimo: boa margem de sobra.";
    }
    else{
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}

console.log(`O seu nome é ${nome}, sua renda é de ${renda.toFixed(2)}, o seu total de despesa é de ${totalDespesa.toFixed(2)}, sua sobra mensal é de ${sobra.toFixed(2)}, ${mensagem}`)
alert(`O seu nome é ${nome}, sua renda é de ${renda.toFixed(2)}, o seu total de despesa é de ${totalDespesa.toFixed(2)}, sua sobra mensal é de ${sobra.toFixed(2)}, ${mensagem}`)