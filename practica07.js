const form = document.getElementById("formulario");

let Componentes = (leyenda, inp1, inp2)=>{
    return `
    <fieldset id="infPer">
            <legend>${leyenda}</legend>
            <label for="user">${inp2} :</label>
            <input type="text" name="user" id="user">
            <label for="Correo">${inp1} :</label>
            <input type="email" name="Correo" id="Correo">
        </fieldset>
    `
}

form.insertAdjacentHTML("afterbegin", Componentes("Informacion De Direccion","Direccion","Ciudad"))
form.insertAdjacentHTML("afterbegin", Componentes("Informacion Personal","Nombre","Correo Electronico"))