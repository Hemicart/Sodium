<template>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary { display: block; }

button,
input { overflow: visible; }

button,
select { text-transform: none; }

button,
html [type="button"],[type="reset"],[type="submit"]
{
	-webkit-appearance: button;
}

button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner
{
	border-style: none;
	padding: 0;
}

button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring
{
	outline: 1px dotted ButtonText
}

textarea
{
	overflow: auto
}

input
{
  &[type="checkbox"],[type="radio"]
  {
    box-sizing: border-box;
    padding: 0;
  }
  &[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button
  {
    height: auto
  }
  &[type="search"]
  {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  &[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration
  {
    -webkit-appearance: none;
  }
  &::-webkit-input-placeholder
  {
    color: inherit;
    opacity: 0.54;
  }
  &::-webkit-file-upload-button
  {
    -webkit-appearance: button;
    font: inherit;
  }
}

ul, li { list-style: none }

a { text-decoration: none }

* {
	margin: 0;
	padding: 0;
	font-size: inherit;
	font-family: inherit;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

html {
	height: 100%;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

body {
	height: 100%;
	width: 100%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
	color: #ffffff;
}
</style>
