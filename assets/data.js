let Juzgado; 
let Proceso;
let nameDemandante;
let tipoIdDte;  
let IdDemandante;
let EmailDte; 
let nameDemandado;
let tipoIdDdo;  
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
let poder; 



// let poder = `<p>JUEZ ${Juzgado} REPARTO BOGOTA D.C. 
//         E. 	 	S. 	 	D.         

//         PROCESO: ${Proceso}        
//         DEMANDANTE: ${nameDemandante}
//         IDENTIFICACION DEMANDANTE: ${tipoIdDte} No ${IdDemandante}
//         DEMANDADO: ${nameDemandado}
//         IDENTIFICACION DEMANDADO: ${tipoIdDdo} No ${IdDemandado}   
//         REFERENCIA:  PODER  
        
//         ${nameDemandante}, mayor de edad, Identificada con cedula de ciudadanía No ${IdDemandante}, 
//         con domicilio y residencia principal en la ciudad de Bogotá D.C., por medio del presente escrito 
//         me permito manifestar a usted muy respetuosamente que confiero PODER ESPECIAL AMPLIO Y SUFICIENTE al Dr.
//         ${NombreAbogado}, Identificado con ${tipoIdDte} No ${IdAbogado}, Abogado en ejercicio y portador
//         de la tarjeta profesional No ${TarjProf} expedida por el Consejo Superior de la Judicatura, para que en mi nombre
//         y representación inicie, continue y lleve hasta su culminación PROCESO ${Proceso}.

//         Mi apoderada cuenta con las facultades inherentes para el ejercicio del presente poder tales como conciliar,
//         sustituir, transigir, recibir, desistir, suscribir, reasumir, interponer los recursos de Ley, las descritas
//         en los artículos 75 y 77 del Código General del Proceso. 
        
//         Sírvase Doctor(a), reconocerle personería adjetiva para actuar al Dr. ${NombreAbogado} en los términos y los fines aquí señalados. 
        
//         Atentamente,  
        

//         ${nameDemandante}
//         ${tipoIdDte} No ${IdDemandante}
//         ${EmailDte}
        
        
//         Acepto,  
        
        
//         ${NombreAbogado}
//         ${IdAbogado}	
//         ${TarjProf} del C.S. de la J.  
//         ${CorreoAbog} 
//         </p>`