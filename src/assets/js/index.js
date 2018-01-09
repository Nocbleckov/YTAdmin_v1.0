

function events(){
	$("#btn_login").click(function (){
		getData();
	});
}


function validate(nombreUsuario,password){
	if(nombreUsuario != "" && password != ""){
		return true;
	}else{
		return false;
	}
}

function getData(){
	var nombreUsuario = $("#tx_nombreUsuario").val();
	var password = $("#tx_password").val();
	if(validate(nombreUsuario,password)){
		//ingresar
		alert("ingresando..... :v");
	}else{
		alert("Todos los campos son obligatorios");
	}
}

