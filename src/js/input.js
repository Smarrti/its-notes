export default (type, heading, id, className) => {
  const inputWrapper = document.createElement('div');
  const input = document.createElement('input');
  const inputLabel = document.createElement('label');

  input.classList.add(className);
  inputLabel.classList.add(className);
  inputWrapper.classList.add('input-field');

  input.setAttribute('type', type);
  input.setAttribute('id', id);
  inputLabel.setAttribute('for', id);

  inputLabel.textContent = heading;

  inputWrapper.append(input, inputLabel);
  return inputWrapper;
}