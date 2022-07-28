let Juzgado; 
let Proceso;
let nameDemandante;  
let IdDemandante;
let EmailDte; 
let nameDemandado; 
let IdDemandado; 
let EmailDdo;

let Abogados = {
        abogado:[{
            Nombre: "JEIDY JOHANA LOPEZ DIAZ",
            Id: 1026,
            Tp:233, 
            Correo: 'jeidylopez@outlook.es'
        }],
};

let NombreAbogado = Abogados.abogado.Nombre; 
let IdAbogado = Abogados.abogado.Id; 
let TarjProf= Abogados.abogado.Tp; 
let CorreoAbog = Abogados.Correo; 

let poder = `JUEZ ${Juzgado.toUpperCase()} REPARTO BOGOTA D.C. 
        E. 	 	S. 	 	D.         

        PROCESO: ${Proceso}        
        DEMANDANTE: ${nameDemandante}
        IDENTIFICACION DEMANDANTE: ${IdDemandante}
        DEMANDADO: ${nameDemandado}
        IDENTIFICACION DEMANDADO: ${IdDemandado}   
        REFERENCIA:  PODER  
        
        ${nameDemandante}, mayor de edad, Identificada con cedula de ciudadanía No ${IdDemandante}, 
        con domicilio y residencia principal en la ciudad de Bogotá D.C., por medio del presente escrito 
        me permito manifestar a usted muy respetuosamente que confiero PODER ESPECIAL AMPLIO Y SUFICIENTE al Dr.
        ${NombreAbogado}, Identificado con cedula de ciudadanía No ${IdAbogado}, Abogado en ejercicio y portador
        de la tarjeta profesional No ${TarjProf} expedida por el Consejo Superior de la Judicatura, para que en mi nombre
        y representación inicie, continue y lleve hasta su culminación PROCESO.

        Mi apoderada cuenta con las facultades inherentes para el ejercicio del presente poder tales como conciliar,
        sustituir, transigir, recibir, desistir, suscribir, reasumir, interponer los recursos de Ley, las descritas
        en los artículos 75 y 77 del Código General del Proceso. 
        
        Sírvase Doctor(a), reconocerle personería adjetiva para actuar al Dr. ${NombreAbogado} en los términos y los fines aquí señalados. 
        
        Atentamente,  
        

        ${nameDemandante}
        ${IdDemandante}
        ${EmailDte}
        
        
        Acepto,  
        
        
        ${NombreAbogado}
        ${IdAbogado}	
        ${TarjProf} del C.S. de la J.  
        ${CorreoAbog} 
`

function Capturar(){
        Juzgado = document.getElementById('jurisdiccion').value; 
        Proceso = document.getElementById('proceso').value;
        nameDemandante = document.getElementById('nombreDte').value;  
        IdDemandante = document.getElementById('idDte').value;
        EmailDte = document.getElementById('').value; 
        // EmailDte = document.getElementById('').value; 
        // nameDemandado = document.getElementById('').value; 
        // IdDemandado = document.getElementById('').value; 
        // EmailDdo = document.getElementById('').value;
        alert('Juzgado')
}

document.getElementById("sendButton").addEventListener("click", function(event){
        event.preventDefault()
      });


` 
                    
            <option>CC</option>
            <option>NIT</option>
        </select>
    <label for="idNumDte">Número de Id</label>
    <input type="tel" id="idNumDte" name="idNumDte">
    <label for="correoDte">Correo Electrónico</label>
    <input type="email" id="correoDte" name="correoDte">
</fieldset>

<fieldset>
    <legend>DATOS DEL DEMANDADO</legend>
    <label for="nombreDdo">Nombre</label>
    <input type="text" id="nombreDdo" name="nomreDdo">
    <label for="idDdo">Tipo de Id</label>
        <select name="idDdo" id="idDdo">                
            <option>CC</option>
            <option>NIT</option>
        </select>
    <label for="idNumDte">Número de Id</label>
    <input type="tel" id="idNumDte" name="idNumDte">
    <label for="correoDdo">Correo Electrónico</label>
    <input type="email" id="correoDdo" name="correoDdo">
</fieldset> 
<button type="send" onclick="" >Enviar</button>
</form>`