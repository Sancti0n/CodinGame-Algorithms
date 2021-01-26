<?php
while (TRUE)
{
    $max = 0;
    $rang = 0;
    for ($i = 0; $i < 8; $i++) {
        fscanf(STDIN, "%d", $mountainH);
        if ($max < $mountainH) {
            $max = $mountainH;
            $rang = $i;
        }
    }
    echo($rang);
    echo("\n");
}
?>