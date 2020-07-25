import createInput from './input';

export const auth = () => {
  const authWrapper = document.createElement('div');
  const card = document.createElement('div');
  const cardContent = document.createElement('div');
  const cardTitle = document.createElement('span');
  const loginInput = createInput('text', 'Логин', 'input-login', 'white-text');
  const passwordInput = createInput('password', 'Пароль', 'input-password', 'white-text');

  authWrapper.classList.add('auth');
  card.classList.add('card', 'teal', 'white-text');
  cardContent.classList.add('card-content');
  cardTitle.classList.add('card-title');

  cardTitle.textContent = 'Вход в систему';

  cardContent.append(cardTitle, loginInput, passwordInput);
  card.append(cardContent);
  authWrapper.append(card);
  return authWrapper;
}