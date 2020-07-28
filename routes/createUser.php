<?php

if ($method != "POST" &&
  !isset($formData['userName']) &&
  !isset($formData['login']) &&
  !isset($formData['password'])
):
  $response['Error'] = 'Not enough data';
  $code = 400;
elseif (!checkPassword($formData['password'])):
  $response['Error'] = 'Bad password';
  $code = 400;
elseif (checkingOfExistUser($formData['login']) != 'Login not registered'):
  $response['Error'] = 'Login has already been registered';
  $code = 400;
else:
  $userName = $formData['userName'];
  $login = $formData['login'];
  $password = password_hash($formData['password'], PASSWORD_DEFAULT);

  $sql = "INSERT INTO `users`(`userName`, `login`, `password`) VALUES (?, ?, ?)";
  $dbRequest = $db -> prepare($sql);

  if ($dbRequest -> execute(array($userName, $login, $password))) {
    $response['Success'] = 'Client registered';
    $code = 200;
  } else {
    $response['Error'] = 'Data base error';
    $code = 400;
  }
endif;