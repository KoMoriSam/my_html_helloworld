# :book: HTML 学习笔记

## :page_with_curl: 目录

> [:star2: 闪烁的标语](#star2-闪烁的标语)  
> [:window: 各类元素自适应窗口](#window-使各类元素自适应窗口)
>> [:computer_mouse: 按钮](#computer_mouse-按钮元素自适应-特指使用背景图的按钮)  
>> [:bookmark_tabs: 文本](#bookmark_tabs-文本元素自适应)  
>> [:framed_picture: 图像](#framed_picture-图片元素自适应)

## :star2: 闪烁的标语

1. 首先准备如下格式的 `json` 文件

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

2. `js` 代码

```javascript
// 获取 json 文件中 splashes 数组内的字符串数据
fetch('.text.json')  // 设置文本路径
	.then(response => response.json())
	.then(data => {
		const splashes = data.splashes;
		// 将字符串数组渲染到页面上
		const splashElem = document.getElementById('splash');
		splashElem.innerHTML = splashes[Math.floor(Math.random() * splashes.length)];
	})
	.catch(error => console.error(error));
```

3. `css` 代码

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
   

4. `html` 代码

```html
<p id="splash" class='shiningText'></p>
```

## :window: 使各类元素自适应窗口

### :computer_mouse: 按钮元素自适应 (特指使用背景图的按钮)

1. 准备好按钮背景图

- 按钮主背景图
- 按钮边框图

2. `css` 代码

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

### :bookmark_tabs: 文本元素自适应

1. `css` 代码

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

### :framed_picture: 图片元素自适应

1. `css` 代码

```css
img {
	max-width: 100%;
	max-height: 100%;
	margin: auto;
}
```
