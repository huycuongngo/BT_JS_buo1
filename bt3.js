function getVal3() {
  const usd = parseFloat(document.getElementById("usd").value) * 23.500;
  if (usd < 0)
    alert("So tien khong duoc am. Moi nhap lai !");
  else
    document.getElementById("vnd").innerText = usd.toFixed(3) + " VND";
}

