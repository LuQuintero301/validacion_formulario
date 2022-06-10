const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {

    Ndedocumento: /^\d{7,10}$/, // de 7 a 10 numeros.
    Rol: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/ // 4 a 12 digitos.

}

const campos = {
    Ndedocumento:false,
    Rol:false,
    password:false //si un campo esta valido o no 
}

const validarFormulario = (e) => {
    switch (e.target.name) {//identifica campos

    case "Ndedocumento":
        validarCampo(expresiones.Ndedocumento, e.target, 'Ndedocumento');
    break;

    case "Rol":
        validarCampo(expresiones.Rol, e.target, 'Rol');
         

    break;

    case "Password":
         validarCampo(expresiones.password, e.target, 'password');

    break;

    }

}//comprobar los campos levantar la tecla 

const validarCampo = (expresion, input, campo) => {
           if(expresion.test(input.value)){//el valor que tenemos no es correcto
              document.getElementById(`${campo}`).classList.remove('formulario__incorrecto')//con ${campo} le estamos tomando el valor de variable desde validarCampo
              document.getElementById(`${campo}`).classList.add('formulario__correcto');
              document.querySelectorAll(`${campo} i`).classList.remove('fa-check-circle');//para eliminar circle y agregar check
              document.querySelector(`#${campo} i`).classList.add('fa-times-circle');
              document.query.Selector(`#${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');//para quitar la leyenda al usuario
              campos[campo] = true;
          } else{//si la expresion es correcta acdemos si no 
              document.getElementById(`${campo}`).classList.add('formulario__incorrecto');//marca incorrecto 
              document.getElementById(`${campo}`).classList.remove('formulario__correcto');
              document.querySelectorAll(`#${campo} i`).classList.remove('fa-times-circle');
              document.querySelectorAll(`#${campo} i`).classList.remove('fa-check-circle');
              document.query.Selector(`#${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');//para mostrar la leyenda al usuario
              campo[campo] = false;
          }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
}); //quiero que por cada input me ejecutes un codigo



formulario.addEventListener('submit', () => {
    
   const terminos = document.getElementById('terminos';)
   if(campos.Ndedocumento && campos.Rol && campos.password && terminos.checked){
    formulario.reset[];  
    
    
}
    
})//submit cuando el usuario presione el boton 


