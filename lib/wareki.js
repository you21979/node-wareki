'use strict';
var SPEC = require('./spec');

(function(_){
    var checkWareki = function(f, y){
        return ( y >= 1 && y <= SPEC.END_OF_WAREKI[f] )
    }
    var convertSeireki = function(f, y){
        return SPEC.SEIREKI[f] + (y - 1)
    }
    var convertWareki = function(f, y){
        return (y + 1) - SPEC.SEIREKI[f]
    }
    _.fromWareki = function(m, y){
        if(typeof y !== "number") y = parseInt(y)
        var f = SPEC.MIN_TO_FULL[m];
        if(f && checkWareki(f, y)){
            return convertSeireki(f, y);
        }
        return -1;
    }
    _.toWareki = function(y){
        if(typeof y !== "number") y = parseInt(y)
        for(var i = 0; i < SPEC.SEIREKI_TUPLE.length; ++i){
            if(y > SPEC.SEIREKI_TUPLE[i][1] - 1){
                var m = (SPEC.SEIREKI_TUPLE[i][0])[0];
                return [m, convertWareki(SPEC.SEIREKI_TUPLE[i][0], y)]
            }
        }
        return []
    }
}(exports))
