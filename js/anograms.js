var anograms = [{"prefix": "","name": "Nretnil","surname": "Kram"},{"prefix": "Mr","surname": "Rankle","name": "Nit"},{"prefix": "Mr","surname": "Rankle","name": "Tin"},{"prefix": "Mr","surname": "Lanker","name": "Nit"},{"prefix": "Mr","surname": "Lanker","name": "Tin"},{"prefix": "Mr","name": "Talker","surname": "Inn"},{"prefix": "Mr","surname": "Tanker","name": "Nil"},{"prefix": "Mr","name": "Renal","surname": "Knit"},{"prefix": "Mr","surname": "Learn","name": "Knit"},{"prefix": "Mr","surname": "Antler","name": "Kin"},{"prefix": "Mr","name": "Antler","surname": "Ink"},{"prefix": "Mr","surname": "Learnt","name": "Kin"},{"prefix": "Mr","name": "Learnt","surname": "Ink"},{"prefix": "Mr","surname": "Rental","name": "Kin"},{"prefix": "Mr","surname": "Rental","name": "Ink"},{"prefix": "Mr","surname": "Leant","name": "Rink"},{"prefix": "Mr","name": "Tanner","surname": "Ilk"},{"prefix": "Mr","surname": "Ratlin","name": "Ken"},{"prefix": "Mr","name": "Rain","surname": "Knelt"},{"prefix": "Mr","name": "Rani","surname": "Knelt"},{"prefix": "Mr","name": "Iran","surname": "Knelt"},{"prefix": "Mr","name": "Lank","surname": "Inert"},{"prefix": "Mr","name": "Lank","surname": "Niter"},{"prefix": "Mr","name": "Lank","surname": "Inter"},{"prefix": "Mr","name": "Lank","surname": "Nitre"},{"prefix": "Mr","surname": "Talk","name": "Inner"},{"prefix": "Mr","name": "Rank","surname": "Inlet"},{"prefix": "Mr","name": "Nark","surname": "Inlet"},{"prefix": "Mr","name": "Tank","surname": "Liner"},{"prefix": "Mr","name": "Ark","surname": "Linnet"},{"prefix": "Mr","name": "Kart","surname": "Linen"},{"prefix": "Mr","name": "Ran","surname": "Tinkle"},{"prefix": "Mr","name": "Tarn","surname": "Liken"},{"prefix": "Mr","name": "Rant","surname": "Liken"}]

var getName = function () {
	var count = anograms.length;
	var name = anograms[Math.floor(Math.random()*count)];
	var display = name['prefix']+" "+name['name']+" "+name["surname"];
	$(".header-text").text(display);
	console.log(display);
}

getName();

$(function () { 
	$(".header-text").on("click",getName);
})