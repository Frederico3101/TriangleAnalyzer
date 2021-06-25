function verificar() {
    var lado1 = document.getElementById('lado1');
    var lado2 = document.getElementById('lado2');
    var lado3 = document.getElementById('lado3');
    var l1 = Number(lado1.value);
    var l2 = Number(lado2.value);
    var l3 = Number(lado3.value);
    var semip = (l1 + l2 + l3)/2
    var area = semip*(semip-l1)*(semip-l2)*(semip-l3)
    var a = Math.sqrt(area)
    var res = document.getElementById('res');

    if (l1 > l2 + l3 || l2 > l3 + l2 || l3 > l2 + l1){
        res.innerHTML = 'Esse triângulo não existe'
    } else if (l1 == l2 && l2 == l3){
        res.innerHTML = `Esse triângulo é equilátero e possui área ${a}.`
    } else if (l1 == l2 || l2 == l3 || l1 == l3){
        res.innerHTML = `Esse triângulo é isósceles e possui área ${a}.`
    } else if (l1 != l2 && l2 != l3 && l3 != l1){
        res.innerHTML = `Esse triângulo é escaleno e possui área ${a}.`

        document.querySelector('#lado1').value = "";
        document.querySelector('#lado2').value = "";
        document.querySelector('#lado3').value = "";
    }
}