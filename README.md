# :book: HTML 学习笔记

---> 目录

- [:book: HTML 学习笔记](#book-html-学习笔记)
  - [:houses: 个人主页](#houses-个人主页)
    - [:arrow\_up\_small: 可复用的导航栏](#arrow_up_small-可复用的导航栏)
  - [:clipboard: Minecraft UI 的 `HTML` 重现](#clipboard-minecraft-ui-的-html-重现)
    - [:star2: 闪烁的标语](#star2-闪烁的标语)
    - [:window: 使各类元素自适应窗口](#window-使各类元素自适应窗口)
      - [:computer\_mouse: 按钮元素 (特指使用背景图的按钮)](#computer_mouse-按钮元素-特指使用背景图的按钮)
      - [:bookmark\_tabs: 文本元素](#bookmark_tabs-文本元素)
      - [:framed\_picture: 图片元素](#framed_picture-图片元素)
    - [:ice\_cube: 3D 盒子](#ice_cube-3d-盒子)

## :houses: 个人主页

### :arrow_up_small: 可复用的导航栏

- 首先准备一份导航栏，存储在一个单独的 `HTML` 中，以备调用
  - `nav.html` - 导航栏文件
  - `index.html` - 主页文件示例

```html
<!-- nav.html -->
<!-- 注意在此处调用接下来要用到的 js 代码 -->
<script src="js/script.js"></script>
<div class="sidebar-menu">
  <nav>
    <ul>
      <!-- 注意在此处给每个标签添加 id -->
      <a id="home" href="/">主页</a>
      <a id="about" href="about.html">关于我</a>
      <a id="project" href="project.html">项目</a>
      <a id="contact" href="contact.html">联系我</a>
    </ul>
  </nav>
</div>
```
  
```html
<!-- index.html -->
<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <!-- 注意调用以下 css 库 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
    <!-- 注意调用以下 js 库 -->
    <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>

    <div class="sidebar-menu">
        <div id="nav"></div>
    </div>

    <script>
        $("#nav").load("nav.html");
    </script>

</body>
```

- 接下来设置一些简单的 `css` 样式

```css
nav ul {
    margin: 0;
    padding: 0;
    width: 16rem;
    height: 100%;
    position: fixed;
    background-color: rgb(100, 56, 72, 0.75);
}

nav ul a {
    display: block;
    padding: 0.75rem 1rem;
    text-decoration: none;
}

ul a {
    display: inline-block;
    padding: 0.5rem 0.75rem;
}

ul a:hover:not(.active) {
    color: #4CAF50;
    background-color: #555;
    font-weight: bold;
}

/* 导航栏标签激活 */
ul a.active {
    background-color: #4CAF50;
    color: whitesmoke;
    font-weight: bold;
}
```

- 使用 `js` 监测当前页面名称实现对应标签激活状态

```javascript
// 导航栏激活强调色
$(document).ready(function() {    // 等待页面加载完成
    var path = window.location.pathname;  // 获取当前页面路径
    // 根据路径更改导航栏标题背景色
    if (path === '/' || path === '/index.html') {
      $('#home').addClass('active');
    } else if (path === '/about.html') {
      $('#about').addClass('active');
    } else if (path === '/project.html') {
      $('#project').addClass('active');
    } else if (path === '/contact.html') {
      $('#contact').addClass('active');
    }
  });
```

## :clipboard: Minecraft UI 的 `HTML` 重现

### :star2: 闪烁的标语

- 首先准备如下格式的 `json` 文件

```json
{
  "splashes": [
    "As seen on TV!", 
    "Awesome!", 
    "100% pure!", 
    "May contain nuts!", 
    "More polygons!", 
    "Sniff sniff...", 
    "Place hanging sign here", 
    "Joule is neat too!"
  ]
}
```

- `javascript`

```javascript
// 获取 json 文件中 splashes 数组内的字符串数据
fetch('.text.javascripton')  // 设置文本路径
    .then(response => response.javascripton())
    .then(data => {
        const splashes = data.splashes;
        // 将字符串数组渲染到页面上
        const splashElem = document.getElementById('splash');
        splashElem.innerHTML = splashes[Math.floor(Math.random() * splashes.length)];
    })
    .catch(error => console.error(error));
```

- `css`

```css
/* 闪烁文字 */
.shiningText {
    position: absolute;
    /* 请根据实际情况自行调节位置 */
    top: 4%;
    left: 42%;
    right: 8%;
    /* 请根据实际情况自行调节位置 */
    transform: rotate(-15deg);
    font-size: 1.5em;
    color: yellow;
    text-shadow: 2px 2px #3f3f00;
    animation-name: shining;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 1.5s;
}

/* 闪烁文字动画 */
@keyframes shining {
    0% {
        transform: scale(1) rotate(-15deg);
    }

    25% {
        transform: scale(.95) rotate(-15deg);
    }

    50% {
        transform: scale(1) rotate(-15deg);
    }

    75% {
        transform: scale(.95) rotate(-15deg);
    }
}
```

- `html`

```html
<p id="splash" class='shiningText'></p>
```

### :window: 使各类元素自适应窗口

#### :computer_mouse: 按钮元素 (特指使用背景图的按钮)

- 准备好按钮背景图
  - 按钮主背景图
  - 按钮边框图

- `css`

```css
.button {
    border: none;
    font-family: Minecraft, Unifont, sans-serif;
    width: 460px;
    height: 46px;
    max-width: 75%;
    max-height: 75%;
    border-style: solid;
    display: inline-block;
    padding: 4px 8px;
    /* 按钮主背景图 */
    background: url('img/button_body.png');
    /* 按钮边框图 */
    border-image-source: url('img/button.png');
    /* 按钮边框宽度 */
    border-width: 8px;
    border-image-slice: 16;
    border-image-repeat: round;
    border-image-width: 8px;
    text-align: center;
    text-decoration: none;
    color: whitesmoke;
    text-shadow: 1px 1px black;
    font-size: 1em;
    letter-spacing: 1px;
}
```

#### :bookmark_tabs: 文本元素

- `css`

```css
div {
    font-family: Minecraft, Unifont, sans-serif;
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 1px;
    line-height: 32px;
    text-align: center;
    color: whitesmoke;
    text-shadow: 1px 1px black;
    transition: font-size 0.2s ease-out;
}

@media only screen and (max-width: 1200px) {
    div {
        font-size: 18px;
    }
}

@media only screen and (max-width: 1000px) {
    div {
        font-size: 16px;
    }
}

@media only screen and (max-width: 800px) {
    div {
        font-size: 14px;
    }
}

@media only screen and (max-width: 500px) {
    div {
        font-size: 12px;
    }
}
```

#### :framed_picture: 图片元素

- `css`

```css
img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
}
```

### :ice_cube: 3D 盒子

- 首先准备立方体所需要的侧表面所需要的图片, 例如:
  - `background/panorama_0.png`
  - `background/panorama_1.png`
  - `background/panorama_2.png`
  - `background/panorama_3.png`

- `javascript`
  - 实时监测并刷新网页宽度和高度

```javascript
const root = document.documentElement;

// 监听 resize 事件，实时更新 CSS 变量
window.addEventListener('resize', function() {
    // 获取网页宽度
    const pageWidth = window.innerWidth;
    // 获取网页高度
    const pageHeight = window.innerHeight;

    // 将宽度赋值给CSS变量
    root.style.setProperty('--page-width', `${pageWidth}px`);
    // 将高度赋值给CSS变量
    root.style.setProperty('--page-height', `${pageHeight}px`);

    // 通过比较页面宽高来设置 box 宽度
    if (pageHeight >= pageWidth) {
        const boxWidth = pageHeight;
        root.style.setProperty('--box-width', `${boxWidth}px`);
    } else {
        const boxWidth = pageWidth;
        root.style.setProperty('--box-width', `${boxWidth}px`);
    }
});

// 网页初始加载前监测一次, 确保 3D 盒子正常显示
window.dispatchEvent(new Event('resize'));

```

- `css`
  - :warning: 由于一些神秘的原因这里的样式需要内嵌至 `html` 头文件中

```css
<style>
    .box {
        position: fixed;
        width: var(--box-width);
        height: var(--box-width);
        transform-style: preserve-3d;
        animation: boxRotate 240s infinite linear;
    }

    @keyframes boxRotate {
        0% {
            transform: rotateY(0);
        }

        100% {
            transform: rotateY(360deg);
        }
    }

    .box>div {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .out-front {
        background-image: url("background/panorama_0.png");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
        transform: rotateY(0deg) translateZ(calc(-1 * (var(--box-width) / 2)));
        backface-visibility: hidden
        }

    .out-back {
        background-image: url("background/panorama_2.png");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
        transform: rotateY(180deg) translateZ(calc(-1 * (var(--box-width) / 2)));
        backface-visibility: hidden
    }

    .out-left {
        background-image: url("background/panorama_3.png");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
        transform: rotateY(90deg) translateZ(calc(-1 * (var(--box-width) / 2)));
        backface-visibility: hidden
        }

    .out-right {
        background-image: url("background/panorama_1.png");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
        transform: rotateY(270deg) translateZ(calc(-1 * (var(--box-width) / 2)));
        backface-visibility: hidden
        }
</style>
```

- `html`

```html
<div class="box">
    <div class="out-front"></div>
    <div class="out-back"></div>
    <div class="out-left"></div>
    <div class="out-right"></div>
    <div class="out-top"></div>
    <div class="out-bottom"></div>
</div>
```
