var MomentParser = require('..');
var _ = require('underscore');
var expect = require('chai').expect;
var moment = require('moment');

var parser = new MomentParser();

var now = moment.utc('2015-01-01T01:02:03.456');

describe('Full duration grammar expression parsing', function() {
    var tests = {
        '1 year and 2 months':
            moment.duration({year: 1, month:2}),
        '1 year and 00:23:45':
            moment.duration({year: 1, minute:23, second:45})
    };

    _.each(tests, function(duration, input) {
        it('handles "' + input + '"', function() {
            expect(parser.parseAsMoment(input)).deep.equal(duration);
        });
    });

});
