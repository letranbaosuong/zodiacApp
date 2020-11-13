function getAlerted() {
  var nguoi1 = { ten: "suong1", tuoi: 28, vitri: "HCM1", nam: true };
  var nguoi2 = { ten: "suong2", tuoi: 23, vitri: "HCM2", nam: false };
  var nguoi3 = { ten: "suong3", tuoi: 21, vitri: "HCM3", nam: true };
  var nhieunguoi = [nguoi1, nguoi2, nguoi3];

  for (let i = 0; i < nhieunguoi.length; i++) {
    const nguoi = nhieunguoi[i];
    document.getElementById("demo").innerHTML += nguoi.ten + "<br>";
    if (nguoi.nam) {
      document.getElementById("demo").innerHTML +=
        nguoi.ten + " la nam" + "<br>";
    } else {
      document.getElementById("demo").innerHTML +=
        nguoi.ten + " la nữ" + "<br>";
    }
  }
}
