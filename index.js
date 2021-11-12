let countHour = document.getElementById("hour-count")
let saveHist = document.getElementById("historyDay")
let totalAmount = document.getElementById("total")
let count = 0
let earn = 0

function addTime(){
   count = count + 0.25
   countHour.innerText = count

   earn = earn + 0.25
   totalEarn = earn * 19.66
   totalAmount.innerText = totalEarn
   
}
function saveTime(){
   

   countS = count + " - "
   
   saveHist.textContent += countS
   countHour.innerText = 0
   count = 0 


  
}





