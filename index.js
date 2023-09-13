function EscolherMedia_2(){
    var Nota1 = 1;
    var Nota2 = 1;
    window.alert("Você Escolheu a Opção 1,responda corretamente para conseguir sua média");
    Nota1 = window.prompt("Qual A Nota 1?");
    Nota2 = window.prompt("Qual A Nota 2?");
    var Media = (parseFloat(Nota1) + parseFloat(Nota2))/2;
    window.alert("A Media das duas notas são :"+ Media);
    document.getElementById('ResultadoMedia').innerHTML = Media;
}
function EscolherMedia_3(){
    var Nota1 = 0;
    var Nota2 = 0;
    var Nota3 = 0;
    window.alert("Você Escolheu a Opção 2,responda corretamente para conseguir sua média");
    Nota1 = window.prompt("Qual A Nota 1?");
    Nota2 = window.prompt("Qual A Nota 2?");
    Nota3 = window.prompt("Qual A Nota 3?");
    var Media = (parseFloat(Nota1) + parseFloat(Nota2) + parseFloat(Nota3))/3;
    window.alert("A Media das duas notas são :"+ Media);

    document.getElementById('ResultadoMedia').innerHTML = Media;
}
function EscolherMedia_4(){
    var Nota1 = 0;
    var Nota2 = 0;
    var Nota3 = 0;
    var Nota4 = 0;
    window.alert("Você Escolheu a Opção 3,responda corretamente para conseguir sua média");
    Nota1 = window.prompt("Qual A Nota 1?");
    Nota2 = window.prompt("Qual A Nota 2?");
    Nota3 = window.prompt("Qual A Nota 3?");
    Nota4 = window.prompt("Qual A Nota 4?");
    var Media = (parseFloat(Nota1) + parseFloat(Nota2) + parseFloat(Nota3) + parseFloat(Nota4))/4;
    window.alert("A Media das duas notas são :"+ Media);

    document.getElementById('ResultadoMedia').innerHTML = Media;
}
function EscolherMedia_5(){
    var Nota1 = 0;
    var Nota2 = 0;
    var Nota3 = 0;
    var Nota4 = 0;
    var Nota5 = 0;
    window.alert("Você Escolheu a Opção 4,responda corretamente para conseguir sua média");
    Nota1 = window.prompt("Qual A Nota 1?");
    Nota2 = window.prompt("Qual A Nota 2?");
    Nota3 = window.prompt("Qual A Nota 3?");
    Nota4 = window.prompt("Qual A Nota 4?");
    Nota5 = window.prompt("Qual A Nota 5?");
    var Media = (parseFloat(Nota1) + parseFloat(Nota2) + parseFloat(Nota3) + parseFloat(Nota4) + parseFloat(Nota5))/5;
    window.alert("A Media das duas notas são :"+ Media);

    document.getElementById('ResultadoMedia').innerHTML = Media;
}