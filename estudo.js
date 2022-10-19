function total(){
    let c = document.getElementById("capital").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    for(let i = 1; i <= t; i++){
        m = c * (1 + (j/100));
        document.write("Valor de mês " + i + " = " + m + "<br>");
        c = m;
    }
    document.write("Montante: " +  m);
}
function soma(){
    let val1 = document.getElementById("v1").value;
    let val2 = document.getElementById("v2").value;
    let r = Number(val1) + Number(val2);
    document.getElementById("resultado").innerHTML = r;
}