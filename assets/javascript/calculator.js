


function getVal(){

  let doorDashPay=document.getElementById('regPayDD').value;
  let jobTwoPay=document.getElementById('regPayJ2').value;
  let jobOneHours = document.getElementById('hoursDD').value;
  let jobTwoHours=document.getElementById("hoursJ2").value;


   let dDP= parseFloat(doorDashPay);
   let jTP = parseFloat(jobTwoPay);
   let jOH = parseFloat(jobOneHours);
   let jTH = parseFloat(jobTwoHours);
   let oTP;
   let nP;
   let nHO;
   let result;
   let resultJ2;
   let overallTotal;
   let mT;
   resultJ2 = jTP * jTH;

   
 if (dDP < 0 ){
     alert("Please put in a number greater then 0!");

 }
 else if (jOH < 0){
     alert("Please do not put in a negative number for hours!");

 }
 
   else if (jOH > 80) {
       oTP = 36.75;
       nHO = jOH - 80;
       nP = nHO*oTP; 
       result = nP + (dDP*80) ;
       overallTotal = resultJ2 + result;
       mT = overallTotal * 2;
       document.getElementById('doordashtotal').innerHTML = result;
       document.getElementById('overallTotal').innerHTML = overallTotal;
       document.getElementById('jobTwoTotal').innerHTML = resultJ2;
       document.getElementById('monthTotal').innerHTML = mT;
       return result;

   } else {
      result = dDP * 80;
      overallTotal = resultJ2 + result;
      mT = overallTotal * 2;
      document.getElementById('jobTwoTotal').innerHTML = resultJ2;
      document.getElementById('doordashtotal').innerHTML = result;
      document.getElementById('overallTotal').innerHTML = overallTotal;
      document.getElementById('monthTotal').innerHTML = mT;
      
      return result;
   }

 
  
}
 
