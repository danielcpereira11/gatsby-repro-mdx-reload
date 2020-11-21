import React, { useState } from "react"
import Select, { ValueType } from "react-select"
import Alert from "react-bootstrap/Alert"
import Collapse from "react-bootstrap/Collapse"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { formStyles } from "@styles/components/forms/form.styles"

const selectOptions = [
  { value: "Account", label: "Account" },
  { value: "Getting started", label: "Getting started" },
  { value: "Billing", label: "Billing" },
  { value: "Sales", label: "Sales" },
  { value: "Support", label: "Support" },
  { value: "Other", label: "Other" },
]

export const ContactPageForm = () => {
  type OptionType = { label: string; value: string }

  const [formMessage, setFormMessage] = useState("")
  const [hasError, setError] = useState(false)

  const encode = (data: Record<string, string | number | boolean>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
        topic: "",
      }}
      onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-page-form", ...values }),
        })
          .then(() => {
            setFormMessage("Your form has been submitted successfully.")
            setError(false)
            actions.resetForm()
          })
          .catch(() => {
            setFormMessage(
              "An error occured while submitting your form. Please try again."
            )
            setError(true)
          })
          .finally(() => {
            setTimeout(() => setFormMessage(""), 4000)
            actions.setSubmitting(false)
          })
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("This field is required"),
        message: Yup.string().required("This field is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("This field is required"),
        topic: Yup.string().required("This field is required"),
      })}
    >
      {props => (
        <>
          <Collapse in={!!formMessage.length}>
            <div>
              <Alert variant={hasError ? "danger" : "success"}>
                {formMessage}
              </Alert>
            </div>
          </Collapse>
          <Form
            name="contact-page-form"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            css={formStyles}
          >
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="you@example.com" />
            <ErrorMessage
              name="email"
              component="p"
              className="alert alert-danger"
            />

            <label htmlFor="name">Name</label>
            <Field type="text" name="name" placeholder="John Doe" />
            <ErrorMessage
              name="name"
              component="p"
              className="alert alert-danger"
            />

            <label htmlFor="topic">Topic</label>
            <Select
              options={selectOptions}
              classNamePrefix="select-component"
              placeholder="ex. System requirements"
              name="topic"
              onChange={(selectedOption: ValueType<OptionType>) => {
                const value = (selectedOption as OptionType).value
                props.setFieldValue("topic", value)
              }}
              value={
                props.values.topic
                  ? { label: props.values.topic, value: props.values.topic }
                  : null
              }
            />
            <ErrorMessage
              name="topic"
              component="p"
              className="alert alert-danger"
            />

            <label htmlFor="message">Name</label>
            <Field
              type="text"
              as="textarea"
              name="message"
              placeholder="Let us know"
            />
            <ErrorMessage
              name="message"
              component="p"
              className="alert alert-danger"
            />

            <input type="submit" value="Submit" />
          </Form>
        </>
      )}
    </Formik>
  )
}
