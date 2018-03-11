let LibrosCollection = Backbone.Collection.extend({
	model: Libro
});


let a = new Libro({ titulo: 'titulo 1', autor: 'autor 1'})
	b = new Libro({ titulo: 'titulo 2', autor: 'autor 2'})
	c = new Libro({ titulo: 'titulo 3', autor: 'autor 3'})
;

let libros = new LibrosCollection([a,b]);

libros.toJSON();

libros.add(c);

libros.toJSON();

libros.remove(a);
