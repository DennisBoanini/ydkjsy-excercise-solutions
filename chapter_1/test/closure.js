const tap = require('tap');
const range = require('../closure');

tap.same(range(3, 3), [3]);
tap.same(range(3, 8), [3, 4, 5, 6, 7, 8]);
tap.same(range(3, 0), []);

const start3 = range(3);
tap.same(start3(3), [3]);
tap.same(start3(8), [3, 4, 5, 6, 7, 8]);
tap.same(start3(0), []);

const start4 = range(4);
tap.same(start4(6), [4, 5, 6]);
