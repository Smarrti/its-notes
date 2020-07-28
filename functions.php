<?php

function checkPassword($password) {
  $reg = '/(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/';
  return preg_match($reg, $password);
}

function checkingOfExistUser($login) {
  $db = new PDO(createPDOConfig(), DBUSER, DBPASS);
  $sql = "SELECT `userName` FROM `users` WHERE `login` = ?";
  $dbRequest = $db -> prepare($sql);

  if ($dbRequest -> execute(array($login))) {
    $response = $dbRequest -> fetchAll(PDO::FETCH_ASSOC);
    if (count($response)) {
      return 'Login registered';
    } else {
      return 'Login not registered';
    }
  } else {
    return 'Data base error';
  }
}