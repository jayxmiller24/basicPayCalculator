


function getVal() {

  //dDp is doordash pay
  const dDP = 30;
  //dOP is doordash overtime pay
  const dOP = 45;
  let hours = parseFloat(document.getElementById("hours").value);
  let overtimeHours;
  let regularHours;
  let overtimePay;
  let regularPay;
  let totalPay;

  if (hours > 80) {

    overtimeHours = hours - 80;
    regularHours = hours - overtimeHours;
    overtimePay = overtimeHours * dOP;
    regularPay = dDP * regularHours;
    totalPay = overtimePay + regularPay;

    document.getElementById("OvertimeHours").innerHTML = overtimeHours;
    document.getElementById("regHours").innerHTML = regularHours;
    document.getElementById("overallPay").innerHTML = totalPay

  }
  else if (hours <= 80) {
    
    regularPay = dDP * hours;
    totalPay = regularPay;
    document.getElementById("regHours").innerHTML = hours;
    document.getElementById("overallPay").innerHTML = totalPay;

  } else {
    alert("cant be less then 0!")
  };

};