import {FC, Fragment} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

interface ContactProps {
  className?: string;
}

interface FormInput {
  name: string
  email: string
  message: string
}

export const Contact: FC<ContactProps> = (props) => {

  const {className} = props

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = data => console.log(data);

  return (
    <div className={`row ${className}`}>
      <h1>Contactanos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" {...register("name", { required: true })}/>
        {errors.name && <span>El nombre es requerido</span>}

        <label htmlFor="email">Correo</label>
        <input type="email" id="email" {...register("email", { required: true })}/>
        {errors.email && <span>El email es requerido</span>}

        <label htmlFor="message">Mensaje</label>
        <textarea id="message" {...register("message", { required: true })}/>
        {errors.message && <span>El mensaje es requerido</span>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
