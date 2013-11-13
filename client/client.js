//Llamamos al template messages que dentro tiene el helper messages (el que iteramos con each)

Template.messages.messages= function(){
	//Devuelve todos los elementos( {} ) ordenados por tiempo (sort) en orden descendente -1
	return Messages.find({},{sort: {time: -1}});
}

Template.input.events={
	'keydown input#message': function(event){
		if(event.which == 13){
			if (Meteor.user()){
				var name= Meteor.user().username;
			}else{
				var name= 'Anonymous';
			}
			var message = $('#message');
			if (message.val() !=''){
				Messages.insert({
					name:name,			
					message: message.val(),
					time: Date.now()
				});
				message.val('');
			}
		}	
	}
}

Accounts.ui.config({
	passwordSignupFields:
	'USERNAME_AND_OPTIONAL_EMAIL'
});

//CLIENT=> Deps.autorun(consulta la puntuacion mas alta y la actualiza en todos los browser), method.call(llama al servidor para indicarle la puntuacion que ha hecho)

//SERVER=> meteor.methods(actualiza la base de datos)


