import React, { Component } from 'react'
import {Typography, TextField, Grid, MenuItem, Select, Button} from '@material-ui/core' ;
import { Field, Form, Formik } from 'formik' ; 

const gender = [
    {
        value : undefined,
        label : 'None'
    },
    {
        value: 'm',
        label: 'Male'
    },
    {
        value: 'f',
        label: 'Female'
    }

]

export class FormFirstPageDetails extends Component {
    //const { formField:{fullName}} = props; 
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         fullName : '',
    //         birthDate: '',
    //         age: '',
    //         gender: ''
           
    //       }
    //     }    

    render() {
        const {formField: {fullName, birthDate, age, gender}, values, handleChange, handleBlur} = this.props ; 
        //const { values, handleChange } = this.props ;  // pulling it out
        return (
            <React.Fragment>            
                    <Typography variant="h6" gutterBottom>
                    </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                    <TextField
                        name= {fullName.name}
                        value={values.fullName}
                        onChange= {handleChange}
                        onBlur={handleBlur}
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                     <TextField
                        name= {birthDate.name}
                        value={values.birthDate}
                        onChange= {handleChange}
                        onBlur={handleBlur}
                        label="Birth Date"
                        type="date"
                        fullWidth

                    />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                     <TextField
                        name= {age.name}
                        value={values.age}
                        onChange= {handleChange}
                        onBlur={handleBlur}
                        label="Age"
                        variant="outlined"
                        fullWidth
                    />
                    </Grid>
                    {/* <Grid item xs={12} sm={12}>
                    <Select id="gender" name={gender.name} label="Gender" fullWidth required>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </Select>
                    </Grid> */}
                   
                </Grid>                     
            </React.Fragment>
        )
    }
}

export default FormFirstPageDetails
