var assert = require('assert');
var w = require('..');
describe('wareki', function() {
    it('meiji', function() {
        assert(w.fromWareki('M', '00') === -1);
        assert(w.fromWareki('M', '01') === 1868);
        assert(w.fromWareki('M', '02') === 1869);
        assert(w.fromWareki('M', '44') === 1911);
        assert(w.fromWareki('M', '45') === 1912);
        assert(w.fromWareki('M', '46') === -1);
    });
    it('taisho', function() {
        assert(w.fromWareki('T', '00') === -1);
        assert(w.fromWareki('T', '01') === 1912);
        assert(w.fromWareki('T', '02') === 1913);
        assert(w.fromWareki('T', '14') === 1925);
        assert(w.fromWareki('T', '15') === 1926);
        assert(w.fromWareki('T', '16') === -1);
    });
    it('showa', function() {
        assert(w.fromWareki('S', '00') === -1);
        assert(w.fromWareki('S', '01') === 1926);
        assert(w.fromWareki('S', '02') === 1927);
        assert(w.fromWareki('S', '63') === 1988);
        assert(w.fromWareki('S', '64') === 1989);
        assert(w.fromWareki('S', '65') === -1);
    });
    it('heisei', function() {
        assert(w.fromWareki('H', '00') === -1);
        assert(w.fromWareki('H', '01') === 1989);
        assert(w.fromWareki('H', '02') === 1990);
        assert(w.fromWareki('H', '99') === 2087);
        assert(w.fromWareki('H', '100') === -1);
    });
});
describe('seireki', function() {
    it('meiji', function() {
        assert(w.toWareki('1868')[0] === 'M');
        assert(w.toWareki('1868')[1] === 1);
        assert(w.toWareki('1869')[0] === 'M');
        assert(w.toWareki('1869')[1] === 2);
        assert(w.toWareki('1911')[0] === 'M');
        assert(w.toWareki('1911')[1] === 44);
    });
    it('taisho', function() {
        assert(w.toWareki('1912')[0] === 'T');
        assert(w.toWareki('1912')[1] === 1);
        assert(w.toWareki('1913')[0] === 'T');
        assert(w.toWareki('1913')[1] === 2);
        assert(w.toWareki('1925')[0] === 'T');
        assert(w.toWareki('1925')[1] === 14);
    });
    it('showa', function() {
        assert(w.toWareki('1926')[0] === 'S');
        assert(w.toWareki('1926')[1] === 1);
        assert(w.toWareki('1927')[0] === 'S');
        assert(w.toWareki('1927')[1] === 2);
        assert(w.toWareki('1988')[0] === 'S');
        assert(w.toWareki('1988')[1] === 63);
    });
    it('heisei', function() {
        assert(w.toWareki('1989')[0] === 'H');
        assert(w.toWareki('1989')[1] === 1);
        assert(w.toWareki('1990')[0] === 'H');
        assert(w.toWareki('1990')[1] === 2);
    });
});
