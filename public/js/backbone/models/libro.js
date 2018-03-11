var Libro = Backbone.Model.extend({
	validate: function(atributos){
		if (!atributos.titulo){
			return "Debe tener titulo";
		}
	},

	
	urlRoot:'/libros',
	initialize: function(){
		console.log('Se ha creado una nueva instancia');
		
		this.on('change', function(){
			
			console.log("El modelo ha cambado");
			
			
		});
	},
	defaults: {
		autor: 'Desconocido',
	}
});
