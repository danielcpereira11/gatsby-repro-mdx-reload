import React, { useState } from "react"
import Alert from "react-bootstrap/Alert"
import Collapse from "react-bootstrap/Collapse"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { newsletterFormStyles } from "./newsletter-form.styles"

const NewsletterForm = () => {
  const [formMessage, setFormMessage] = useState("")
  const [hasError, setError] = useState(false)

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={(values, actions) => {
        fetch("/.netlify/functions/subscribe-newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: JSON.stringify({ email: values.email }),
        })
          .then(() => {
            setFormMessage(
              "Your email address has been submitted successfully. Check your inbox for a confirmation link."
            )
            setError(false)
            actions.resetForm()
          })
          .catch(response => {
            setFormMessage(
              response.status === 409
                ? "This email address already exists in our database. Please try again with a different address."
                : "An error occured while submitting your form. Please try again."
            )
            setError(true)
          })
          .finally(() => {
            setTimeout(() => setFormMessage(""), 4000)
            actions.setSubmitting(false)
          })
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("This field is required"),
      })}
    >
      {
        <>
          <Form
            name="newsletter-form"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div css={newsletterFormStyles.formWrapper}>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email address"
                css={newsletterFormStyles.input}
              />
              <button type="submit" css={newsletterFormStyles.submitButton}>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  css={newsletterFormStyles.icon}
                />
              </button>
            </div>
            <ErrorMessage
              name="email"
              component="p"
              className="alert alert-danger"
              css={newsletterFormStyles.alert}
            />
            <Collapse in={!!formMessage.length}>
              <div>
                <Alert
                  variant={hasError ? "danger" : "success"}
                  css={newsletterFormStyles.alert}
                >
                  {formMessage}
                </Alert>
              </div>
            </Collapse>
          </Form>
        </>
      }
    </Formik>
  )
}

export { NewsletterForm }
