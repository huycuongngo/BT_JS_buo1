function getVal5() {
  var num = Math.floor(document.getElementById("number").value*1);
  
  if (num < 0)
    alert("Moi nhap lai !");
  else {
    console.log(num);
    var sum = parseInt(num / 10) + num % 10;
    console.log(sum);
    document.getElementById("sum").innerText = sum;
  }

  // const sum = num / 10 + num % 10;
  // document.getElementById("sum").innerText = sum;
}
