import React from "react";
import { FaAngleDown } from "react-icons/fa";
import './Pform.css';
import BillForm from "./BillForm";
import Form from "./Form";
import ShippForm from "./ShippForm";




class Pform extends React.Component {
  state = {
    showMessage: true,
    showAddress: false,
    showBillAdd: false,

  };

  onButtonClickHandler(key) {
    
    console.log(key);
    if (key === 'showMessage') {
      this.setState({
        showMessage: true,
        showBillAdd: false,
        showAddress: false
      });
    };
    if (key === 'showBillAdd') {
      this.setState({
        showBillAdd: true,
        showMessage: false,
        showAddress: false
      });
    }
    if (key === 'showAddress') {
      this.setState({
        showAddress: true,
        showBillAdd: false,
        showMessage: false
      });
    }
  }

  render() {
    const { showMessage, showBillAdd, showAddress } = this.state;
    return (
      <div id="accordionGroup" className="Accordion">
        <div className="Accordion-trigger">

          <button
            aria-expanded={showMessage}
            className="Accordion-button"
            aria-controls="sect1"
            id="accordion1id"
            onClick={this.onButtonClickHandler.bind(this, 'showMessage')}
          >Personal Information</button>
          <span className="Accordion-icon"><FaAngleDown /></span>
          <hr className="line-style"></hr>
          {showMessage && <Form />}
        </div>

        <div className="Accordion-trigger" >

          <button aria-controls="sect2"
            aria-expanded={showBillAdd}
            id="accordion2id"
            className="Accordion-button"
            onClick={this.onButtonClickHandler.bind(this, 'showBillAdd')}
          >Billing Address</button>
          <span className="Accordion-icon"><FaAngleDown /></span>
          <hr className="line-style"></hr>
          {showBillAdd && <BillForm />}

        </div>
        <br />
        <div className="Accordion-trigger">

          <button
            aria-expanded={showAddress}
            aria-controls="sect3"
            id="accordion3id"
            className="Accordion-button"
            onClick={this.onButtonClickHandler.bind(this, 'showAddress')}
          >Shipping Address</button>
          <span className="Accordion-icon"><FaAngleDown /></span>
          <hr className="line-style"></hr>
          {showAddress && <ShippForm />}
        </div>

      </div>

    );
  }
}
export default Pform;