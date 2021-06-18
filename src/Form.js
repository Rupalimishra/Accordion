import React from 'react';
import './Pform.css';
const Form = () => {
    return (
        <>
            <div className="form-style">
                <form>
                    <div id="sect1"
                        role="region"
                        aria-labelledby="accordion1id" >
                        <div>
                            <label for="txtFname" className="font-style">Name:</label>
                            <span aria-hidden="true">*</span>
                            <br />
                            <input className="input-style" aria-required="true" id="txtFname" type="text" />
                            <br />
                            <label for="txtEmail" className="font-style">Email:</label>
                            <span aria-hidden="true">*</span>
                            <br />
                            <input className="input-style" aria-required="true" id="txtEmail" type="text" />
                            <br />
                            <label for="txtPhone" className="font-style">Phone:</label>
                            <br />
                            <input className="input-style" id="txtPhone" type="text" />
                            <br />
                            <label for="txtExtension" className="font-style">Extension:</label>
                            <br />
                            <input className="input-style" id="txtExtension" type="text" />
                            <br />
                            <label for="txtCountry" className="font-style">Country:</label>
                            <br />
                            <input className="input-style" id="txtCountry" type="text" />
                            <br />
                            <label for="txtCity1" className="font-style">City/Province:</label>
                            <br />
                            <input className="input-style" id="txtCity1" type="text" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;