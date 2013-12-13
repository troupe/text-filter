var textFilter = require('../lib/text-filter');
var assert = require('assert');

var fixture = [
 { name: 'Alley-Kat-Abra', description: 'Feline magician formerly with the Zoo Crew' },
 { name: 'Azrael', description: 'Gargamel\'s red cat' },
 { name: 'Bill the Cat', description: 'A largely comatose orange tabby' },
 { name: 'Blacksad', description: 'Main character of graphic novel series.' },
 { name: 'Bucky Katt', description: 'selfish, cynical, and lazy. His ears are nearly always drawn laid back flat on his head, a feline sign of defiance, aggressiveness and/or unfriendliness' },
 { name: 'Catbert Dilbert', description: 'The evil human resources director' }
];

var simpleFixture = fixture.map(function(f) { return f.description; });

describe('text-filter', function() {

  it('should find the right phrases in a text array', function() {
    var result = simpleFixture.filter(textFilter({ query: 'resour' }));
    assert.equal(result.length, 1);
    assert.equal(result[0], 'The evil human resources director');
  });

  it('should find the right phrases in a object array', function() {
    var result = fixture.filter(textFilter({ query: 'Kat', fields: ['name', 'description'] }));
    assert.equal(result.length, 2);
    assert.equal(result[0].name, 'Alley-Kat-Abra');
    assert.equal(result[1].name, 'Bucky Katt');
  });

  it('should handle undefined fields', function() {
    var result = fixture.filter(textFilter({ query: 'Kat', fields: ['name', 'description', 'bob'] }));
    assert.equal(result.length, 2);
    assert.equal(result[0].name, 'Alley-Kat-Abra');
    assert.equal(result[1].name, 'Bucky Katt');
  });


  it('should not find text in the middle of words', function() {
    var result = fixture.filter(textFilter({ query: 'ucky', fields: ['name', 'description'] }));
    assert.equal(result.length, 0);
  });


});