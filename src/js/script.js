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
    <p>JUEZ ${Juzgado = Juzgado.toUpperCase()} REPARTO </p>
    <p>${ciudad = ciudad.toUpperCase()}.</p>  
    <p>E.&nbsp;&nbsp;S.&nbsp;&nbsp;D.</p>      
    <br>
    <p>PROCESO: ${Proceso = Proceso.toUpperCase()}  ${EspecialidadProceso = EspecialidadProceso.toUpperCase()}</p>      
    <p>DEMANDANTE: ${nameDemandante = nameDemandante.toUpperCase()}</p>
    <p>IDENTIFICACION DEMANDANTE: ${tipoIdDte = tipoIdDte.toUpperCase()} No ${IdDemandante}</p>
    <p>DEMANDADO: ${nameDemandado = nameDemandado.toUpperCase()}</p>
    <p>IDENTIFICACION DEMANDADO: ${tipoIdDdo = tipoIdDdo.toUpperCase()} No ${IdDemandado}</p>   
    <p>REFERENCIA: PODER</p> 
    <br>

    <p>${nameDemandante}, mayor de edad, Identificado con ${tipoIdDte} No ${IdDemandante}, 
    con domicilio y residencia principal en la ${ciudad}, por medio del presente escrito 
    me permito manifestar a usted muy respetuosamente que confiero PODER ESPECIAL AMPLIO Y SUFICIENTE al Dr 
    ${NombreAbogado = NombreAbogado.toUpperCase()}, Identificado con ${idAbogado = idAbogado.toUpperCase()} No ${idNumAbogado}, Abogado en ejercicio y portador
    de la tarjeta profesional No ${tp} expedida por el Consejo Superior de la Judicatura, para que en mi nombre
    y representación inicie, continue y lleve hasta su culminación PROCESO ${Proceso} ${EspecialidadProceso}.</p>
    <br>
    <p>Mi apoderado cuenta con las facultades inherentes para el ejercicio del presente poder tales como conciliar,
    sustituir, transigir, recibir, desistir, suscribir, reasumir, interponer los recursos de Ley, las descritas
    en los artículos 75 y 77 del Código General del Proceso.</p> 
    <br>
    <p>Sírvase señor Juez, reconocerle personería adjetiva para actuar al Dr. ${NombreAbogado} en los términos y los fines aquí señalados.</p> 
    <br>
    Atentamente,      
    <br>
    <p>${nameDemandante}</p>
    <p>${tipoIdDte} No ${IdDemandante}</p>
    <p>${EmailDte}</p>
    <br>    
    <p>Acepto,</p>  
    <br>
    <p>${NombreAbogado}</p>
    <p>${idAbogado} No ${idNumAbogado}</p>	
    <p>${tp} del C.S. de la J.</p>  
    <p>${Correo = document.getElementById('correoAbogado').value}</p> 
    </div>`

    
    alert('Esta Funcionando');
    return document.getElementById('mostrarDatos').innerHTML = poder;

}

document.getElementById("sendButton").addEventListener("click", function(event){
    event.preventDefault()
});