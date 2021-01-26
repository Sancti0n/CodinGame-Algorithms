<?php
fscanf(STDIN, "%d", $n);
$inputs = explode(" ", fgets(STDIN));
$minimum = 0;
$tab = [];
$tab2 = [];
$indices = [];
$test = [];

if ($n === 0) { echo 0; }
else {
    for ($i=0; $i<$n; $i++) {
        $tab[$i] = intval($inputs[$i]);
        $tab2[$i] = abs(0 - $tab[$i]);
        $minimum = $tab[array_keys($tab2, min($tab2))[0]];

        if (abs($tab[$i]) === abs($minimum)) { $indices[$i] = $tab[$i]; }
    }
    if (sizeof(array_keys($indices, -$minimum)) >=1 && sizeof(array_keys($indices, $minimum)) >= 1) { echo abs($minimum); }
    else { echo $minimum; }
}
?>