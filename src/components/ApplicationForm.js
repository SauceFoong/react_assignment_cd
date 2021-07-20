import React, { Component   } from 'react';
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
import applicationFormModel from './FormModel/applicationFormModel';

//Global state
const steps = ['First Page' , 'Second Page'] ; 


const {formId, formField} = applicationFormModel;


const renderSwitch = (step,values,handleChange,handleBlur,errors,touched) => {
    switch(step){
        case 0:
            return(
                <FormFirstPageDetails formField= {formField} values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
            )
        case 1:
            return(
                <FormSecondPageDetails formField={formField} values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />
            )
    }

};



export class ApplicationForm extends Component {
    state = {
        activeStep: 0,

    }

    setActiveStep = (step) => {
        this.setState({activeStep: step})
    }

    isLastStep = () => {
        return this.state.activeStep === steps.length - 1
    }
    
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

            if(this.isLastStep()) {
                this._submitForm(values, actions);
            }else{
            this.setActiveStep(this.state.activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
            }
            
        }
    

    _handleBack = () => {
        this.setActiveStep(this.state.activeStep - 1); 
    }

    getCurrentScheme = () => {
        return validationSchema[this.state.activeStep]
    }


    render() {
        const {activeStep} = this.state ;
        return (
        <React.Fragment>
            <Typography variant="h4" align = "center" className="text-blue-500 font-bold center">
                Application Form
            </Typography>
            <Stepper alternativeLabel activeStep={activeStep} className="stepper">
                {steps.map(label => {
                    return(
                    <Step key = {label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>)
                })}
                 <Step key = "Submitted">
                        <StepLabel>Submitted</StepLabel>
                </Step>
            </Stepper>
        <React.Fragment>
                {activeStep === steps.length ?(
                    //Submitted Successfully
                    <div className="px-8 py -8 wrapper-submit">
                    <h2 className="text-5xl">Thank you ! </h2>
                    <p className="p-6 text-xl">Your form was submitted successfully.</p>
                    </div>
                ):(
                    <Formik
                    enableReinitialize = {true}
                    initialValues = {{
                        fullName: '',
                        birthDate: '',
                        age: '',
                        gender: '',
                        email: '',
                        phoneNumber: '',
                        address: ''
                    }}
                    validationSchema={this.getCurrentScheme}
                    onSubmit= {
                        this._handleSubmit
                    }
                    >
                    
                    {({isSubmitting,values, handleChange, handleBlur, errors, touched}) => (
                        <Form id = {formId}>
                            {renderSwitch(activeStep,values,handleChange, handleBlur, errors, touched)}

                            <div className="py-8 space-x-4" >
                            {activeStep !== 0 && (
                                <div className="inline-block">
                                <Button onClick={this._handleBack} className="button">
                                Back
                                </Button>
                                </div>
                            )}
                             <div className="wrapper inline-block">
                                 
                                <Button
                                disabled={isSubmitting}
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="wrapper"
                                >
                                {this.isLastStep() ? 'Submit' : 'Next'}
                                </Button>
                                
                                {isSubmitting && (
                                    <CircularProgress
                                    size={24}
                                    className="buttonProgress"
                                    />
                                    )}
                                
                                
                            </div>

                            
                            <div className={this.isLastStep() ? "m-3 lg:inline-block clear-all-di" : "inline-block clear-all-div"}>
                                 
                                 <Button
                                 variant="contained"
                                 color="secondary"
                                 className="md:m-6 clear-all"
                                 type="reset"
                                 onClick={() => {                        
                                    if(activeStep > 0){
                                        //so the user will fill the form from first page again ! 
                                        this.setActiveStep(activeStep - 1)
                                    }
                                 }}
                                 >
                                 Clear All
                                 </Button>      
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





