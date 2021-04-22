import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import './App.css';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  NameId: Yup.string()
    .required("Name is Required"),

  EmailId: Yup.string()
    .email("Please entered valid Email Address ")
    .required("Email is Required"),
  AdateId: Yup.string()
    .required("Arrival Date is Required"),
  DdateId: Yup.string()
    .required("Departure Date is Required"),
  Guest: Yup.string()
    .required("Numaber of Guest is Required"),
});



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      loginForm: {
        EmailId: "",
        NameId: "",
        AdateId: "",
        DdateId: "",
        Guest: "",
        Flight: "",

      },
    };
  }
  onSubmit(values, actions) {

    alert(JSON.stringify(values, null, 2));
  }
  render() {
    const {
      loginForm,
    } = this.state;

    return (


      <div className="body">
        <div className="bodyPart">
          <Formik
            initialValues={loginForm}
            validationSchema={LoginSchema}
            enableReinitialize={true}
            validateOnChange={(values) => { }}
            onSubmit={(values) => {
              Object.values(values).filter((res) => res !== "").length ===
                Object.keys(values).length && this.onLoFotrmginClick(values);
            }}
            render={(props) => {
              return (
                <Form className="box" >

                  <label for="name" className="label">Name*:</label>
                  <FormGroup className="nme">
                    <FormControl
                      value={props.values.sNameId}
                      name="Name"
                      className="input"
                      placeholder="Name"

                      onChange={(ev) => {
                        console.log("Name", ev.target.value)
                        props.setFieldValue("NameId", ev.target.value);
                        props.setFieldTouched("NameId", true);
                      }}
                      onBlur={props.handleBlur}
                    />
                    <span className="maiwai-mail"></span>
                    <span className="error">
                      <ErrorMessage name="NameId" />
                    </span>
                  </FormGroup><br />


                  <label for="name" className="label">Email*:</label>
                  <FormGroup className="mail">

                    <FormControl
                      value={props.values.sEmailId}

                      name="Email"
                      className="input"
                      placeholder="Email*"

                      onChange={(ev) => {
                        console.log("Email address", ev.target.value)
                        props.setFieldValue("EmailId", ev.target.value);
                        props.setFieldTouched("EmailId", true);
                      }}
                      onBlur={props.handleBlur}
                    />

                    <span className="error">
                      <ErrorMessage name="EmailId" />
                    </span>
                  </FormGroup><br />


                  <label for="email" className="label">Room Type:</label>
                  <FormGroup className="rmtype">
                    <FormControl
                      placeholder="Select"
                      className="select"
                      as="select">
                      <option>Select</option>
                    </FormControl>
                  </FormGroup><br />


                  <label for="Adate" className="label">Arrival Date*:</label>
                  <FormGroup className="ardate">
                    <FormControl
                      value={props.values.sADate}
                      name="Adate"
                      className="input"
                      placeholder="Arrival Date"

                      onChange={(ev) => {
                        console.log("Arrival Date", ev.target.value)
                        props.setFieldValue("AdateId", ev.target.value);
                        props.setFieldTouched("AdateId", true);
                      }}
                      onBlur={props.handleBlur}
                    />
                    <span className="maiwai-mail"></span>
                    <span className="error">
                      <ErrorMessage name="AdateId" />
                    </span>
                  </FormGroup><br />


                  <label for="Ddate" className="label">Departure Date*:</label>
                  <FormGroup className="depdate">
                    <FormControl
                      value={props.values.DDate}
                      name="Ddate"
                      className="input"
                      placeholder="Departure Date"


                      onChange={(ev) => {
                        console.log("Departure Date", ev.target.value)
                        props.setFieldValue("DdateId", ev.target.value);
                        props.setFieldTouched("DdateId", true);
                      }}
                      onBlur={props.handleBlur}
                    />
                    <span className="maiwai-mail"></span>
                    <span className="error">
                      <ErrorMessage name="DdateId" />
                    </span>
                  </FormGroup><br />



                  <label for="Flight" className="label">Flight Number:</label>
                  <FormGroup className="fno">
                    <FormControl
                      value={props.values.Flight}
                      label="Flight"
                      name="flight"
                      className="input"
                      placeholder="Flight Number"
                    />
                  </FormGroup><br />


                  <label for="guests" className="label">Number Of Guests*:</label>
                  <FormGroup className="nguest">
                    <FormControl
                      className="gDrop"
                      as="select">
                      <option>Select</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>

                    </FormControl>


                  </FormGroup><br />


                  <label for="pickup" className="label">Free Pick Up:</label>
                  <FormGroup className="picup">

                    <label  >
                      <Field type="radio" name="pickUp" value="Yes" />
                      Yes
                      </label>
                    <label >
                      <Field type="radio" name="pickUp" value="No" />
                      No
                      </label>
                  </FormGroup><br />


                  <label for="email" className="label">Special Request:</label>
                  <FormGroup className="splreq">
                    <FormControl
                      value={props.values.sName}
                      label="Name"
                      as="textarea"
                      row="3"
                      col="6"
                      name="sName"
                      className="input"
                      placeholder="Type Here"
                    />
                  </FormGroup><br />

                  <FormGroup className="btn">
                    <Button
                      className="button"
                      type="submit"
                      value="Submit"

                    >Submit
                      </Button>
                  </FormGroup>

                </Form>
              );
            }}
          />
        </div>
      </div>


    );
  }

}

export default App;
