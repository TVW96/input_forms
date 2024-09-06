import React from 'react'

function Form1() {
    return (
        <div >
            <h1>Common HTML Form</h1>
            <fieldset >
                <legend>User Login/ Your Information</legend>
                <label for="username">Username:</label><br />
                <input type="text" id="username" name="username" /><br />
                <label for="pwd">Password:</label><br />
                <input type="password" id="pwd" name="pwd" />
            </fieldset>
        </div>
    )
}

export default Form1