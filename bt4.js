function getVal4() {
  const dai = parseFloat(document.getElementById("dai").value);
  const rong = parseFloat(document.getElementById("rong").value);
  const dt = dai * rong;
  var cv = (dai+rong)*2;
  if (dt < 0 || cv < 0)
    alert("Kich thuoc khong duoc am. Moi nhap lai !");
  else {
    document.getElementById("dt").innerText = dt.toFixed(2);
    document.getElementById("cv").innerText = cv.toFixed(2);
  }
}


