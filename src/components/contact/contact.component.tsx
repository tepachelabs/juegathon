import {FC, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {Button} from "../button";
import {ErrorMessage, Form, FormLabel, Input, TextArea} from "../form";
import {H1, H3} from "../typography";

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
    reset,
    formState: {errors}
  } = useForm<FormInput>()

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string|undefined>(undefined)

  const onSubmit: SubmitHandler<FormInput> = async (data, _event) => {
    const { name, email, message } = data;

    setLoading(true);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!response.ok) {
      setSubmitted(false)
      setErrorMessage('Hubo un error al enviar el mensaje, por favor intenta de nuevo')
    } else {
      reset();
      setErrorMessage(undefined)
      setSubmitted(true)
    }

    setLoading(false)
  };

  const form = (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Nombre*</FormLabel>
      <Input type="text" id="name" {...register("name", {required: true})}/>
      {errors.name && <ErrorMessage>El nombre es requerido</ErrorMessage>}

      <FormLabel htmlFor="email">Correo*</FormLabel>
      <Input type="email" id="email" {...register("email", {
        required: true,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "Email invalido"
        }
      })}/>
      {errors.email && <ErrorMessage>El email es requerido ó invalido</ErrorMessage>}

      <FormLabel htmlFor="message">Mensaje*</FormLabel>
      <TextArea id="message" {...register("message", {required: true})} rows={7}/>
      {errors.message && <ErrorMessage>El mensaje es requerido</ErrorMessage>}

      {loading
        ? <Button className="btn-lg px-4 me-md-2" secondary >Cargando...</Button>
        : <Button className="btn-lg px-4 me-md-2" type="submit" onClick={handleSubmit(onSubmit)}>Enviar</Button>}

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Form>
  )

  const submittedComponent = (
    <>
      <H3>Gracias por tu mensaje, nos pondremos en contacto pronto!</H3>
    </>
  )

  return (
    <div className={`row ${className}`}>
      <H1>Contactanos</H1>
      {submitted ? submittedComponent : form}
    </div>
  )
}
