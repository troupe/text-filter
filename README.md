text-filter
===========

A nano-scale module to match text in arrays.

## Search String Arrays

    var fixture = [
     'Alley-Kat-Abra',
     'Azrael',
     'Bill the Cat',
     'Blacksad',
     'Bucky Katt',
     'Catbert Dilbert'
    ];

    var result = fixture.filter(textFilter({ query: 'Kat' }));
    //  result = [
    //    'Alley-Kat-Abra',
    //    'Bucky Katt'
    //  ];



## Search Object Arrays

    var fixture = [
     { name: 'Alley-Kat-Abra', description: 'Feline magician formerly with the Zoo Crew' },
     { name: 'Azrael', description: 'Gargamel\'s red cat' },
     { name: 'Bill the Cat', description: 'A largely comatose orange tabby' },
     { name: 'Blacksad', description: 'Main character of graphic novel series.' },
     { name: 'Bucky Katt', description: 'selfish, cynical, and lazy. His ears are nearly always drawn laid back flat on his head, a feline sign of defiance, aggressiveness and/or unfriendliness' },
     { name: 'Catbert Dilbert', description: 'The evil human resources director' }
    ];

    var result = fixture.filter(textFilter({ query: 'Kat', fields: ['name', 'description'] }));
    //  result = [
    //    { name: 'Alley-Kat-Abra', ... },
    //    { name: 'Bucky Katt', ...
    //  ];


