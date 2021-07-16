import React, { Component } from 'react'
import {Typography, TextField, Grid, MenuItem, Select, Button, Input} from '@material-ui/core' ;
import { Field, Form, Formik } from 'formik' ; 



export class FormSecondPageDetails extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email : '',
    //         phoneNumber: '',
    //         address: ''           
    //       }
    //     }

    render() {
        //const { values, handleChange } = this.props ;  // pulling it out
        const {formField : {email, phoneNumber, address}, values, handleChange, handleBlur} = this.props ; 
        return (
            <React.Fragment>            
                    <Typography variant="h6" gutterBottom>
                    Second Page
                    </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                    <TextField
                        name={email.name}
                        value={values.email}
                        onChange= {handleChange}
                        onBlur={handleBlur}
                        label="Email"
                        variant="outlined"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                     <TextField
                        name={phoneNumber.name}
                        value={values.phoneNumber}
                        onChange= {handleChange}
                        onBlur={handleBlur}
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                     <TextField
                        name={address.name}
                        value={values.address}
                        onChange= {handleChange}
                        onBlur={handleBlur}
                        label="Address"
                        variant="outlined"
                        fullWidth
                    />
                    </Grid>
                </Grid>                     
            </React.Fragment>
        )
    }
}

export default FormSecondPageDetails
