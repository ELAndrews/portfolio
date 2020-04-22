import React, { useState } from "react";
import { Container, H1 } from "../assets/styling/components/globalStyling";
import { ContactContainer, FormContainer, SubmissionContainer } from "../assets/styling/components/contactStyling";
import * as Yup from "yup";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })



  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(form)

    const response = await fetch("/api/message", {
      method: 'POST',
      mode: "cors",
      body: JSON.stringify(form)
    })

    console.log(response)


  }

  // const schema = Yup.object().shape({
  //   name: Yup.string().required("Please enter your name"),
  //   email: Yup.string()
  //     .email("Please use a valid email address.")
  //     .required("Email address is required."),
  //   subject: Yup.string("Send without a subject?").required("Please provide a subject"),
  //   message: Yup.string().min(10, "Please enter your message.").required("A message is required")
  // });

  return (
    <Container>
      <H1>CONTACT</H1>
      <ContactContainer>
        <FormContainer>
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" className="formInput" onChange={handleChange} />
            <input type="text" placeholder="Email" name="email" className="formInput" onChange={handleChange} />
            <input type="text" placeholder="Subject" name="subject" className="formInput" onChange={handleChange} />
            <input
              placeholder="Message"
              type="text"
              as="textarea"
              rows="5"
              name="message"
              className="formInput message"
              onChange={handleChange} />
            <input type="submit" name="submit" className="submit" />
          </form>
        </FormContainer>

        <SubmissionContainer>
          <p>Thank you for submitting your message.</p>
          <p>I will be in contact as soon as possible.</p>
        </SubmissionContainer>
      </ContactContainer>
    </Container>
  );
}
