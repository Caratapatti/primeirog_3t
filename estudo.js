function total(){
    let c = document.getElementById("Capital").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    if(!Number(c)){
        alert("O valor do capital deve ser um número.")
        document.getElementById("Capital").value = "";
        document.getElementById("Capital").focus();
        return
    }
    if(!Number(j)){
      alert("O valor do juros deve ser um número.")
      document.getElementById("juros").value = "";
      document.getElementById("juros").focus();
      return
  }
  if(!Number(t)){
    alert("A quantidade de meses deve ser um número.")
    document.getElementById("meses").value = "";
    document.getElementById("meses").focus();
    return
}
    let m = 0;
    for(let i = 1; i <= t; i++){
        m = c * (1 + (j/100));
        //document.write("Valor domMês " + i + " valor: " + m +"<br>");
        c = m;
    }
    document.getElementById("total").innerHTML = m;
    //document.write("Montante: " + m);
  }