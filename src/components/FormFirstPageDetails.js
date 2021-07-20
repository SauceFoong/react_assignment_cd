import React, { Component } from 'react'
import {Typography, TextField, Grid, MenuItem, Select, Button} from '@material-ui/core' ;
import axios from 'axios';


export class FormFirstPageDetails extends Component {
    state = {
        gender_options: []
    } 

    componentDidMount() {
        const url = "https://run.mocky.io/v3/27d25773-aff0-405e-a453-84b667871db1"
        axios.get(url).then((response) => 
            {   
                this.setState({gender_options:response.data.gender})
            }).catch(err => console.log("Error detected ! "))
    }
    


    render() {
        const {formField: {fullName, birthDate, age, gender}, values, handleChange, handleBlur, errors, touched, isSubmitting} = this.props ; 

        return (
            <React.Fragment>            
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                    <TextField
                        name= {fullName.name}
                        value={values.fullName? values.fullName: ""}
                        onChange= {handleChange}
                        onBlur={handleBlur}
                        error={Boolean((touched.fullName || touched.formField) && errors.fullName)}
                        helperText= {(touched.fullName || touched.formField)  && errors.fullName}
                        label={fullName.label}
                        variant="outlined"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                     <TextField
                        name= {birthDate.name}
                        value={values.birthDate? values.birthDate: ""}
                        onChange= {handleChange}
                        onBlur={handleBlur}
                        error={Boolean((touched.birthDate || touched.formField) && errors.birthDate)}
                        helperText= {(touched.birthDate || touched.formField) && errors.birthDate}
                        InputLabelProps={{ shrink: true }}
                        label={birthDate.label}
                        type="date"
                        variant="outlined"
                        fullWidth

                    />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                     <TextField
                        name= {age.name}
                        value={values.age? values.age: ""}
                        onChange= {handleChange}
                        onBlur={handleBlur}
                        error={Boolean((touched.age || touched.formField) && errors.age)}
                        helperText= {(touched.age || touched.formField) && errors.age}
                        label={age.label}
                        variant="outlined"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                    <TextField 
                    id="gender" 
                    select
                    name={gender.name} 
                    label={gender.label} 
                    value={values.gender? values.gender: ""} 
                    onChange= {handleChange} 
                    onBlur={handleBlur} 
                    error={Boolean((touched.gender || touched.formField) && errors.gender)} 
                    helperText={(touched.gender || touched.formField) && errors.gender}
                    variant="outlined"
                    fullWidth
                    >
                         {this.state.gender_options.map((item,index) => {
                            return (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            );
                        })}

                        
                    </TextField>
                    </Grid>
                   
                </Grid>                     
            </React.Fragment>
        )
    }
}

export default FormFirstPageDetails
