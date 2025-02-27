<!-- https://www.codewars.com/kata/565f5825379664a26b00007c/train/php -->

<?php

function getSize($width, $height, $depth){
        $surface =   2 * ($width * $height) +  2 * ($width * $depth) +  2 * ($depth * $height); 
        $volume = $width * $height * $depth;
        return [$surface, $volume];
};

print_r(getSize(4, 2, 6));