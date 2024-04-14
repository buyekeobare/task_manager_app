import { validateForm, getActivityFields, reset } from './utility.js'

const taskBtn = document.querySelector("#task-form-btn");
const tasks = [];

taskBtn.addEventListener("click", function() {
  const isValidated = validateForm();

  if(!isValidated)
    return;

  const fieldValues = getActivityFields();
  reset();

  tasks.push(fieldValues);
  console.log(fieldValues)
})

const createTaskItems = () => {
  const cardDiv = document.createElement('div');
  cardDiv.setAttribute('class', 'card');
}