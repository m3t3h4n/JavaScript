var isim = "Metehan Özdeniz";
console.log(typeof(isim)); //Değişkenin türünü verir.
console.log(isim.length); //Tanımlı değerin uzunluğunu verir.
console.log(isim[0]); //Stringin içindeki indeks numarasına göre  char olarak değerini verir.
degistir = isim.replace("Özdeniz","Öztürk");//Değişkende yer alan kelimeyi bir başkasıyla değiştirmeye yarar.//İlk argüman hangi kelime olduğu ikinci argüman ise yerine yazılacak değerdir.
console.log(degistir);
console.log(isim.toUpperCase());//String türü değişkendeki bütün harfleri büyük yapar.
console.log(isim.toLowerCase());//String türü değişkendeki bütün harfleri küçük yapar.
var soyad = isim.substring(8,16); //String türü değişkende belirtilen indeks numarası arasındaki harfleri getirir.
console.log(soyad);
console.log(isim.split(" ")); //string türü değişkende belirtilen ifadeden sonra ayırıp bir dizi haline getirir.
console.log(isim.indexOf("Özdeniz")); //string türü ifadenin içinde istenilen karakterin kaçıncı indeksden başladığını yazar.
console.log(isim.substring(0,8)); //belirtilen indeks aralığındaki değeri getirir.
console.log(isim.repeat(2))//Değişkenin içindeki değeri, aldığı argüman kadar tekrarlar.


/* Koşul - if else ifadeleri*/

var mesaj;
saat = 15;
if(saat < 10)
{
    mesaj = "İyi Sabahlar";
}
else if (saat < 20)
{
    mesaj = "İyi Günler";
}
else
{
    mesaj = "İyi Akşamlar";
}
console.log(mesaj);
/* Koşul - if else ifadeleri*/

/* Mantıksal Bağlaçlar
&& = Ve 
|| = Veya
!  = Değilse
*/
var mesaj;
var x = 1;
switch(x)
{
    case 2:
    mesaj = "Sayı 2";
    break;
    case 1:
    mesaj = "Sayı 1";
    break;
    default:
    mesaj = "Sayı 1 yada 2 değil.."
}
console.log(mesaj);