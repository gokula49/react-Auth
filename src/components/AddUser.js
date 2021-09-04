import React from "react";
import  emailjs  from "emailjs-com";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function AddUser() {
    return(
       <div>
        <p> You are Successfully Logged in  </p>

        <Router>
        <div>
          <nav>
            <ul>
              
              <li>
                <Link to="/about">Add Employee</Link>
              </li>
              
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
        
          </Switch>
        </div>
      </Router>
      </div>  
    );
};

function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_nyti9jm', 'template_7xb6hau', e.target, 'user_oSwQLnW0W4Yuz7xDPE1OJ')                 
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

// user_oSwQLnW0W4Yuz7xDPE1OJ

function About() {
    return (
        <div>
        <div className="container">
        <form onSubmit={sendEmail}>
                <div>
                    <div>
                        <input type="text"  placeholder="Name" name="name"/>
                    </div>
                    <div >
                        <input type="email"  placeholder="Email Address" name="reply_to"/>
                    </div>
                    
                    <div>
                        <textarea  id="" cols="30" rows="8" placeholder="Company Role" name="message"></textarea>
                    </div>
                    <div>
                        <input type="submit"  value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
  };

export default AddUser;