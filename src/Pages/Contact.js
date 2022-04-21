import React from 'react'

const Contact = () => {
    return (
        <div>
            <form className = "contactform">
            <h1>Contact Me</h1>
            <input className = "contactinput" type = "text" id = "fname" name = "firstname" placeholder= "First Name" required />
            <input className = "contactinput" type = "text" id = "lname" name = "lastname" placeholder= "Last Name" required />
            <input className = "contactinput" type = "email" id = "email" name = "email" placeholder= "Email" required />
            <input className = "contactinput" type="tel" id="phone" name="phone" placeholder="123-456-789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
            <input id = "submitbtn" type = "submit"/>
            </form>
        </div>
    )
}

export default Contact
