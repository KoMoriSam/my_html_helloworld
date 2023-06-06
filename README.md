# :book: HTML 学习笔记

目录

- [:book: HTML 学习笔记](#book-html-学习笔记)
  - [:star2: 闪烁的标语](#star2-闪烁的标语)
  - [:window: 使各类元素自适应窗口](#window-使各类元素自适应窗口)
    - [:computer\_mouse: 按钮元素 (特指使用背景图的按钮)](#computer_mouse-按钮元素-特指使用背景图的按钮)
    - [:bookmark\_tabs: 文本元素](#bookmark_tabs-文本元素)
    - [:framed\_picture: 图片元素](#framed_picture-图片元素)
  - [:ice\_cube: 3D 盒子](#ice_cube-3d-盒子)

## :star2: 闪烁的标语

- 首先准备如下格式的 `javascripton` 文件

```javascripton
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

- `javascript` 代码

```javascript
// 获取 javascripton 文件中 splashes 数组内的字符串数据
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

- `css` 代码

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

- `html` 代码

```html
<p id="splash" class='shiningText'></p>
```

## :window: 使各类元素自适应窗口

### :computer_mouse: 按钮元素 (特指使用背景图的按钮)

- 准备好按钮背景图
  - 按钮主背景图
  - 按钮边框图

- `css` 代码

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
    background: url('./img/button_body.png');
    /* 按钮边框图 */
    border-image-source: url('./img/button.png');
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

### :bookmark_tabs: 文本元素

- `css` 代码

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

### :framed_picture: 图片元素

- `css` 代码

```css
img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
}
```

## :ice_cube: 3D 盒子

- 首先准备立方体所需要的侧表面所需要的图片, 例如:
  - `./background/panorama_0.png`
  - `./background/panorama_1.png`
  - `./background/panorama_2.png`
  - `./background/panorama_3.png`

- `javascript` 代码
  - 实时监测并刷新网页宽度和高度

```javascript
const root = document.documentElement;

// 监听resize事件，实时更新CSS变量
window.addEventListener('resize', function() {
    // 获取网页宽度
    const pageWidth = window.innerWidth;
    // 获取网页高度
    const pageHeight = window.innerHeight;

    // 将宽度赋值给CSS变量
    root.style.setProperty('--page-width', `${pageWidth}px`);
    // 将高度赋值给CSS变量
    root.style.setProperty('--page-height', `${pageHeight}px`);

    if (pageHeight >= pageWidth) {
        const boxWidth = pageHeight;
        root.style.setProperty('--box-width', `${boxWidth}px`);
    } else {
        const boxWidth = pageWidth;
        root.style.setProperty('--box-width', `${boxWidth}px`);
    }
});

window.dispatchEvent(new Event('resize'));

```

- `css` 代码
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
        background-image: url("./background/panorama_0.png");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
        transform: rotateY(0deg) translateZ(calc(-1 * (var(--box-width) / 2)));
        backface-visibility: hidden
        }

    .out-back {
        background-image: url("./background/panorama_2.png");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
        transform: rotateY(180deg) translateZ(calc(-1 * (var(--box-width) / 2)));
        backface-visibility: hidden
    }

    .out-left {
        background-image: url("./background/panorama_3.png");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
        transform: rotateY(90deg) translateZ(calc(-1 * (var(--box-width) / 2)));
        backface-visibility: hidden
        }

    .out-right {
        background-image: url("./background/panorama_1.png");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
        transform: rotateY(270deg) translateZ(calc(-1 * (var(--box-width) / 2)));
        backface-visibility: hidden
        }
</style>
```

- `html` 代码

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
