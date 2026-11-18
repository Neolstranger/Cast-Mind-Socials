import Navbar from "./Navbar"
import { Link } from "react-router-dom"
function Contact(){
    return(
        <>
         <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

        <div className="support">
            <div className="chat-support">
            <h2>Chat Support</h2>
            <p>our support team is just a click away.</p>
            <p><a href="https://wa.me/08051429755"></a></p>
            </div>
            <div className="chat-support">
            <h2>Email Support</h2>
            <p>prefer to email? No problem, send us an email and we will get back to you </p>
            <p> Send an Email to oladeleitegbojeeugene@gmail.com</p>
            </div>
        </div>
        </>
    )
}
export default Contact