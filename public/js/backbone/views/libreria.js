let Libreria = Backbone.View.extend(
	{
		tagName: 'span',
		className: 'nombreClase',
		id: 'nombreId'
	}
);

let vista = new Libreria();

vista.el;

console.log(vista);
