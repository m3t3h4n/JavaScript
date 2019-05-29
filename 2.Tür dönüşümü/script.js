var sayi1 = "10";
var sayi2 = "15";
console.log(Number(sayi1)+Number(sayi2)); // String türündeki değişkeni int türüne dönüştürmek için Number() fonksiyonu kullanılır.

var sayi3 = "8";
var sayi4 = "9";
console.log(parseInt(sayi3) + parseInt(sayi4)); //String türündeki değişkeni int türüne dönüştürmek için parseInt() fonksiyonuda kullanılır.

var sayi5 = 12;
var sayi6 = "8";
console.log(String(sayi5)+sayi6.toString()); //int türündeki değişkeni string türüne dönüştürmek için ise String() veya toString() fonksiyonu kullanılır.

var x = Boolean(0);
var y = Boolean(1);
console.log(String(x) +" " +y.toString()); //Gibi...