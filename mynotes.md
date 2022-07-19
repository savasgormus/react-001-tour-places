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

- navbarımızı oluşturmaya başlayalım. components/navbar/navbar.jsx dosyamıza gidiyoruz. rafce snipper'ı ile basit bir arrow function oluşturduk ve Navbar olarak isimlendirdik. Componentimiz oluştu fakat bunu görebilmemiz için App.js dosyasına import etmeliyiz.

```js
// Navbar.jsx
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>Navbar</div>
  )
}
export default Navbar

// app.js
import "./App.scss"
import Navbar from "./components/Navbar/Navbar";

const App = () =>{
  return(
    <div className="App">
      <h1>Welcome React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ea!</p>
      <Navbar />
    </div>
  )
}
export default App;
```

- artık navbarımız component olarak hazır. return ettiği div'in içerisine yazacağımız herşey artık HTML/CSS. burada yazacağımız herşey App.js'e aktarılacak.
- linklerimizi oluşturduk ve stil vermek için kullanacağımız Navbar.scss dosyamızı import ettik.

```js
// Navbar.jsx

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar'>
        <a href="#aboutus">ABOUT</a>
        <a href="#foryou">FOR YOU</a>
        <a href="#services">SERVICES</a>
        <a href="#blog">BLOG</a>
        <a href="#vlog">VLOG</a>
        <a href="#contact">CONTACT</a>
    </div>
  )
}
export default Navbar
```

- Navbarımızı stilize etmeye başlayalım. önce _variables.scss dosyamızı import edeceğiz ve css/sass işlemine başlayacağız:

```scss
// Navbar.scss
@import "../../scss/variables";

.navbar{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background-color: $cardNavBgColor;
    a{
        color: white;
        font-size: 2rem;
        padding: 1rem;
        text-decoration: none;
        font-weight: bold;
        &:hover{
            background-color: $backgroundColor;
            color: $cardNavBgColor
        }
    }
}
``` 

- Header'ımızı oluşturmaya başlayalım. components/header/Header.jsx dosyamıza rafce ile fonksiyonumuzu yazdık ve scss dosyamızı import ettik ve ekranımızda görüntüleyebilmek için App.js dosyamıza import ettik:

```js
// Header.jsx

import "./Header.scss";

const Header = () => {
  return (
    <div className='header'>
        <h1>POPULAR TOUR PLACES</h1>
    </div>
  )
}

export default Header
```

- şimdi kartların olduğu Main.jsx kısmına bakalım. rafce ile temel yapımızı oluşturduk. scss dosyamızı import ettik. return içerisindeki ana div'imizde işimize başlıyoruz.
- önce helpers içerisindeki data.js dosyasını import edelim ve console.log(data) ile console'da bu array'in titlelarını görelim. div içerisine de 0 1 2 3 .. indexleri görmeyi deneyelim. hepsini tek tek yazamayacağımız için bu data'yı map() ile sıralayacağız. daha sonra img vs gibi diğer özelliklerini sıralayalım.
- fakat biz farklı bir yol izleyeceğiz. Main klasörü içerisine Card.js isminde bir dosya açacağız ve bu dosyada map() methodunu kullanıp bir component olarak main.jsx dosyasına import edeceğiz.
- Card componentimizi tanımlamaya başlayalım. rafce ile yapımızı oluşturduk ve Card değişkene (data) ekledik. console.log(data) ile görüntüleyebiliriz. artık card.js içerisde data.title, data.description gibi yazdığımız herşeyi map'leyerek main.js'de göreceğiz.

```js
// cards.jsx
import React from 'react'

const Card = (data) => {
  console.log("ne geliyor?", data);
  return (
    <div className='cards'>
      
      <div className='title'>
        <h1>{data.title}</h1>
      </div>

        <img src={data.image} alt="" />
        
        <div className='card-over'>
          <p>
            {data.desc}
          </p>
        </div>
    </div>
  )
}

export default Card
```

```js
// main.jsx
import "./Main.scss";
import { data } from "../../helpers/data";
import Card from "./Card"

const Main = () => {
  console.log(data);
  return (
    <div className='card-container'>
      
      {data.map((item,index) => (<Card {...item} key={index}/>))}
      {/* bu kısımda Card ismini verdiğimiz component'den probs ile veri çekiyor. */}

    </div>
  )
}
export default Main;
``` 

- artık main.scss dosyasında kartlarımızı stillendirmeye başlayabiliriz. variables'ı import ederek başlayalım. sass kullanacağımız için nested bir yapı kullanacağız.

```scss
@import "../../scss/variables";


.card-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .cards{
        background-color: $cardNavBgColor;
        margin: 1rem;
        padding: 1rem;
        border-radius: 7px;
        box-shadow: 3px 3px 5px rgba(0,0,0,0.7);
        position: relative;

        // .card-over'ın hover'ı için gizledik.
        overflow: hidden;
        
        // .card-over'için yapacağımız işlem.
        &:hover .card-over{
            transform:translateY(0%); 
        }
    }
    .title{
        color: $backgroundColor;
        padding: 1rem;
        font-size: 1.5rem;
    }
    img{
        width: 500px;
        height: 350px;
        // fotoğrafların boyutu değiştiğinde bozulmasın diye object-fit kullanacağız.
        object-fit: cover;

        // resmin üstüne geldiğinde gri olmasını sağlıyoruz.
        filter:grayscale(0%);
        &:hover{
            filter:grayscale(100%);
        }
    }
    .card-over{
        color: white;
        // taşmaları engellemek için position: absolute kullanıyoruz.
        // .cards'a position relative verdik ki card-over içerisindeki öğeler ayrı ayrı
        // kendi alanında sabitlensin.
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
        font-size: 1rem;
        padding: 1rem;

        // açıklama kısmının hover durumunda aşağıdan yukarıya doğru gelmesini istiyoruz.
        // fakat hover'ı kartın üstüne geldiğinde vereceğiz.
        transform:translateY(100%);
        z-index: 1;
        transition: transform 0.7s ease-in-out;
    }
}
``` 

- scss klasörünün içerisine _mixins.scss dosyasını oluşturduk. buraya mediaquerylerimizi koyacağız ve oluşturduğumuz app'e responsive özelliği ekleyecek.

```scss
@mixin media-xsm {
    @media screen and (min-width: 0px) {
      @content;
    }
  }
  
  @mixin media-sm {
    @media screen and (min-width: 576px) {
      @content;
    }
  }
  
  @mixin media-md {
    @media screen and (min-width: 768px) {
      @content;
    }
  }
  
  @mixin media-lg {
    @media screen and (min-width: 1024px) {
      @content;
    }
  }
  
  @mixin media-xl {
    @media screen and (min-width: 1600px) {
      @content;
    }
  }
``` 

- navbar.scss dosyamıza gidelim ve mixins dosyamızı import edelim.

```scss
@import "../../scss/mixins";

// ekranı küçülttüğümüzde uyum sağlaması için navbar'a flex direction verdik.
@include media-xsm{
    .navbar{
        flex-direction: column;
        text-align: center;
    }
}

@include media-sm{
    .navbar{
        flex-direction: row;
    }
}
```


- yarn add gh-pages / npm i gh-pages
- package.json dosyamıza geldik ve scprits kısmına şu satırları ekledik: 
-   "predeploy": "yarn run build", eğer npm kullanıyorsak npm run build
-   "deploy": "gh-pages -d build"
- dosyanın başına da "homepage": "https://savasgormus.github.io/react-001-tour-places",  github reposunun tam adı