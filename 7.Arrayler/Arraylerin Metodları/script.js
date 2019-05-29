var tarih = ["07","04","2019"];
var tarih2 = tarih.join("/"); //join() methodu listeyi birleştirir ve elemanları arasına istenilen karakteri koyar.
console.log(tarih2);

var sayilar = [1,2,3,4,5,6,7,8,9];

console.log(sayilar.length); //Arrayin eleman sayısını verir.

var cikan_eleman = sayilar.pop(); //Arrayin son elemanını listeden çıkarır ve çıkan son elemanı geri döndürür.
console.log(cikan_eleman);
console.log(sayilar.pop(4));
console.log(sayilar);
var cikan_eleman2 = sayilar.shift(); //Arrayin ilk elemanını listeden çıkarır ve çıkan elemanı geri döndürür.
console.log(cikan_eleman2)
console.log(sayilar);
sayilar.splice(0,2,10,20,30); //Eğer sadece iki argüman girilirse, ilk argüman silinecek indeks konumunu, ikinci argüman 
//ise indeksden sonra kaç adet elemanın silineceğini belirtir.Sonraki argümanlar ise silinecek indeks konumundan sonra 
//listeye eklenecek elemanları alır.
//Yukarıda 0. indeksden başla 2. indekse kadar sildi(ikinci indeks dahil değil) ve 0. indeksden sonra 10,20,30 elemanlarını 
//ekledi.
console.log(sayilar);

var elemanSayisi =sayilar.push(10); //Arrayin sonuna eleman ekler ve arrayin eleman sayısını geri döndürür.
console.log(sayilar);
console.log(elemanSayisi);
sayilar.unshift(15); //Arrayin en başına 0. indekse eleman ekler ve dizinin içindeki eleman sayısını geri döndürür.
console.log(sayilar);

console.log(sayilar.sort()); //Arrayi büyükten küçüğe yada alfabetik olarak A'dan Z'ye sıralar.
