var pc1 = { //pc1 adlı bir obje tanımlandı ve özellikleri girildi.
    Marka:"Toshiba",
    Model:"Satellite",
    Ram:"4Gb",
    Cpu:2.66,
    Kapat:function(){
        window.alert("Bilgisayar Kapanıyor...") //Objelerin içinde de fonksiyon oluşturulabilir. Dikkat edilirse fonksiyona isim verilmedi.
    },
    Yazdir:function(){
        document.write("Marka : "+this.Marka+" Model : "+this.Model+" Ram : "+this.Ram+" Cpu : "+this.Cpu+"Ghz");
        //objenin içindeki fonksiyonda olmayıpda, objenin içinde olan bir özelliğe veya değişkene ise this fonksiyonuyla erişilir.Pythonda ki self gibi...
    }
}
console.log("Marka :" + pc1.Marka + "Model :"+pc1.Model); //Oluşturulan objenin içindeki özellikler de çağırıldı.
pc1.Kapat();
pc1.Yazdir();