import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewMerchForm(props){

  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({names: event.target.name.value, location: event.target.description.value, quanity: event.target.quantity.value, id: v4()});
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewMerchFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Names' />
        <input
          type='text'
          name='description'
          placeholder='Description' />
        <input
          type='int'
          name='quantity'
          placeholder='Quantity' />
        <button type='submit'>Enter!</button>
      </form>
    </React.Fragment>
    
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;