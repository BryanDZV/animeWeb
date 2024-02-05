import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Formulario() {
  const {
    handleSubmit, //para utilizaar en el evento onsubmit pasarle como argumento la funcion
    //que quieres que se ejecute cuando se envia el formulario
    //y ejecuta si esta validado el formulario
    //si esta ok envia un paramentro a la funcion que se ejecuta
    // con los datos: data =a todos los datos que hayas puesto en register

    watch, //te permite recibir campos en un momento determinado, puede que necesites algun valor
    // en dosubmite antes de que se ejecute o depues
    //ej.aparece algo cuando el usauario escribe algo determindo
    //1paso=useEffect 2paso=poner watch
    setValue,//te permite dar un nuevo valor
    register,
    formState: { errors }, //puedo ver los errores
  } = useForm({defaultValues:{name:"abel"}});//default para dar valor por defecto algo parecido al place holder pero no un holder 
                                            //que puedes editar pornerlos antes de escribir por ejemplo
  console.log(watch());
  console.log(watch("name"));

  //aqui en data estan los datos con name y age
  const doSubmit = (data) => {
    console.log(data);

    // aqui le darias un nuevo valor a data si lagun momento previo o sobreescribir
    //pones la clave=isnew y el valor nuevo true
    if(watch("name")==="pepes"){
      setValue("name","joses")
    }
    
    
  };
  // useEffect(() => {}, [watch("name")]); //cada vez que alguien escriba en name se ejecuta esta funcion
    //ejem si name =xxx tienes 2 puntos
    //2 ciruclos uno te muestra algo y el otro otra cosa condicional
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(doSubmit)}>
      {/* los dos estan registrados en la misma propiedad is New*/}
      <label>
        soy nuevo
        <input type="radio" value="true" {...register("isNew")}></input>
      </label>

      <label>
        ya estuve aqui
        <input type="radio" value="false " {...register("isNew")}></input>
      </label>

      {/* nombre de como lo registras input pudes poner requisitos */}
      <input
        type="text"
        {...register("name", {
          required: true,
          minLength: { value: 5, message: "minimo 5 caracteres" },
        })}
      />
      {errors.name &&
        (errors.name.message ? errors.name.message : "el camppo se requiere")}

      <input
        type="number"
        {...register("age", {
          required: true,
          minLength: { value: 4, message: "minimo 4 caracteres" },
        })}
      />

      {/* si yo quiero que algo se visualize envase a si es nuevo uso watch condicional como aqui */}
      {watch("isNew") === "true" && (
        <labe>
          Dame tu Nickname<input type="text"></input>
        </labe>
      )}

      <button>ENVIAR</button>
    </form>
  );
}
