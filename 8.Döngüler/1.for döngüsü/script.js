for(i = 0;i<10;i++){ //C# daki ile aynı.
    console.log(i);
}

//Örnek:listenin elemanlarını yazdır.
var liste = [1,2,3,4,5,6,7,8,9];

for(j = 0;j<liste.length;j++){
    console.log(liste[j]);
}

//örnek: listenin elemanlarını topla.
var toplam = 0;
for(k = 0;k<liste.length;k++){
    toplam+=liste[k];
}
console.log("Listenin elemanları toplamı : " + toplam);