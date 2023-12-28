import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {Button} from "../button";
import {ErrorMessage, Form, FormLabel, Input, TextArea} from "../form";
import {H1} from "../typography";

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

  const onSubmit: SubmitHandler<FormInput> = (data, event) => {
    console.log(data)
  };

  return (
    <div className={`row ${className}`}>
      <H1>Contactanos</H1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="name">Nombre</FormLabel>
        <Input type="text" id="name" {...register("name", {required: true})}/>
        {errors.name && <ErrorMessage>El nombre es requerido</ErrorMessage>}

        <FormLabel htmlFor="email">Correo</FormLabel>
        <Input type="email" id="email" {...register("email", {required: true})}/>
        {errors.email && <ErrorMessage>El email es requerido</ErrorMessage>}

        <FormLabel htmlFor="message">Mensaje</FormLabel>
        <TextArea id="message" {...register("message", {required: true})} rows={7}/>
        {errors.message && <ErrorMessage>El mensaje es requerido</ErrorMessage>}

        <Button className="btn-lg px-4 me-md-2" type="submit" onClick={handleSubmit(onSubmit)}>Enviar</Button>
      </Form>
    </div>
  )
}
