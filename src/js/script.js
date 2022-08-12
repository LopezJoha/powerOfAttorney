const formulario = document.getElementById('formPoder');
const inputs = document.querySelectorAll('#formPoder input');
const selects = document.querySelectorAll('#formPoder select')

let PoderGeneral;
let Juzgado; let ciudad; let Proceso; let EspecialidadProceso; 
let nameDemandante; let tipoIdDte; let IdDemandante; let EmailDte; 
let nameDemandado; let tipoIdDdo; let IdDemandado; let EmailDdo; 
let NombreAbogado; let idAbogado; let idNumAbogado; let tp; let EmailAbogado;

function mostrarPoder(){
    document.getElementById('modal').innerHTML = PoderGeneral;
}
const Capturar =() =>{         
    poder = `<div class='poder__Wrapper '>
        <p><b>JUEZ ${Juzgado} REPARTO</b></p><p>${ciudad}.</p><p>E. &nbsp; S.&nbsp; D.</p>  
        <p>PROCESO: <b>${Proceso}  ${EspecialidadProceso}</b></p>      
        <p>DEMANDANTE:<b>${nameDemandante}</b></p>
        <p>IDENTIFICACION DEMANDANTE: <b>${tipoIdDte} No ${IdDemandante}</b></p>
        <p>DEMANDADO: <b>${nameDemandado}</b></p>
        <p>IDENTIFICACION DEMANDADO: <b>${tipoIdDdo} No ${IdDemandado}</b></p>   
        <p>REFERENCIA: <b>PODER</b></p> 
        
        <p><b>${nameDemandante}</b>, mayor de edad, Identificado con <b>${tipoIdDte}</b> No <b>${IdDemandante}</b>, 
        con domicilio y residencia principal en la ${ciudad}, por medio del presente escrito 
        me permito manifestar a usted muy respetuosamente que confiero PODER ESPECIAL AMPLIO Y SUFICIENTE al Dr 
        <b>${NombreAbogado}</b>, Identificado con <b>${idAbogado}</b>
        No <b>${idNumAbogado}</b>, Abogado en ejercicio y portador de la tarjeta profesional No <b>${tp}</b> expedida por el Consejo Superior de la Judicatura, 
        para que en mi nombre y representación inicie, continue y lleve hasta su culminación PROCESO <b>${Proceso}</b>  <b>${EspecialidadProceso}</b>.</p>
        
        <p>Mi apoderado cuenta con las facultades inherentes para el ejercicio del presente poder tales como conciliar,
        sustituir, transigir, recibir, desistir, suscribir, reasumir, interponer los recursos de Ley, las descritas
        en los artículos 75 y 77 del Código General del Proceso.</p> 
        
        <p>Sírvase señor Juez, reconocerle personería adjetiva para actuar al Dr. <b>${NombreAbogado}</b> en los términos y los fines aquí señalados.</p> 
        
        Atentamente,      
        
        <p><b>${nameDemandante}</b></p>
        <p><b>${tipoIdDte}</b> No <b>${IdDemandante}</b></p>
        <p><b>${EmailDte}</b></p>
            
        <p>Acepto,</p>  
        
        <p><b>${NombreAbogado}</b></p>
        <p><b>${idAbogado}</b> No ${idNumAbogado}</b></p>	
        <p><b>${tp} del C.S. de la J.</p> </b> 
        <p><b>${EmailAbogado}</b></p> 
    </div>
    `   
    PoderGeneral = poder

};

// document.getElementById("sendButton").addEventListener("click", function(e){
//     e.preventDefault()
//     document.getElementById('pdf').className = 'decargarShow';
// });

const expresiones = {
	texto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	id: /^\d{6,10}$/, 
    tp: /^\d{3,6}$/ , 
    vacio : /^[^]+$/
};

const campos = {
    "grupoJuris":false, 
    "grupoProceso": false,
    "grupoespProceso": false,
    "grupociudad": false,
    "gruponombreDte": false,
    "grupoidNumDte": false,
    "grupocorreoDte": false,
    "gruponombreDdo": false,
    "grupoidNumDdo": false,
    "grupocorreoDdo": false,
    "gruponombreAbogado": false,
    "grupoidNumAbogado": false,
    "grupoTP": false,
    "grupocorreoAbogado": false,
    "idDte": false,      
    "idDdo": false,      
    "idAbogado": false   
};


const validarCampo = (expresion, input, idgrupo) => {
    if(expresion.test(input.value)){
        document.getElementById(input.id).classList.add('InputCorrect')                         
        document.getElementById(input.id).classList.remove('InputWrong')        
        document.querySelector(`#${idgrupo} .wrongText`).classList.remove('wrongText-activo');
        campos[idgrupo] = true; 
    } else {
        document.getElementById(input.id).classList.add('InputWrong')
        document.querySelector(`#${idgrupo} .wrongText`).classList.add('wrongText-activo');
        campos[idgrupo] = false; 
    }
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "jurisdiccion":
            idgrupo="grupoJuris" 
            validarCampo(expresiones.texto, e.target, idgrupo)
            Juzgado = e.target.value       
        break;   
        
        case "proceso":            
            idgrupo="grupoProceso"
            validarCampo(expresiones.texto, e.target, idgrupo)
            Proceso = e.target.value   
        break;    
        
        case "espProceso":             
            idgrupo="grupoespProceso"
            validarCampo(expresiones.texto, e.target, idgrupo)  
            EspecialidadProceso= e.target.value
        break;
        
        case "ciudad": 
            idgrupo="grupociudad"
            validarCampo(expresiones.texto, e.target, idgrupo)
            ciudad = e.target.value  
        break;
        
        case "nombreDte":            
            idgrupo="gruponombreDte"
            validarCampo(expresiones.texto, e.target, idgrupo)
            nameDemandante = e.target.value  
        break;        
            
        case "idNumDte":            
            idgrupo="grupoidNumDte"
            validarCampo(expresiones.id, e.target, idgrupo)  
            IdDemandante = e.target.value
        break;
        
        case "correoDte":             
            idgrupo="grupocorreoDte"
            validarCampo(expresiones.correo, e.target, idgrupo) 
            EmailDte= e.target.value 
        break;    
        
        case "nombreDdo":            
            idgrupo="gruponombreDdo"
            validarCampo(expresiones.texto, e.target, idgrupo)
            nameDemandado= e.target.value   
        break;
        
        case "idNumDdo":            
            idgrupo="grupoidNumDdo"
            validarCampo(expresiones.id, e.target, idgrupo) 
            IdDemandado = e.target.value  
        break;
        
        case "correoDdo":            
            idgrupo="grupocorreoDdo"
            validarCampo(expresiones.correo, e.target, idgrupo)
            EmailDdo = e.target.value   
        break;    
        
        case "nombreAbogado":            
            idgrupo="gruponombreAbogado"
            validarCampo(expresiones.texto, e.target, idgrupo)
            NombreAbogado = e.target.value  
        break;
               
        case "idNumAbogado":
            
            idgrupo="grupoidNumAbogado"
            validarCampo(expresiones.id, e.target, idgrupo)
            idNumAbogado = e.target.value  
        break;
        
        case "tarjetaProfesional":
            tp= e.target.value            
            validarCampo(expresiones.tp, e.target, idgrupo) 
            idgrupo="grupoTP" 
        break;
        
        case "correoAbogado":            
            idgrupo="grupocorreoAbogado"
            validarCampo(expresiones.correo, e.target, idgrupo) 
            EmailAbogado= e.target.value
              
        break;
    }     
};

const Mayus = (e)=>{
    let campo = document.getElementById(e.target.id)
    if(campo.type === 'text'){        
        campo.value = campo.value.toUpperCase();        
    }      
};

const validarSelect = (e)=>{      
    let selection = document.getElementById(e.target.id);    
    let seleccionado = selection.options[selection.selectedIndex].value;
    
    if (seleccionado === 0 || seleccionado === ""){        
        document.getElementById(e.target.id).classList.add('selectWrong')
    }
    else {
        document.getElementById(e.target.id).classList.remove('selectWrong')
        document.getElementById(e.target.id).classList.add('selectCorrect')
        setTimeout(() => {
            document.getElementById(e.target.id).classList.remove('selectCorrect')}, 5000);

        switch(e.target.name) {
            case "idDte":            
                tipoIdDte = e.target.value
                campos.idDte = true 
            break

            case "idDdo":             
                tipoIdDdo = e.target.value
                campos.idDdo = true
            break 

            case "idAbogado":           
                idAbogado = e.target.value
                campos.idAbogado = true
            break
        };
    };

};


inputs.forEach((input) =>{ 
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario); 
    input.addEventListener('change', Capturar)
    input.addEventListener('change', Mayus);      
});

selects.forEach((select)=>{
    select.addEventListener('change', validarSelect)
    select.addEventListener('mouseleave', validarSelect)
});


formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    if(campos.grupoJuris && 
        campos.grupoProceso &&
        campos.grupoespProceso &&
        campos.grupociudad &&
        campos.gruponombreDte &&
        campos.grupoidNumDte &&
        campos.grupocorreoDte &&
        campos.gruponombreDdo &&
        campos.grupoidNumDdo &&
        campos.grupocorreoDdo &&
        campos.gruponombreAbogado &&
        campos.grupoidNumAbogado &&
        campos.grupoTP &&
        campos.grupocorreoAbogado &&
        campos.idDte && 
        campos.idDdo &&
        campos.idAbogado){
            
            document.getElementById('succesMessege').classList.add('succesMessege-activo');
            formulario.reset();
            
		    setTimeout(() => {
			document.getElementById('succesMessege').classList.remove('succesMessege-activo');
		    }, 3000);

            mostrarPoder();
            Capturar();
            // document.getElementById("mostrarDatos").style.visibility="visible";
            document.getElementById("mostrarDatos").style.display="flex";
        }
        else {
            document.getElementById('wrongMessege').classList.add('wrongMessege-activo');
            setTimeout(() => {
                document.getElementById('wrongMessege').classList.remove('wrongMessege-activo');
                }, 5000);  
        };
    }
);


