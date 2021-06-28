
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import './Pform.css';
import BillForm from "./BillForm";
import Form from "./Form";
import ShippForm from "./ShippForm";
import ButtonComponent from "./ButtonComponent";

class Pform extends React.Component {
  state = {
    ganesha: [
      {
        "id": "accordion1id",
        "buttonType": "showMessage",
        "name": "Personal Information",
        "className": "Accordion-button",
        "flagValue": true,
        "aria": "sect1"

      },
      {
        "id": "accordion2id",
        "buttonType": "showBillAdd",
        "name": "Billing Address",
        "className": "Accordion-button",
        "flagValue": false,
        "aria": "sect2"
      },
      {
        "id": "accordion3id",
        "buttonType": "showAddress",
        "name": "Shipping Address",
        "className": "Accordion-button",
        "flagValue": false,
        "aria": "sect3"
      },
    ]
  };

  getValue = (buttonType) => {
    let temp = this.state.ganesha;
    temp.forEach(element => {
      if (buttonType === element.buttonType) {
        element.flagValue = true;;
      } else {
        element.flagValue = false;
      }
    });
    this.setState({ ganesha: temp });
  }

  render() {
    return (
      <div id="accordiongroup" className="Accordion">
        <div className="Accordion-trigger">
          {
            this.state.ganesha.map((el, index) => {
              return (
                <div key={index}>
                  <ButtonComponent
                    flagValue={el.flagValue}
                    className={el.className}
                    aria={el.aria}
                    getValue={this.getValue}
                    buttonType={el.buttonType}
                    name={el.name}
                  />
                  <span className="Accordion-icon"><FaAngleDown /></span>
                  <hr className="line-style"></hr>
                  {el.buttonType === 'showMessage' && el.flagValue && <Form />}
                  {el.buttonType === 'showBillAdd' && el.flagValue && <BillForm />}
                  {el.buttonType === 'showAddress' && el.flagValue && <ShippForm />}
                </div>
              )
            })
          }
        </div>

      </div>
    )
  }
}

export default Pform;