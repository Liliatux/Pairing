$("input").css("background", function(){
	var couleur = $(this).data("color");
	console.log(couleur);
	return couleur;
});

$("input").click(function(){
	var couleur = $(this).data("color")
	if(checked()){
		$(".main").css("color", couleur);
	} else{
		$("body").css("background", couleur);
	}
});

function checked(){
	return $("#modify-texte").is(":checked");
}

//fin
