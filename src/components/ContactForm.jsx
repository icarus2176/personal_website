import React from "react";
import "./ContactForm.css"

export default function Contact(){
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "115969f7-5023-4c62-b049-e8880157ecb2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
    <div className="contactForm">
      <span>{result}</span>
      <form onSubmit={onSubmit}>
        <input type="hidden" name="access_key" value="115969f7-5023-4c62-b049-e8880157ecb2"/>
        <label>Name <br></br>
          <input type="text" name="name" required/>
        </label>
        <label>Email <br></br>
          <input type="email" name="email" required/>
        </label>
        <label>Message <br></br>
          <textarea name="message" required></textarea>
        </label>

        <button type="submit">Send</button>

      </form>

    </div>
  )
}