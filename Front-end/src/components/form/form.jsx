import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
     <div className="w-full max-w-md space-y-8">
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Formulario</h2>
      <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> Nombre completo</label>
          <input
            type="text"
            {...register("nombre", {
              required: true,
              maxLength: 20,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p>complete su nombre por favor</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p>su nombre es demaciado largo para este campo</p>
          )}
        </div>
        <div>
          <label>correo Electronico</label>
          <input
            type="email"
            {...register("email", {
              pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/i,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p>
              el campo que intentas completar no pertenece a un mail en servicio
            </p>
          )}
        </div>
        <div>
          <label> Contraseña</label>
          <input
            type="password"
            {...register("password", {
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/i,
            })}
          />
          {errors.password?.type === "pattern" && (
            <p>Su contraseña no cumple con lo requerido</p>
          )}
        </div>
        <div>
          <label> Confirmar contraseña</label>
          <input
            type="password"
            {...register("confipass", {
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/i,
            })}
          />
          {errors.confipass?.type === "pattern" &&
            errors.confipass?.type !== "password" && (
              <p>Su contraseña no coincide</p>
            )}
        </div>
        <div>
          <input type="submit" value="registrate" />
        </div>
      </form>
      </div>
    </div>
  );
};

export default Form;
