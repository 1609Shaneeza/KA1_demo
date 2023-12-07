import Cat1 from "../assets/Cat1.jpg"
function ContactUs() {
    return(
        <>
        <h1>Contact Us</h1>
        <br></br>
        <div className="contact">
            <img src={Cat1} width="30%" />
            <p>Name: Orange Cat</p>
            <p>Contact: 07893235123</p>
            <p>Email: 1234Contact@gmail.com</p>
        </div>
        </>

    )
}

export default ContactUs;