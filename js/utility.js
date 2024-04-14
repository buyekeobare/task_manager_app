const activityInput = document.querySelector('#activity-field');
const dateInput = document.querySelector('#date-field');
const timeInput = document.querySelector('#time-field');

const validateForm = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.classList.remove('error-prompt')
  })


  if (
    activityInput.value === '' || 
    dateInput.value === '' || 
    timeInput.value === ''
  ) {
    inputs.forEach(input => {
       input.classList.add('error-prompt')
    })
    return false; 
  }

  return true;
};

const getActivityFields = () => {
  const activity = activityInput.value;
  const date = dateInput.value;
  const time = timeInput.value;
  return {
    activity, date, time
  }
}

const reset = () => {
  activityInput.value = '';
  dateInput.value = '';
  timeInput.value = '';
}
export { validateForm, getActivityFields, reset };



