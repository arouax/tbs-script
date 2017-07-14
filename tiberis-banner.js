// Область, в которой можно менять отображение баннера, стили, размеры:

// ссылка на картинку фона
var bgImg = 'https://arouax.github.io/tbs-script/img/bg.png'
// высота баннера
var bannerHeight = "140px";
// поля баннера
var bannerPadding = "20px";
// Ширина одного блока в баннере
var bannerBlockWidth = "150px";
// Высота одного блока в баннере
var bannerBlockHeight = "100px";
// Цвет фона блока с товаром
var bannerBlockColor = "#fff";
// Отступы между блоками в баннере
var bannerBlockMargin = "10px";
// Высота изображения товара в баннере
var productImageHeight = "40px";

// и так далее...

// ------------------------- Дальше не редактировать! -------------------
// Получаем JSON с товарами
var productsJSON = '';

function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
		 if (xmlhttp.status == 200) {
			productsJSON = xmlhttp.responseText;
			 drawBanner();
			}
		 else if (xmlhttp.status == 400) {
			 alert('There was an error 400');
			}
		 else {
			alert('something else other than 200 was returned');
			}
		}
	};

	xmlhttp.open("GET", "https://arouax.github.io/tbs-script/catalogue.json", true);
	xmlhttp.send();
}

loadXMLDoc();

// Рисуем баннер
var banner = document.getElementById('custom-banner');

banner.style.backgroundImage = "url('" + bgImg + "')";
banner.style.height = bannerHeight;
banner.style.padding = bannerPadding;

function addElement (parentDiv, json = null) {
	var newDiv = document.createElement("div");
	newDiv.style.width = bannerBlockWidth;
	newDiv.style.height = bannerBlockHeight;
	newDiv.style.backgroundColor = bannerBlockColor;
	newDiv.style.cssFloat = "left";
	newDiv.style.marginLeft = bannerBlockMargin;
	var newText = document.createTextNode(json.name);
	var newImage = document.createElement('img');
	newImage.src = json.url
	newImage.style.height = productImageHeight;


	newDiv.appendChild(newImage);
	newDiv.appendChild(newText);
	
	parentDiv.appendChild(newDiv);
}

function drawBanner() {
	productsJSON = JSON.parse(productsJSON).positions;
	console.log(productsJSON[0].name);

	for (var i = 0; i < productsJSON.length; i++) {
		addElement(banner, productsJSON[i])
	}
}
