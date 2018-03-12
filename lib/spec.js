'use strict';
(function(_){
    _.SEIREKI = {
        RESERVE : 2019,
        HEISEI : 1989,
        SHOWA : 1926,
        TAISHO : 1912,
        MEIJI : 1868,
    }
    _.END_OF_WAREKI = {
        RESERVE : 99,
        HEISEI : 31,
        SHOWA : 64,
        TAISHO : 15,
        MEIJI : 45,
    }
    _.MIN_TO_FULL = {
        H : "HEISEI",
        S : "SHOWA",
        T : "TAISHO",
        M : "MEIJI",
    }
    _.SEIREKI_TUPLE = Object.keys(_.SEIREKI).
        map(function(k){ return [k, _.SEIREKI[k]] }).
        sort(function(a, b){
            if(a[1] > b[1]) return -1
            else if(a[1] > b[1]) return 1
            else return 0
        });
}(exports))
