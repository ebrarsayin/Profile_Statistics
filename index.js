const countersEl = document.querySelectorAll(".counter")

countersEl.forEach((counterEl)=>{
    counterEl.innerText = "0";
    incrementCounter();

    function incrementCounter(){
       let currentNum = +counterEl.innerText
       const dataCeil = counterEl.getAttribute("data-ceil");
       const increment = dataCeil / 20
       currentNum = Math.ceil(currentNum + increment)
       counterEl.innerText = currentNum
       if(currentNum < dataCeil){
        setTimeout
        (incrementCounter, 20)
       }
       else {
        counterEl.innerText = dataCeil
       }
    }
})