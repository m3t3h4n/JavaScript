var i = 0;

while(i<10){
    console.log(i);
    i++;
}

//Listenin elemanlarını yazdırma
var j = 0;
var liste = [1,2,3,4,5,6,7,8,9];
while(j < liste.length){
    console.log(liste[j]);
    j++;
}

//listenin elemanlarını toplama

var k = 0;
var toplam = 0;
while(k<liste.length){
    toplam+=liste[k];
    k++;
}
console.log("Listenin elemanları toplamı : "+toplam);