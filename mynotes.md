- npx create-react-app tour-places / yarn create react-app tour-places
- cd tour-places/
- npx start / yarn start 


- Component yapısını pekiştirmek için bu basit projeyi yapacağız. Style kısmında SASS yapısını kullanacağımız için src klasörü içerisine componenetlerimizi oluşturmakla başlayalım:
- src/components/cards: Card.css - Card.jsx
- src/components/header: Header.css - Header.jsx
- src/components/navbar: Navbar.css - Navbar.jsx
- terminale yarn add sass komutu ile SASS'ı yüklüyoruz. package.json içerisindeki depenedencies içerisinde artık görebiliriz.
- diğer gerekli klasörler ve dosyalarımızı oluşturalım: src/helpers/data.js bu dosya içerisine en dış klasörümüzdeki data.js dosyası içerisindeki bilgileri girdik. burası bizim backendimiz olacak. yani oluşturacağımız projedeki verileri bu dosyadan çekeceğiz.
- scss klasörümüzün içerisine de gerekli dosyalarımızı oluşturalım: _reset.scss , _variables.scss . ayrıca src klasörüne App.scss(scss klasörü ile aynı seviyede) dosyasını oluşturacağız. burada bulunan App.css dosyasını silebiliriz çünkü kullanmayacağız. aynı şekilde App.js dosyası içerisindeki css importunu da silebiliriz. 
```js
import "./App.scss";
// import işlemini yaptık
```
