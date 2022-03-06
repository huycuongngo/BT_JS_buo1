function getVal1() {
  const val = parseFloat(document.getElementById("workdays").value) * 100;
  console.log(val);
  if (val < 0)
    alert("So ngay khong duoc am. Moi nhap lai !");
  else
    document.getElementById("salary").innerText = val.toFixed(3);
}