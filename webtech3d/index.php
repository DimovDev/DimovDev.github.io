<?php
//header( 'Location: https://webtech3d.ddns.net/index.html' ) ;

function Redirect($url, $permanent = false)
{
    header('Location: ' . $url, true, $permanent ? 301 : 302);

    exit();
}

Redirect('https://webtech3d.ddns.net/index.html', false);
