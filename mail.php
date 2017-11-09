<?php 

header('Content-Type: application/json');

$name = $_POST['name'];
$message = "Сообщение от пользователя: $name";
$result = mail('dima_sokolov_6969@mail.ru', 'Хочу бургеров', $message);

echo json_encode(array(
		'status' => $result
	));

?>