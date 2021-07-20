import React, { Component } from 'react'
import {Typography, TextField, Grid, MenuItem, Select, Button, Input} from '@material-ui/core' ;



export class FormSecondPageDetails extends Component {

    render() {
        //const { values, handleChange } = this.props ;  // pulling it out
        const {formField : {email, phoneNumber, address}, values, handleChange, handleBlur, errors, touched} = this.props ; 
        return (
            <React.Fragment>            
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                    <TextField
                        name={email.name}
                        value={values.email? values.email:""}
                        onChange= {handleChange}
                        onBlur={handleBlur}
                        error={Boolean((touched.email || touched.formField) && errors.email)}
                        helperText= {(touched.email || touched.formField) && errors.email}
                        label={email.label}
                        variant="outlined"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                     <TextField
                        name={phoneNumber.name}
                        value={values.phoneNumber? values.phoneNumber:""}
                        onChange= {handleChange}
                        onBlur={handleBlur}
                        error={Boolean((touched.phoneNumber || touched.formField) && errors.phoneNumber)}
                        helperText= {(touched.phoneNumber || touched.formField) && errors.phoneNumber}
                        label={phoneNumber.label}
                        variant="outlined"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                     <TextField
                        name={address.name}
                        value={values.address? values.address:""}
                        onChange= {handleChange}
                        onBlur={handleBlur}
                        error={Boolean((touched.address || touched.formField) && errors.address)}
                        helperText= {errors.address}
                        label={address.label}
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
