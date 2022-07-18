- npx create-react-app tour-places / yarn create react-app tour-places
- cd tour-places/
- npx start / yarn start 


- Component yapısını pekiştirmek için bu basit projeyi yapacağız. Style kısmında SASS yapısını kullanacağımız için src klasörü içerisine componenetlerimizi oluşturmakla başlayalım:
- src/components/Main: Main.scss - Main.jsx
- src/components/Header: Header.scss - Header.jsx
- src/components/Navbar: Navbar.scss - Navbar.jsx
- terminale yarn add sass komutu ile SASS'ı yüklüyoruz. package.json içerisindeki depenedencies içerisinde artık görebiliriz.
- diğer gerekli klasörler ve dosyalarımızı oluşturalım: src/helpers/data.js bu dosya içerisine en dış klasörümüzdeki data.js dosyası içerisindeki bilgileri girdik. burası bizim backendimiz olacak. yani oluşturacağımız projedeki verileri bu dosyadan çekeceğiz.
- scss klasörümüzün içerisine de gerekli dosyalarımızı oluşturalım: _reset.scss , _variables.scss . ayrıca src klasörüne App.scss(scss klasörü ile aynı seviyede) dosyasını oluşturacağız. burada bulunan App.css dosyasını silebiliriz çünkü kullanmayacağız. aynı şekilde asıl çalışacağımız App.js dosyası içerisindeki css importunu da silip scss dosyamızı import edeceğiz: 

```js
import "./App.scss";
// import işlemini yaptık
```

- _reset.scss dosyası içerisine resetleme işlemi yaptık ve _variables.scss dosyamız ile birlikte App.scss dosyamıza import ettik. böylece margin/padding'i sıfırlamış olduk:

```scss
// _reset.scss
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// App.scss
@import "./scss/reset";
@import "./scss/variables";
```

- projemizin her yerinde geçerli olacak (ör: background color gibi) özellikleri _variables.scss dosyamızda tanımlayalım:

```scss
// - _variables.scss

$backgroundColor: #ace0f9;
$cardNavBgColor: #171b20;
```

- şu an projemizin anayapısını ve klasörlerini oluşturduk. App.js dosyamıza gidelim ve herşeyi silelim. Kendimiz yazacağız:

```js
// App.js
import "./App.scss"

const App = () =>{
  return(
    <div className="App">
      <h1>Welcome React</h1>
    </div>
  )
}

export default App;
```

- google fonts'dan kullanacağımız fontları App.scss'imize import edelim:

```scss
// App.scss

@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hubballi&display=swap');

body{
    background-color: $backgroundColor;
    font-family: 'Amatic SC', cursive;
}

p{
    font-family: 'Hubballi', cursive;
}

```






















































