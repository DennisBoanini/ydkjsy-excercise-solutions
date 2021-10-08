const tap = require('tap');
const scheduleMeeting = require('../comparisons');

tap.notOk(scheduleMeeting("07:00", 15), "Start at 7");
tap.notOk(scheduleMeeting("07:15", 30), "Start at 7,15");
tap.ok(scheduleMeeting("07:30", 30), "Start at 7,30");
tap.ok(scheduleMeeting("11:30", 60), "Start at 11,30");
tap.ok(scheduleMeeting("17:00", 45), "Start at 17");
tap.notOk(scheduleMeeting("17:30", 30), "Start at 17,30");
tap.notOk(scheduleMeeting("18:00", 30), "Start at 18");
