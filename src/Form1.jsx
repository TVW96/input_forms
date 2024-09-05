import React from 'react'

function Form1() {
    return (
        <div>
            <h1>Common HTML Form</h1>
            <form style={{ border: "2px solid white", padding: "15px", paddingTop: "25px", paddingBottom: "25px" }}>
                <label for="username">Username:</label><br />
                <input type="text" id="username" name="username" /><br />
                <label for="pwd">Password:</label><br />
                <input type="password" id="pwd" name="pwd" />
            </form>
        </div>
    )
}

export default Form1