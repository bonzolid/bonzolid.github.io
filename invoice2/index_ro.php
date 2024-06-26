<!DOCTYPE html>
<html>

<head>
    <script>
    (function(window) {
      if (window.location !== window.top.location) {
        window.top.location = window.location;
      }
    })(this);
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <?php if (isset($title)): ?>
        <title><?php echo $title ?></title>
    <?php else: ?>
        <title>Comanda acceptată</title>
    <?php endif ?>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="nofollow" />
    <link rel="stylesheet" type="text/css" href="static/style.css" media="all">
    <style>
    body { margin-top: 50px }

    .gift-box {
	position: relative;
	background: #fff;
	border: 2px solid #f50000;
	max-width: 800px;
    }
    .gift-box:after, .gift-box:before {
	top: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
    }

    .gift-box:after {
	border-color: rgba(136, 183, 213, 0);
	border-top-color: #fff;
	border-width: 30px;
	margin-left: -30px;
    }
    .gift-box:before {
	border-color: rgba(245, 0, 0, 0);
        border-top-color: #f50000;
        border-width: 33px;
        margin-left: -33px;
    }
    </style>


</head>

<body>

<?php if($order_id) { ?>

    <h1>Cererea dvs. a fost acceptată.</h1>
    
    <!-- <h2>Спасибо за проявленный интерес!</h2> -->

    <p>
      Vă mulțumim pentru comandă! <br>
      Operatorul nostru vă va contacta cât mai curând timp. Vă rugăm să porniți numărul dvs de contact.
    </p>

    <table style="margin: auto">
            
        <tr>
            <th>Ai comandat</th>
            <td>
                <?= $product_name ?>
            </td>
        </tr>
    
        <tr>
            <th>Comanda №:</th>
            <td><?= $order_id ?></td>
        </tr>

        <tr>
            <th>Nume:</th>
            <td><?= $order_name; ?></td>
        </tr>

        <tr>
            <th>Număr de contac:</th>
            <td><?= $order_phone; ?></td>
        </tr>

    </table>
    <?php
    if (isset($tracker_pixels)) {
        foreach($tracker_pixels as $pixel_name => $pixel_id) {
            require_once ('pieces/trackers/'.$pixel_name.'.php');
        }
    }
    require_once ('trackers_order.php');
}
else {
    echo 'Error!';
}
?>
</body>
</html>
