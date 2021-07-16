import applicationFormModel from './applicationFormModel';

const {
    formField:{
        fullName,
        birthDate,
        age,
        gender,
        email,
        phoneNumber,
        address
    } 
} = applicationFormModel

export default {
    formId : 'applicationForm',
    formField: {
        [fullName.name] : '' ,
        [birthDate.name] : '', 
        [age.name] : '' , 
        [gender.name] : '',
        [email.name] : '',
        [phoneNumber.name]: '',
        [address.name]: '' 
    }
}


