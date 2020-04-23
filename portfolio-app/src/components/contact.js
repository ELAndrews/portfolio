import React, { useState } from "react";
import { Container, H1 } from "../assets/styling/components/globalStyling";
import { ContactContainer, FormContainer, FormContainer1, SubmissionContainer, LinkContainer, P, Link, BIcon, BText } from "../assets/styling/components/contactStyling";
import * as Yup from "yup";
import axios from "axios";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DraftsIcon from '@material-ui/icons/Drafts';

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
    window.document.getElementById("submit").style.display = "none"
    window.document.getElementById("loading").style.display = "block"

    axios.post("https://portfolio-ela.herokuapp.com/api/message", form)
      .then(res => {
        console.log(res)
        window.document.getElementById("submitSuccess").style.display = "block"
        window.document.getElementById("form").style.display = "none"

      })
      .catch(err => {
        console.log(err.message)
        window.document.getElementById("loading").style.display = "none"
        window.document.getElementById("error").style.display = "block"
        window.document.getElementById("submit").style.display = "block"


      })



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
      <P>If you have any questions or want to work together... Please get in touch!</P>
      <ContactContainer>
        <FormContainer id="form" >
          <form className="form" onSubmit={handleSubmit} >
            <input type="text" name="name" placeholder="Name" className="formInput" onChange={handleChange} />
            <input type="text" placeholder="Email" name="email" className="formInput" onChange={handleChange} />
            <input type="text" placeholder="Subject" name="subject" className="formInput" onChange={handleChange} />
            <textarea
              placeholder="Message"
              rows="5"
              name="message"
              className="formInput message"
              onChange={handleChange} />
            <button value="Submit" id="submit" className="submit" onClick={handleSubmit}>Submit</button>
            <p className="loading" id="loading"></p>
            <p className="error" id="error">Sorry. There was an error submitting your form.</p>
          </form>
        </FormContainer>
        <SubmissionContainer id="submitSuccess">
          <p>Thank you for submitting your message.</p>
          <p>I will be in contact as soon as possible.</p>
        </SubmissionContainer>
        <FormContainer1>
          <LinkContainer>
            <P>OR</P>
            <Link href="mailto:emmaandrewsdev@gmail.com">
              <BIcon className="icon"><DraftsIcon /></BIcon>
              <BText>Email Direct</BText>
            </Link>
            <Link href="https://www.linkedin.com/in/emmaandrewsdev/" target="_blank" rel="noopener noreferrer">
              <BIcon className="icon" ><LinkedInIcon /></BIcon>
              <BText>LinkedIn</BText>
            </Link>
          </LinkContainer>
        </FormContainer1>
      </ContactContainer>
    </Container>
  );
}
