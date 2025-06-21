
# Movie Search
Bu proje, kullanıcıların film veya dizi ismi girerek OMDb API üzerinden arama yapabildiği basit ve işlevsel bir web uygulamasıdır. Kullanıcı, arama sonucunda gelen görseller ve isimler üzerinden detaylı bilgiye ulaşabilir. Detaylar, yeni bir sekmede dinamik olarak açılır. Ayrıca uygulama tüm cihazlarda sorunsuz çalışan responsive bir tasarıma sahiptir.


## 🚀 Özellikler

- Kullanıcıdan film veya dizi ismi alınır.
- [OMDb API](https://www.omdbapi.com/) üzerinden veri çekilir.
- Filmin/dizinin adı, görseli ve detay butonu listelenir.
- "Daha Detaylı Görüntüle" butonuna tıklanınca, seçilen içerik için:
  - Afiş, özet, yayın yılı, tür, süre, yönetmen, yazar, oyuncular, IMDB puanı ve ülke bilgileri ayrı bir sayfada gösterilir.
- Kullanıcıya boş veya hatalı girişlerde uyarı gösterilir.
- **Responsive tasarım**: Tüm ekran boyutlarında (mobil, tablet, masaüstü) uyumlu görünüm sağlar.

## 📂 Proje Yapısı

- **index.html**: Film/dizi arama sayfası (ana sayfa).
- **index2.html**: Seçilen içerik hakkında detay sayfası.
- **style.css**: Arama sayfasının stil dosyası.
- **style2.css**: Detay sayfasının stil dosyası.
- **app.js**: Arama yapılan veriyi OMDb API üzerinden çekip sonuçları listeler.
- **app2.js**: Seçilen içeriğin detay verilerini OMDb API ile alır ve detay sayfasına dinamik olarak yerleştirir.


## 💻 Kullanılan Teknolojiler ve Yazılım Dilleri
- HTML
- CSS
- JavaScript
- OMDb API

## 🛠 Kurulum ve Kullanım

Bu projeyi bilgisayarınıza klonlamak için şu adımları izleyin:

1. **Proje Klasörünü Kopyalayın**:
   - GitHub'dan projeyi klonlamak için terminal veya komut satırında şu komutu çalıştırın:
     ```bash
     git clone https://github.com/Furkannalbayrak/JavaScript.git
     ```

2. **Proje Klasörüne Girin**:
   - Klonlanan projeye gitmek için şu komutu çalıştırın:
     ```bash
     cd JavaScript/Movie-search
     ```

3. **Gerekli Dosyayı Açın**:
   - Projeyi çalıştırmak için `index.html` dosyasını bir tarayıcıda açabilirsiniz.

Projeyi yerel ortamda çalıştırdığınızda, JavaScript tarayıcıda doğru şekilde çalışacaktır.


## 📜 License
Bu proje MIT lisansı altında sunulmaktadır. Daha fazla bilgi için LICENSE dosyasına göz atabilirsiniz.



