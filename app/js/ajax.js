/* Будьте внимательны. Мы здесь указали адрес нашего сайта
и адрес скрипта, обрабатывающего форму.
Не забудьте изменить их на Ваши.
 */
var Site={serverName: 'ilx.kz'} /* адрес сайта */
function sendform(){
	var msg=$('#myform').serialize();
        /* блокируем кнопку отправить */
	document.myform.submit.disabled=true;
        /* меняем надпись на кнопке */
	document.myform.submit.value="Подождите..."; 
	$.ajax({
		type:'POST',
                // /* адрес php файла, обрабатывающего форму */
		url:"http://"+Site.serverName+"/../send.php",
		data:msg+"&action=sendform",
		cache:false,
		success:function(data){
			$("#error").html(data);
			document.myform.submit.disabled=false;
			document.myform.submit.value="Отправить";
		}
	});
}
 

function sendform2(){
	var msg=$('#myform2').serialize();
        /* блокируем кнопку отправить */
	document.myform2.submit.disabled=true;
        /* меняем надпись на кнопке */
	document.myform2.submit.value="Подождите..."; 
	$.ajax({
		type:'POST',
                // /* адрес php файла, обрабатывающего форму */
		url:"http://"+Site.serverName+"/../send2.php",
		data:msg+"&action=sendform",
		cache:false,
		success:function(data){
			$("#error2").html(data);
			document.myform2.submit.disabled=false;
			document.myform2.submit.value="Отправить";
		}
	});
}