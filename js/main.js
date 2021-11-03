
var chipta = Number(500 * 9433.34);
var mehmonxona = Number(250 * 9433.34);
var boshqa = Number(120 * 10354.03);

var hammaXarajat = Number(chipta + mehmonxona + boshqa);

var yetarli = document.querySelector('.truee');
var kamroq = document.querySelector('.falsee');
var alishersMoney = Number(prompt("Qancha pul bor?"));

if (alishersMoney >= hammaXarajat) {
    yetarli.textContent = "Oq yo'l, Alisher!"
} else {
    kamroq.textContent = "Alisher, ozgina sabr qilish kerak ekan."
};

if (alishersMoney >= hammaXarajat) {
    console.log("Oq yo'l, Alisher!")
} else {
    console.log("Alisher, ozgina sabr qilish kerak ekan.")
};
