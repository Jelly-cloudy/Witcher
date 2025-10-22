const elementD = document.getElementById("d");
const elementA = document.getElementById("a");
const elementResult = document.getElementById("result");
const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

function verify()
{   let D = parseFloat(elementD.value);
    let A = parseFloat(elementA.value);

    if (D <= 0 || A <= 0) {
    alert("Значения D и A должны быть больше 0");
    elementResult.value = "Некорректный ввод";
    return;}

if (A * Math.sqrt(2) <= D)
    {elementResult.value = "Можно выпилить";}

else {elementResult.value = "Нельзя выпилить";}
}

