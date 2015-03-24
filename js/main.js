$(function(){
	var qrcode_write = new QRCode("qrcode_write");

	//https://github.com/davidshimjs/qrcodejs
	$("#txt2read").on("keydown", function(e){
	    var elText = document.getElementById("txt2read");
	    qrcode_write.makeCode(elText.value);
	});

	//https://github.com/LazarSoft/jsqrcode
	//http://www.webqr.com/index.html
	$("#scan").click(function(e){
		load();
	});
	
});