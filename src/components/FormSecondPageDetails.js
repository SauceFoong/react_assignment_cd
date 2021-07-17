import React, { Component } from 'react'
import {Typography, TextField, Grid, MenuItem, Select, Button, Input} from '@material-ui/core' ;



export class FormSecondPageDetails extends Component {

    render() {
        //const { values, handleChange } = this.props ;  // pulling it out
        const {formField : {email, phoneNumber, address}, values, handleChange, handleBlur, errors} = this.props ; 
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
                        error={errors.email}
                        helperText= {errors.email}
                        label={email.label}
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
                        error={errors.phoneNumber}
                        helperText= {errors.phoneNumber}
                        label={phoneNumber.label}
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
                        error={errors.address}
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
