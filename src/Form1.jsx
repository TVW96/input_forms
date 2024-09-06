import React from 'react'

function Form1() {
    return (
        <div >

            <h1>Common HTML Form Elements</h1>

            <fieldset className='border rounded-3 p-3' >
                <legend className="float-none w-auto px-3">User Login/ Your Information</legend>
                <div>
                    <label for="username">Username:</label><br />
                    <input type="text" id="username" name="username" /><br />
                </div>
                <div>
                    <label for="password">Password:</label><br />
                    <input type="password" id="password" name="pwd" />
                </div>
                <div>
                    <input type="text" name='firstname' placeholder='firstname' required />
                    <input type="text" name='lastname' placeholder='lastname' required />
                </div>
            </fieldset>

{/* multi-line text input control form */}
            <textarea name='feedback' rows='5' col='30' placeholder='your feedback here.'>

            </textarea>
        </div>
    )
}

export default Form1