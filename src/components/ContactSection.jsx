import React, { Component } from "react"

import Title from "../components/Title"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const initialState = {
  name: "",
  email: "",
  subject: "",
  textarea: "",
  nameError: "",
  emailError: "",
  subjectError: "",
  textareaError: "",
}

export default class ContactSection extends Component {
  state = initialState

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })

    e.preventDefault()
  }

  validate = () => {
    let nameError = ""
    let emailError = ""
    let subjectError = ""
    let textareaError = ""
    // let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank"
    }

    if (!this.state.textarea) {
      textareaError = "Message cannot be blank"
    }
    if (!this.state.subject) {
      subjectError = "Message cannot be blank"
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email"
    }

    if (emailError || nameError || subjectError || textareaError) {
      this.setState({ emailError, nameError, subjectError, textareaError })
      return false
    }

    return true
  }

  handleSubmit = e => {
    e.preventDefault()

    const isValid = this.validate()
    if (isValid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "Message", ...this.state }),
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error))
      // clear form
      this.setState(initialState)
    }
  }
  render() {
    const { name, email, subject, textarea } = this.state
    return (
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-content">
            <Title upperTitle="Get in touch" lowerTitle="Drop us a message" />

            <div className="row">
              <div className="col-md-12">
                <div className="comment-form">
                  <form
                    onSubmit={this.handleSubmit}
                    id="contact_form"
                    name="Message"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="contact-info">
                      <input
                        className={
                          this.state.nameError.length > 0
                            ? "name mr30 error"
                            : "name mr30"
                        }
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Name*"
                      />
                    </div>
                    <div className="contact-info">
                      <input
                        className={
                          this.state.emailError.length > 0
                            ? "email error"
                            : "email"
                        }
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Email*"
                      />
                    </div>
                    <div className="contact-info-1">
                      <input
                        className={
                          this.state.subjectError.length > 0
                            ? "name error"
                            : "name"
                        }
                        name="subject"
                        value={subject}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="contact-info">
                      <textarea
                        id="message"
                        className={
                          this.state.textareaError.length > 0 ? "error" : null
                        }
                        name="textarea"
                        value={textarea}
                        onChange={this.handleChange}
                        placeholder="Message"
                        rows="7"
                        cols="30"
                      ></textarea>
                    </div>
                    <div className="submit-btn text-center mt20">
                      <button type="submit" value="Submit">
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
