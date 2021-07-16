import React, { Component, useState } from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    CircularProgress
  } from '@material-ui/core';
import { FormFirstPageDetails } from './FormFirstPageDetails' ;
import { FormSecondPageDetails } from './FormSecondPageDetails';
import * as Yup from 'yup';
import { Formik, Form } from 'formik' ; 
import validationSchema from './FormModel/validationSchema';
import formInitialStates from './FormModel/formInitialStates';
import applicationFormModel from './FormModel/applicationFormModel';

//Global state
const steps = ['FirstPageDetails' , 'SecondPageDetails'] ; 


const {formId, formField} = applicationFormModel


const renderSwitch = (step) => {
    switch(step){
        case 0:
            return(
                <FormFirstPageDetails formField= {formField}/>
                    // nextStep={this.nextStep}
                    // handleChange={this.handleChange}
                    // values={values}
                
            )
        case 1:
            return(
            <FormSecondPageDetails formField={formField}/>
                // nextStep={this.nextStep}
                // prevStep={this.prevStep}
                // handleChange={this.handleChange}
                // values={values}
            
            )
        case 2:
            return <h1> Confirm </h1>
        case 3: 
            return <h1> Success </h1>
    }

}


export class ApplicationForm extends Component {
    //Create the Form state 
    state = {
        activeStep: 0,
        // fullName: '',
        // birthDate: '' ,
        // age: '',
        // gender: '',
        // email: '',
        // phoneNumber: '',
        // address: '' 
    }

    // //Proceed to the Next Step
    // nextStep = () => {
    //     const {step} = this.state ; 
    //     this.setState({
    //         step: step+1
    //     });
    // }

    // prevStep = () => {
    //     const {step} = this.state;
    //     this.setState({step:step-1});
    // }

    //Handle Fields Change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    //code refractoring 2 

    // constructor(){
    //     super();
    //     this.state={
    //         activeStep: 0 
    //     };
    // }

    setActiveStep = (step) => {
        this.setState({activeStep: step})
    }

    //currentValidationSchema = validationSchema[activeStep] ; 
    isLastStep = this.state.activeStep === steps.length -1 ; 
    currentValidationSchema = validationSchema[this.state.activeStep];
    _sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve,ms)) ; 
    }

    async _submitForm(values,actions) {
        await this._sleep(1000) ; 
        alert(JSON.stringify(values,null,2)) ;
        actions.setSubmitting(false);

        this.setActiveStep(this.state.activeStep + 1); 
    }

    _handleSubmit = (values, actions) => {
        if(this.isLastStep) {
            this._submitForm(values, actions);
        } else {
            this.setActiveStep(this.state.activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    }

    _handleBack = () => {
        this.setActiveStep(this.state.activeStep - 1); 
    }

    render() {
        // const { step } = this.state;
        // const { fullName, birthDate, age, gender, email, phoneNumber, address }  = this.state ;  
        // const values = { fullName, birthDate, age, gender, email, phoneNumber, address } ; 
        
        return (
        <React.Fragment>
            <Typography component="h1" variant="h4" align = "center">
                Application Form
            </Typography>
            <Stepper activeStep={this.state.activeSep} className="stepper">
                {steps.map(label => {
                    <Step key = {label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                })}
            </Stepper>
        <React.Fragment>
                {this.state.activeStep === steps.length ?(
                    //Checkout Success
                    <h2>None</h2>
                ):(
                    <Formik
                    initialValues = {formInitialStates}
                    validationSchema={this.currentValidationSchema}
                    onSubmit= {this._handleSubmit}
                    >
                    
                    {({isSubmitting}) => (
                        <Form id = {formId}>
                            {renderSwitch(this.state.activeStep)}

                            <div className="button">
                            {this.state.activeStep !== 0 && (
                                <Button onClick={this._handleBack} className="button">
                                Back
                                </Button>
                            )}
                             <div className="wrapper">
                                <Button
                                disabled={isSubmitting}
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="wrapper"
                                >
                                {this.isLastStep ? 'Submit' : 'Next'}
                                </Button>
                                {isSubmitting && (
                                    <CircularProgress
                                    size={24}
                                    className="buttonProgress"
                                    />
                                    )}
                                
                                
                            </div>

                            </div>
                        </Form>
                        )}
                        </Formik>

                    )}
        </React.Fragment>
        </React.Fragment>
      

        )
    }
}

export default ApplicationForm





