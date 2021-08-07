<?php
// print_r('<pre>');
// print_r($_POST);
// echo 1;
if (empty($_POST['nom_form'])) {
    echo 2;
    return;
}


if (empty($_POST['edad_form'])) {
    echo 2;
    return;
}

echo 1;