# HTML 学习笔记

## 📄 一些代码

### 🌟 闪烁文字 (ShiningText!)

1. 首先准备如下格式的 json

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

2. js 代码

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

3. css 代码

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
   

4. html 代码

```html
<p id="splash" class='shiningText'></p>
```