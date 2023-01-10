<?php
define('REQUIRED_FIELD_ERROR', 'This field is required');
$errors = [];

$name = '';
$email = '';
$comment = '';
if ($_Server['REQUEST_METHOD'] === 'POST') {
    //echo  '<pre>';

    //var_dump($_Post) 
    //echo '</pre>'

    $name = post_data('name');
    $email = post_data('email');
    $comment = post_data('comment');
    echo  '<pre>';

    var_dump($name, $email, $comment) 
    echo '</pre>'

    if (!$name){
        $errors['name'] = REQUIRED_FIELD_ERROR;
    } else if (strlen($name) < 4 || strlen($name) > 14){
        $errors['username'] = 'Username must be less than 14 and more than 4 chars';

    if (!$email){
        $errors['email'] = REQUIRED_FIELD_ERROR;
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $errors['email'] = 'This must be valid email address';
    }

    if (!$comment){
        $errors['comment'] = REQUIRED_FIELD_ERROR;
    } else if (strlen($comment) > 400){
        $errors['comment'] = 'Max 400 char.';

Function post_date($Field)
{
    $_POST[$Field] ??= '';
    return htmlspecialchars(stripslashes($_POST[$Field]))
}
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vizitkarte</title>
    <link rel="stylesheet" type="text/css" href="css/comment.css" />
    <script src="js/script.js" defer></script>
</head>
<body>
    <button class="button-1" id="redirecttohomepage" onClick="RedToChoose()">Atpakaļ</button>
    
    <article>
        <h1>
            Mana vizītkarte
        </h1>
    </article>


			<div class="comment-box">
				<h2>Leave a comment</h2>
				<form id="order-form" method="post" novalidate>
				  <div class="user-box">
                  <input  name="name" class="form-control <?php echo isset($errors['name']) ? 'is-invalid' : '' ?>"
                       value="<?php echo $name ?>">
					<label style="top: -20px;
					left: 0;
					color: #03e9f4;
					font-size: 12px;">Name</label>
                    <div class="invalid-feedback">
                        <?php echo $errors['name'] ?? '' ?>
                    </div>
				  </div>
				  <div class="user-box">
					<input type="text" name="email" class="form-control <?php echo isset($errors['email']) ? 'is-invalid' : '' ?>"
                       value="<?php echo $email ?>">
					<label>Email address</label>
                    <div class="invalid-feedback">
                        <?php echo $errors['email'] ?? '' ?>
                    </div>
				  </div>
				  <div>
					<label for="comment"  style="margin: 0 0 10px;
					padding: 0;
					color: #fff;
					text-align: center; font-size: 16px;">Comments</label>
					<textarea name="comment" cols="40" rows="10" type="text" class="form-control <?php echo isset($errors['email']) ? 'is-invalid' : '' ?>"
                       value="<?php echo $email ?>"></textarea>
                    <div class="invalid-feedback">
                        <?php echo $errors['email'] ?? '' ?>
                    </div>
				  </div>
				  <button form="order-form" id="buttonSend" class="btn btn-primary">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Send
				  </button>
				</form>
			  </div>
			  <div id="saraksts"></div>


			  <body>
			  
			</div>
			
			</body>
			</html>
</body>
</html>