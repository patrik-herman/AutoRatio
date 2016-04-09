# AutoRatio.js
Small library for all websites that wants to add fullsize background images with automatic ratio.

## How to use
* Add the library somewhere in your local folder
* Create a new `<div>` element to your website, that will be your background image.
* Add it following styles into your css code:
```css
your_background_div_selector {
	position: absolute;
	top: 0; left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-size: 100% auto;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	background-image: url('path/to/your/background.png');
}
```
* Right before end of `body` tag add two `script` tags:
```html
<script src="path/to/AutoRatio.js"></script>
<script>
	AutoRatio.enable('your_background_div_selector', width_of_image, height_of_image);
</script>
</body>
```
* You're ready, enjoy!
