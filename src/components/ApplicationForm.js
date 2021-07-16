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
import { Formik, Form } from 'formik' ; 
import validationSchema from './FormModel/validationSchema';
import formInitialStates from './FormModel/formInitialStates';
import applicationFormModel from './FormModel/applicationFormModel';

//Global state
const steps = ['FirstPageDetails' , 'SecondPageDetails'] ; 


const {formId, formField} = applicationFormModel;


const renderSwitch = (step,values,handleChange,handleBlur,errors) => {
    switch(step){
        case 0:
            return(
                <FormFirstPageDetails formField= {formField} values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors}/>

            )
        case 1:
            return(
                <FormSecondPageDetails formField={formField} values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors}/>

            
            )
        case 2:
            return <h1> Confirm </h1>
        case 3: 
            return <h1> Success </h1>
    }

};



export class ApplicationForm extends Component {
    //Create the Form state 
    state = {
        activeStep: 0,

    }

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
            console.log(values)
            actions.setSubmitting(false);
        }
    }

    _handleBack = () => {
        this.setActiveStep(this.state.activeStep - 1); 
    }

    render() {
        
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
                    
                    {({isSubmitting,values, handleChange, handleBlur, errors}) => (
                        <Form id = {formId}>
                            {renderSwitch(this.state.activeStep,values,handleChange, handleBlur, errors)}

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

                            <pre>{JSON.stringify(errors,null,2)}</pre>

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





