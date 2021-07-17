import React, { Component } from 'react'
import {Typography, TextField, Grid, MenuItem, Select, Button} from '@material-ui/core' ;
import axios from 'axios';

// imported code for checking today's date 
const dateNow = new Date(); // Creating a new date object with the current date and time
const year = dateNow.getFullYear(); // Getting current year from the created Date object
const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
const month = // Setting current Month number from current Date object
  monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 if not to adjust for date input.
    ? `0${monthWithOffset}`
    : monthWithOffset;
const date =
  dateNow.getUTCDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
    ? `0${dateNow.getUTCDate()}`
    : dateNow.getUTCDate();

const materialDateInput = `${year}-${month}-${date}`; // combining to format for defaultValue or value attribute of material <TextField>

export class FormFirstPageDetails extends Component {
    state = {
        gender_options: []
    } 
    //https://run.mocky.io/v3/057c4586-d259-44b5-82f0-bca84cffba6d
    //https://run.mocky.io/v3/aca70c11-5d06-4770-b13c-5792b9700502
    //https://run.mocky.io/v3/a0df5a2f-6dc8-4956-b2a3-0db01e0c937c
    componentDidMount() {
        const url = "https://run.mocky.io/v3/27d25773-aff0-405e-a453-84b667871db1"
        axios.get(url).then((response) => 
            {   
                console.log((response))
                this.setState({gender_options:response.data.gender})
                console.log(this.state.gender_options)
            })

            //.catch(err => console.log("Error detected ! "))
    }
    


    render() {
        const {formField: {fullName, birthDate, age, gender}, values, handleChange, handleBlur, errors} = this.props ; 
        //const {gender_options} = this.state ; 
        //console.log(this.state.gender_options);
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
                        error={errors.fullName}
                        helperText= {errors.fullName}
                        label={fullName.label}
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
                        error={errors.birthDate}
                        helperText= {errors.birthDate}
                        defaultValue={materialDateInput}
                        label={birthDate.label}
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
                        error={errors.age}
                        helperText= {errors.age}
                        label={age.label}
                        variant="outlined"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <Select 
                    id="gender" 
                    name={gender.name} 
                    label={gender.label} 
                    value={values.gender} 
                    onChange= {handleChange} 
                    onBlur={handleBlur} 
                    error={errors.gender} 
                    fullWidth
                    >

                         {this.state.gender_options.map((item) => {
                            return (
                                <MenuItem value={item}>{item}</MenuItem>
                            );
                        })}

                        
                    </Select>
                    </Grid>
                   
                </Grid>                     
            </React.Fragment>
        )
    }
}

export default FormFirstPageDetails
 {/* {
                        gender_options.map((gender_option) => <MenuItem value={gender_option}>{gender_option}</MenuItem>
                        )} */}