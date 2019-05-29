//Fonksiyonlar sözdizimsel olarak isim alırken, fonksiyonlara isim verilmeden de fonksiyon oluşturulabilir.Bu fonksiyonlara anonim fonksiyon denir.
function carpim(x,y){ //Normal parametreli bir fonksiyon.
    return x*y;
}
console.log(carpim(8,7));

var kareal = function(x){ //Burda da bir değişkenin içine fonksiyon tanımlanmış fakat fonksiyona isim verilmemiş.Bu fonksiyon anonim fonksiyondur.
    return x*x;
}
console.log(kareal(4));
//Bu tür anonim fonksiyonlar,içerisine argüman olarak fonksiyon alabilen objelerde kullanılabilir.

(function(){console.log("Metehan")})(); //Bu da basit bir anonim fonksiyon tanımlama şeklidir.

