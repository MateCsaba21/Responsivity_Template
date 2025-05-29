function kalkulal(){
    const name = document.getElementById('nevInput').value;
    const email = document.getElementById('emailInput').value;
    const contract = document.getElementById('szerzodes').value;
    const howManyTickets = document.getElementById('szemelyek').value;


    if(name == '' || email == '' || contract == false) {
        alert("A név és e-mail mező kitöltése, valamint az adatvédelmi tájékoztató elfogadása kötelező!")
    } else {
        let result = document.getElementById('eredmeny');
        let choosenInput = document.getElementById('typeInput').value;
        result.innerHTML = (250000-(choosenInput-1)*25000)*howManyTickets;   
    }


}