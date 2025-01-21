Formulario de tipo Template:

1- Importamos en el componente donde vamos a realizar el formulario la libería FormsModule

2- Creamos en el html el formulario con la etiqueta form

3- Al form le colocamos un nomnbre o template, e igualamos a ese nombre a ngForm de esta forma
#nombreForm = "ngForm"

4- Creamos un evento de tipo submit que en este caso se llama (ngSubmit) = "functionTs(nombreForm.value) o (nombreForm). 
Ojo funcionTs es un nombre generico y debemos pasar a esta funcion
obligatoriamente el nombre del formulario creado en el paso anterior.

5- Todos los campos del formulario deben llevar un name  = "..." y un atributo ngModel.

6- La funcion devolvera un objeto json con cada uno de los campos del formulario.