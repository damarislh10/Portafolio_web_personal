import { Alert, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import "../styles/Contact.css";

export const Contact = () => {
  const [alerSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Must be 1 character or less")
        .required("Campo requerido"),
      email: Yup.string()
        .email("El correo es invalido")
        .required("Correo requerido"),
      message: Yup.string()
        .min(1, "texto mayor a 1 letra")
        .required("Campo requerido"),
    }),
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dn17mdi",
        "template_6ohae8n",
        e.target,
        "S_uHXz27aOI5fE7TF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlertSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setAlertError(true);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div className="container-text">
        <h1 className="title-main">Contactame</h1>
        <p>
          Si deseas puedes comunicarte conmigo por medio del siguiente
          formulario.
        </p>
      </div>
      <div className="contenedor-Formulario">
        <form className="contact-form" onSubmit={sendEmail}>
          {alerSuccess ? (
            <Alert severity="success">Mensaje enviado satisfactoriamente</Alert>
          ) : (
            ""
          )}
          {alertError ? (
            <Alert severity="error">
              Mensaje no enviado satisfactoriamente
            </Alert>
          ) : (
            ""
          )}
          <input type="hidden" name="contact_number" />
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            type="text"
            name="name"
            required
            label="Ingresa tu nombre"
            variant="filled"
            color="secondary"
            value={formik.values.name}
            onChange={formik.handleChange}
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            label="Escribe tu correo"
            type="email"
            name="email"
            required
            variant="filled"
            color="secondary"
            value={formik.values.email}
            onChange={formik.handleChange}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <TextField
            fullWidth
            variant="filled"
            sx={{ mt: 2 }}
            name="message"
            required
            color="secondary"
            label="Escribe tu mensaje"
            value={formik.values.message}
            onChange={formik.handleChange}
            multiline
            rows={4}
            {...formik.getFieldProps("message")}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
          <div className="container-btnContact">
            <Button
              sx={{ mt: 2, mb: 4 }}
              type="submit"
              variant="contained"
              className="buttonWork btnGit"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
