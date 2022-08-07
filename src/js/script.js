
function Capturar(){
    Juzgado = document.getElementById('jurisdiccion').value;
    ciudad = document.getElementById('ciudad').value;    
    Proceso = document.getElementById('proceso').value;
    EspecialidadProceso = document.getElementById('espProceso').value;

    nameDemandante = document.getElementById('nombreDte').value;
    tipoIdDte = document.getElementById('idDte').value;
    IdDemandante = document.getElementById('idNumDte').value;
    EmailDte = document.getElementById('correoDte').value; 

    nameDemandado = document.getElementById('nombreDdo').value
    tipoIdDdo = document.getElementById('idDdo').value;
    IdDemandado = document.getElementById('idNumDdo').value;
    EmailDdo = document.getElementById('correoDdo').value; 

    NombreAbogado = document.getElementById('nombreAbogado').value 
    idAbogado = document.getElementById('idAbogado').value;
    idNumAbogado = document.getElementById('idNumAbogado').value;
    tp= document.getElementById('tarjetaProfesional').value;
    EmailAbogado = document.getElementById('correoAbogado').value

    poder = `<div class='poder__Wrapper'>
    <p><b>JUEZ ${Juzgado = Juzgado.toUpperCase()} REPARTO</b> </p>
    <p>${ciudad = ciudad.toUpperCase()}.</p>  
    <p>E. &nbsp; S.&nbsp; D.</p>      
    <br>
    <p>PROCESO: <b>${Proceso = Proceso.toUpperCase()}  ${EspecialidadProceso = EspecialidadProceso.toUpperCase()}</b></p>      
    <p>DEMANDANTE:<b>${nameDemandante = nameDemandante.toUpperCase()}</b></p>
    <p>IDENTIFICACION DEMANDANTE: <b>{tipoIdDte = tipoIdDte.toUpperCase()} No ${IdDemandante}</b></p>
    <p>DEMANDADO: <b>${nameDemandado = nameDemandado.toUpperCase()}</b></p>
    <p>IDENTIFICACION DEMANDADO: <b>{tipoIdDdo = tipoIdDdo.toUpperCase()} No ${IdDemandado}</b></p>   
    <p>REFERENCIA: <b>PODER</b></p> 
    <br>

    <p><b>${nameDemandante}</b>, mayor de edad, Identificado con <b>${tipoIdDte}</b> No <b>${IdDemandante}</b>, 
    con domicilio y residencia principal en la ${ciudad}, por medio del presente escrito 
    me permito manifestar a usted muy respetuosamente que confiero PODER ESPECIAL AMPLIO Y SUFICIENTE al Dr 
    <b>${NombreAbogado = NombreAbogado.toUpperCase()}</b>, Identificado con <b>${idAbogado = idAbogado.toUpperCase()}</b>
    No <b>${idNumAbogado}</b>, Abogado en ejercicio y portador de la tarjeta profesional No <b>${tp}</b> expedida por el Consejo Superior de la Judicatura, 
    para que en mi nombre y representación inicie, continue y lleve hasta su culminación PROCESO <b>${Proceso}</b>  <b>${EspecialidadProceso}</b>.</p>
    <br>
    <p>Mi apoderado cuenta con las facultades inherentes para el ejercicio del presente poder tales como conciliar,
    sustituir, transigir, recibir, desistir, suscribir, reasumir, interponer los recursos de Ley, las descritas
    en los artículos 75 y 77 del Código General del Proceso.</p> 
    <br>
    <p>Sírvase señor Juez, reconocerle personería adjetiva para actuar al Dr. <b>${NombreAbogado}</b> en los términos y los fines aquí señalados.</p> 
    <br>
    Atentamente,      
    <br>
    <p><b>${nameDemandante}</b></p>
    <p><b>${tipoIdDte}</b> No <b>${IdDemandante}</b></p>
    <p><b>${EmailDte}</b></p>
    <br>    
    <p>Acepto,</p>  
    <br>
    <p><b>${NombreAbogado}</b></p>
    <p><b>${idAbogado}</b> No ${idNumAbogado}</b></p>	
    <p><b>${tp} del C.S. de la J.</p> </b> 
    <p><b>${Correo = document.getElementById('correoAbogado').value}</b></p> 
    </div>`    
       
    return document.getElementById('mostrarDatos').innerHTML = poder;
    
}

document.getElementById("sendButton").addEventListener("click", function(event){
    event.preventDefault()
    document.getElementById('pdf').className = 'decargarShow'
});
