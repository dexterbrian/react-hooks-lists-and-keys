import React from 'react';

function TextInput({ inputType, inputId, inputPlaceholder }) {
    return (
        <input id={ inputId } type={ inputType } placeholder={ inputPlaceholder }/>
    );
}

export default TextInput;