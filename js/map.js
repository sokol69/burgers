ymaps.ready(init);
var myMap,
	myPlacemark1,
	myPlacemark2,
	myPlacemark3;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.93258556, 30.34673450],
            zoom: 10
        });

        myPin = new ymaps.GeoObjectCollection({}, {
       iconLayout: 'default#image',
       iconImageHref: 'img/icons/map-marker.svg',
       iconImageSize: [60, 64],
       iconImageOffset: [-3, -42],
       draggable: true 
    });


        myPlacemark1 = new ymaps.Placemark([59.76, 30.64],
        {
        hintContent: 'Mr.BurGer',
        balloonContent: 'Мы делаем натуральные бургеры!',
        });

        myPlacemark2 = new ymaps.Placemark([59.85, 30.5],
        {
        	hintContent: 'Mr.BurGer',
        	balloonContent: 'Мы делаем натуральные бургеры!',
        });

        myPlacemark3 = new ymaps.Placemark([59.93, 30.7],
        {
        	hintContent: 'Mr.BurGer',
        	balloonContent: 'Мы делаем натуральные бургеры!'
        });

        myPin.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3);
        myMap.geoObjects.add(myPin);
    }