import { useState } from 'react';

function useForm(callback, initData) {
    const [formData, setFormData] = useState(initData || {});

    function updateForm(key, value) {
        let newFormData = { ...formData };
        newFormData[key] = value;
        console.log('key,,Form==', key);
        console.log('value,,Form==', value);
        
        console.log('newFormData===', newFormData);
        
        setFormData(newFormData);
    }

    function submitForm(event) {
        event.preventDefault();
        event.target.reset();
        console.log('formData===', formData);
        callback(formData);
    }

    return [updateForm, submitForm, formData];
}

export default useForm;