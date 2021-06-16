import React from 'react';
import './Pform.css';
const BillForm = () => {
    return (
        <>
            <div>
                <div id="sect2"
                    role="region"
                    aria-labelledby="accordion2id">
                    <form>
                        <label className="font-style" for="txtAddress1">Address 1:</label>
                        <br />
                        <input className="input-style" required id="txtAddress1" type="text" />
                        <br />
                        <label className="font-style" for="txtAddress2">Address 2:</label>
                        <br />
                        <input className="input-style" required id="txtAddress2" type="text" />
                        <br />
                        <label className="font-style" for="txtCity">City:</label>
                        <br />
                        <input className="input-style" required id="txtCity" type="text" />
                        <br />
                        <label for="txtState">State:</label>
                        <br />
                        <input className="font-style" className="input-style" required id="txtState" type="text" />
                        <br />
                        <label className="font-style" for="txtZipcode">Zip Code:</label>
                        <br />
                        <input className="input-style" required id="txtZipcode" type="text" />

                    </form>
                </div>
            </div>
        </>
    )
}

export default BillForm;