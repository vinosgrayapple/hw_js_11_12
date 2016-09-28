$('.carousel-list').carouselPlugin();



var user={
	fio:"Иванов Иван Иванович",
	img:"https://i.imgur.com/RFk9hgO.gif",
	prof:"Студент заборотроительного техникума",
	wishes:[ "заборы строить не интересно","Платят мало", "Приходится работать ночью"],
	phone:"+38(067) 222-22-22",
	society:["vk.com","ok.ru"],
	feedback:"Если нужно, могу построить вам забор"
};
var user2={
	fio:"Комаричев Сергей Юрьевич",
	img:"https://vinosgrayapple.github.io/hw1/img/20160619_125625.jpg",
	prof:"Аналитик товарного рынка",
	wishes:[ "Создавать магию - это мечта детства.","Изучаю профессию, которая сделает меня космополитом.", "Процесс изучения frontend(IT) процесс бесконечный."],
	phone:"+38 (067) 625-18-58",
	fb:"https://www.facebook.com/vinosgray",
	society:["vk.com","ok.ru"],
	feedback:"Если нужно, могу провести аналитику игристых вин по предприятиям отрасли."
};
//---------------------------------------
var templated = tmpl($('#tmpl').html());
var result = templated(user);
$('#ejohn-box').append(result);
//---------------------------------------
var templated2 = _.template($('#tmpl2').html());
var result2 = templated2();
$('#lodash-box').append(result2);
