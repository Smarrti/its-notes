import createInput from './input';

const createStartFormContent = () => {
  const content = document.createElement('div');
  const authWrapper = document.createElement('div');
  const registrationWrapper = document.createElement('div');
  const authLogin = createInput('text', 'Логин', 'authLogin', 'auth__input');
  const authPassword = createInput('password', 'Пароль', 'authPassword', 'auth__input');
  const registrationName = createInput('text', 'Имя', 'registrationName', 'auth__input');
  const registrationLogin = createInput('text', 'Логин', 'registrationlogin', 'auth__input');
  const registrationPassword = createInput('text', 'Пароль', 'registrationPassword', 'auth__input');
  const registrationPasswordConfirm = createInput(
    'text', 'Повторите пароль', 'registrationPasswordConfirm', 'auth__input'
  );

  authWrapper.setAttribute('id', 'auth');
  registrationWrapper.setAttribute('id', 'registration');

  content.classList.add('card-content', 'grey', 'lighten-4');
  
  authWrapper.append(authLogin, authPassword);
  registrationWrapper.append(
    registrationName, registrationLogin, registrationPassword, registrationPasswordConfirm
  );
  content.append(authWrapper, registrationWrapper);
  return content;
}

export const startPage = () => {
  const content = document.createElement('div');
  const card = document.createElement('div');
  const cardContent = document.createElement('div');
  const cardTitle = document.createElement('span');
  const tabsWrapper = document.createElement('div');
  const tabsWrapperList = document.createElement('ul');
  const tabsAuth = document.createElement('li');
  const tabsRegistration = document.createElement('li');
  const tabsAuthLink = document.createElement('a');
  const tabsRegistrationLink = document.createElement('a');

  content.classList.add('auth');
  card.classList.add('card');
  cardContent.classList.add('card-content');
  cardTitle.classList.add('card-title');
  tabsWrapper.classList.add('card-tabs');
  tabsWrapperList.classList.add('tabs', 'tabs-fixed-width');
  tabsAuth.classList.add('tab');
  tabsRegistration.classList.add('tab');

  cardTitle.textContent = 'IT`S Notes!';
  tabsAuthLink.textContent = 'Вход в систему';
  tabsRegistrationLink.textContent = 'Регистрация';

  tabsAuthLink.setAttribute('href', '#auth');
  tabsRegistrationLink.setAttribute('href', '#registration');

  tabsAuth.append(tabsAuthLink);
  tabsRegistration.append(tabsRegistrationLink);
  tabsWrapperList.append(tabsAuth, tabsRegistration);
  tabsWrapper.append(tabsWrapperList);
  cardContent.append(cardTitle);
  card.append(cardContent, tabsWrapper, createStartFormContent());
  content.append(card);
  return content;
}