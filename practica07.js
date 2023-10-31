const form = document.getElementById("formulario");

let Componentes = (leyenda, texto1, texto2)=>{
    return `
    <fieldset id="infPer">
            <legend>${leyenda}</legend>
            <label for="user">${texto2} :</label>
            <input type="text" name="user" id="user">
            <label for="Correo">${texto1} :</label>
            <input type="email" name="Correo" id="Correo">
        </fieldset>
    `
}

form.insertAdjacentHTML("afterbegin", Componentes("Informacion De Direccion","Direccion","Ciudad"))
form.insertAdjacentHTML("afterbegin", Componentes("Informacion Personal","Nombre","Correo Electronico"))