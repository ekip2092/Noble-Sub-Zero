// Noble Sub-Zero Service — site content data.
// All copy is original. Phone, email, and claims are brand-wide constants.
// Copy rule: no dashes or hyphens in visible text except brand names like Sub-Zero.

export const BRAND = {
  name: 'Noble Sub-Zero Service',
  navName: 'Noble Sub-Zero and Wolf Service',
  short: 'Noble',
  phone: '(747) 444-4849',
  tel: '+17474444849',
  email: 'contact@noblesubzeroservice.com',
  domain: 'https://noblesubzeroservice.com',
  hours: 'Open daily, 7am to 7pm',
  base: 'Los Angeles, CA',
  diagnostic: '$89',
  warrantyYears: '3',
  years: '27',
};

// ---------------------------------------------------------------------------
// Cities. slug => page sub-zero-repair-<slug>.html
// intro: unique opening line(s) for the city page. hoods: local areas served.
// ---------------------------------------------------------------------------
export const REGIONS = [
  'Westside',
  'Hollywood & Central LA',
  'South Bay',
  'San Fernando Valley',
  'Pasadena & the Foothills',
  'Conejo Valley & Ventura County',
  'Malibu & the Canyons',
  'Beyond Los Angeles',
];

export const CITIES = [
  {
    slug: 'bel-air', name: 'Bel Air', region: 'Westside',
    hoods: ['East Gate', 'West Gate', 'Stone Canyon', 'Bel Air Crest', 'Moraga Drive'],
    nearby: ['beverly-hills', 'holmby-hills', 'brentwood'],
    intro: 'Behind the gates of Bel Air, kitchens are built to disappear into the architecture. Sub-Zero columns hidden behind custom panels, Wolf ranges set into stone islands. When one goes down, you want a tech who has worked in rooms like yours a thousand times.',
  },
  {
    slug: 'beverly-hills', name: 'Beverly Hills', region: 'Westside',
    hoods: ['The Flats', 'Trousdale Estates', 'Benedict Canyon', 'The Golden Triangle', 'Beverly Hills Post Office'],
    nearby: ['bel-air', 'century-city', 'holmby-hills'],
    intro: 'From Trousdale to The Flats, Beverly Hills kitchens set the standard the rest of the city copies. We help keep them that way. Quietly, carefully, and usually the same week you call.',
  },
  {
    slug: 'brentwood', name: 'Brentwood', region: 'Westside',
    hoods: ['Brentwood Park', 'Mandeville Canyon', 'Crestwood Hills', 'Kenter Canyon', 'Brentwood Glen'],
    nearby: ['pacific-palisades', 'santa-monica', 'bel-air'],
    intro: 'Brentwood entertains at home, and a warm refrigerator two days before a dinner party is not an option. Our techs run Mandeville to San Vicente with the parts that matter already on the truck.',
  },
  {
    slug: 'century-city', name: 'Century City', region: 'Westside',
    hoods: ['Century Towers', 'Le Parc', 'Century Hill', 'The Century'],
    nearby: ['beverly-hills', 'westchester', 'culver-city'],
    intro: 'High rise living in Century City means service that respects doormen, freight elevators, and quiet hours. We coordinate with your building so the repair happens and the neighbors never notice.',
  },
  {
    slug: 'culver-city', name: 'Culver City', region: 'Westside',
    hoods: ['Culver Crest', 'Carlson Park', 'Sunkist Park', 'Blair Hills', 'Fox Hills'],
    nearby: ['playa-vista', 'westchester', 'marina-del-rey'],
    intro: 'Culver City kitchens mix studio era bungalows with brand new builds, and the appliances span decades too. We service every Sub-Zero generation, from the classic 500 series to the newest integrated columns.',
  },
  {
    slug: 'hollywood', name: 'Hollywood', region: 'Hollywood & Central LA',
    hoods: ['Hollywood Hills', 'Outpost Estates', 'Whitley Heights', 'Sunset Square', 'Beachwood Canyon'],
    nearby: ['los-feliz', 'hancock-park', 'studio-city'],
    intro: 'Hillside streets, tight driveways, kitchens with a view. Hollywood repairs go better with a crew that plans ahead. Ours shows up with the panel clamps, the floor protection, and the patience canyon houses demand.',
  },
  {
    slug: 'los-feliz', name: 'Los Feliz', region: 'Hollywood & Central LA',
    hoods: ['The Oaks', 'Laughlin Park', 'Franklin Hills', 'Los Feliz Estates'],
    nearby: ['hollywood', 'glendale', 'hancock-park'],
    intro: 'Los Feliz keeps its 1920s character and its modern appliances, and making those two get along takes skill. We service built in Sub-Zero units in kitchens where every cabinet panel is one of a kind.',
  },
  {
    slug: 'malibu', name: 'Malibu', region: 'Malibu & the Canyons',
    hoods: ['Point Dume', 'Malibu Colony', 'Carbon Beach', 'Broad Beach', 'Serra Retreat', 'Paradise Cove'],
    nearby: ['pacific-palisades', 'topanga', 'calabasas'],
    intro: 'Salt air is hard on condensers, and PCH is hard on scheduling. We run dedicated Malibu routes so a Point Dume wine cellar or a Colony kitchen never waits on traffic to get fixed.',
  },
  {
    slug: 'marina-del-rey', name: 'Marina del Rey', region: 'Westside',
    hoods: ['Silver Strand', 'Marina Peninsula', 'Via Marina', 'Mariners Village'],
    nearby: ['playa-del-rey', 'culver-city', 'westchester'],
    intro: 'Life in Marina del Rey is vertical, coastal, and humid. That combination works refrigeration hard. We keep marina kitchens running through every season of sea air.',
  },
  {
    slug: 'pacific-palisades', name: 'Pacific Palisades', region: 'Westside',
    hoods: ['The Riviera', 'Huntington Palisades', 'Rustic Canyon', 'Castellammare', 'The Highlands'],
    nearby: ['brentwood', 'santa-monica', 'malibu'],
    intro: 'From the Riviera to the Highlands, Palisades homes are built around family kitchens that cannot go dark. We hold weekly slots for the 90272, and same day when the refrigerator is warm.',
  },
  {
    slug: 'playa-del-rey', name: 'Playa del Rey', region: 'Westside',
    hoods: ['The Bluffs', 'Del Rey Lagoon', 'The Jungle'],
    nearby: ['playa-vista', 'westchester', 'marina-del-rey'],
    intro: 'Playa del Rey is a small beach town with serious kitchens. We give it the same factory trained Sub-Zero and Wolf service as anywhere else on our map, without the big city wait.',
  },
  {
    slug: 'playa-vista', name: 'Playa Vista', region: 'Westside',
    hoods: ['Concert Park', 'The Runway district', 'Crescent Park'],
    nearby: ['playa-del-rey', 'culver-city', 'westchester'],
    intro: 'Playa Vista homes are young, but builder installed appliances still age on schedule. When the first repair after warranty shows up, we are the call your neighbors have already made.',
  },
  {
    slug: 'santa-monica', name: 'Santa Monica', region: 'Westside',
    hoods: ['North of Montana', 'Santa Monica Canyon', 'Ocean Park', 'Sunset Park', 'Wilshire Montana'],
    nearby: ['pacific-palisades', 'brentwood', 'marina-del-rey'],
    intro: 'North of Montana or south of Pico, Santa Monica expects service that shows up on time and leaves no trace. That is a Noble visit, door to door.',
  },
  {
    slug: 'westchester', name: 'Westchester', region: 'Westside',
    hoods: ['Kentwood', 'Loyola Village', 'Westport Heights', 'Osage'],
    nearby: ['playa-del-rey', 'el-segundo', 'culver-city'],
    intro: 'Westchester sits minutes from both our South Bay and Westside routes. For Kentwood and Loyola Village kitchens that means flexible windows and fast parts turnaround.',
  },
  {
    slug: 'el-segundo', name: 'El Segundo', region: 'South Bay',
    hoods: ['Smoky Hollow', 'Downtown El Segundo', 'The east side'],
    nearby: ['manhattan-beach', 'westchester', 'hermosa-beach'],
    intro: 'El Segundo households run on routine, and a dead ice maker breaks it. We put the routine back. Diagnosed on the first visit, fixed with genuine parts, backed for three years.',
  },
  {
    slug: 'hermosa-beach', name: 'Hermosa Beach', region: 'South Bay',
    hoods: ['The Strand', 'The Sand Section', 'The Hill Section', 'East Hermosa'],
    nearby: ['manhattan-beach', 'redondo-beach', 'el-segundo'],
    intro: 'Strand houses trade square footage for ocean, which makes every built in appliance a precision fit. We work tight Hermosa kitchens without scuffing a single surface.',
  },
  {
    slug: 'manhattan-beach', name: 'Manhattan Beach', region: 'South Bay',
    hoods: ['The Strand', 'The Sand Section', 'The Tree Section', 'The Hill Section', 'East Manhattan'],
    nearby: ['hermosa-beach', 'el-segundo', 'redondo-beach'],
    intro: 'Manhattan Beach rebuilt itself around chef grade kitchens, and Sub-Zero columns anchor most of them. We keep the Tree Section to the Strand cold, calibrated, and quiet.',
  },
  {
    slug: 'palos-verdes', name: 'Palos Verdes', region: 'South Bay',
    hoods: ['Palos Verdes Estates', 'Rancho Palos Verdes', 'Rolling Hills', 'Rolling Hills Estates', 'Lunada Bay'],
    nearby: ['redondo-beach', 'hermosa-beach', 'manhattan-beach'],
    intro: 'The Hill is a drive most repair companies quietly avoid. We schedule Palos Verdes like the destination it is. Full routes, stocked trucks, no surcharge for the view.',
  },
  {
    slug: 'redondo-beach', name: 'Redondo Beach', region: 'South Bay',
    hoods: ['The Esplanade', 'Hollywood Riviera', 'North Redondo', 'South Redondo'],
    nearby: ['hermosa-beach', 'palos-verdes', 'manhattan-beach'],
    intro: 'From the Esplanade to the Riviera, Redondo kitchens get the same factory trained care we bring to every coastal route. Around here we always recommend regular condenser service, because salt air never takes a day off.',
  },
  {
    slug: 'encino', name: 'Encino', region: 'San Fernando Valley',
    hoods: ['Amestoy Estates', 'Encino Hills', 'Rancho Estates', 'South of the Boulevard'],
    nearby: ['sherman-oaks', 'tarzana', 'studio-city'],
    intro: 'Encino estates run big. Double columns, full size wine storage, 48 inch ranges. Our techs are certified on all of it, and when a Valley heat wave hits, a warm fridge moves you to the front of the line.',
  },
  {
    slug: 'granada-hills', name: 'Granada Hills', region: 'San Fernando Valley',
    hoods: ['Knollwood', 'O’Melveny', 'The Balboa corridor'],
    nearby: ['porter-ranch', 'chatsworth', 'sherman-oaks'],
    intro: 'When a Granada Hills refrigerator quits in a 105 degree August, hours matter. Warm fridge calls get priority across the north Valley, seven days a week.',
  },
  {
    slug: 'porter-ranch', name: 'Porter Ranch', region: 'San Fernando Valley',
    hoods: ['The Vineyards', 'Renaissance', 'Westcliffe', 'Porter Ranch Estates'],
    nearby: ['granada-hills', 'chatsworth', 'woodland-hills'],
    intro: 'Porter Ranch builds new, and new construction means integrated appliances behind panels that match nothing else in the world. We open them, service them, and reseat them without a mark.',
  },
  {
    slug: 'sherman-oaks', name: 'Sherman Oaks', region: 'San Fernando Valley',
    hoods: ['Longridge Estates', 'Royal Woods', 'Chandler Estates', 'South of Ventura'],
    nearby: ['studio-city', 'encino', 'toluca-lake'],
    intro: 'Sherman Oaks kitchens work hard. Families, entertaining, summer heat. We keep the Sub-Zero cold and the Wolf lighting on the first click, with appointments that respect your calendar.',
  },
  {
    slug: 'studio-city', name: 'Studio City', region: 'San Fernando Valley',
    hoods: ['Colfax Meadows', 'Longridge', 'Fryman Canyon', 'The Silver Triangle'],
    nearby: ['sherman-oaks', 'toluca-lake', 'hollywood'],
    intro: 'Studio City schedules are unforgiving, so ours flex. Early windows, tight arrival estimates, and a lead tech who calls before the truck turns onto your street.',
  },
  {
    slug: 'tarzana', name: 'Tarzana', region: 'San Fernando Valley',
    hoods: ['Braemar', 'Mulholland Park', 'Melody Acres', 'The Tarzana hills'],
    nearby: ['encino', 'woodland-hills', 'calabasas'],
    intro: 'South of the Boulevard, Tarzana runs on gated privacy and full size kitchens. We work well with both. Discreet arrivals, complete repairs, and three years behind every part we install.',
  },
  {
    slug: 'woodland-hills', name: 'Woodland Hills', region: 'San Fernando Valley',
    hoods: ['Walnut Acres', 'Vista de Oro', 'Warner Center', 'South of the Boulevard'],
    nearby: ['tarzana', 'calabasas', 'porter-ranch'],
    intro: 'Woodland Hills summers are the hardest test a refrigerator faces in Los Angeles. When yours goes warm out here, we treat it with same day urgency, because we know exactly what July does to a struggling compressor.',
  },
  {
    slug: 'chatsworth', name: 'Chatsworth', region: 'San Fernando Valley',
    hoods: ['Monteria Estates', 'Indian Springs', 'Stoney Point', 'Chatsworth Lake Manor'],
    nearby: ['porter-ranch', 'granada-hills', 'woodland-hills'],
    intro: 'Chatsworth ranch properties sit a long way from the nearest service center, unless the service center comes to you. We cover the northwest Valley on a standing route.',
  },
  {
    slug: 'altadena', name: 'Altadena', region: 'Pasadena & the Foothills',
    hoods: ['Christmas Tree Lane', 'The Meadows', 'Janes Village', 'President streets'],
    nearby: ['pasadena', 'la-canada-flintridge', 'sierra-madre'],
    intro: 'Altadena craftsman kitchens deserve repairs done the craftsman way. Carefully, completely, and built to last. We bring factory training to the foothills.',
  },
  {
    slug: 'glendale', name: 'Glendale', region: 'Pasadena & the Foothills',
    hoods: ['Rossmoyne', 'Verdugo Woodlands', 'Oakmont', 'Chevy Chase Canyon', 'Adams Hill'],
    nearby: ['la-canada-flintridge', 'pasadena', 'los-feliz'],
    intro: 'From Rossmoyne to Chevy Chase Canyon, Glendale hillside homes trust us with the two appliances that anchor the kitchen. The cold one and the hot one.',
  },
  {
    slug: 'la-canada-flintridge', name: 'La Cañada Flintridge', region: 'Pasadena & the Foothills',
    hoods: ['Flintridge', 'Alta Canyada', 'The Sagebrush district'],
    nearby: ['pasadena', 'glendale', 'altadena'],
    intro: 'La Cañada kitchens are family infrastructure. Lunches, holidays, everything in between. We keep that infrastructure running with weekly foothill appointments.',
  },
  {
    slug: 'pasadena', name: 'Pasadena', region: 'Pasadena & the Foothills',
    hoods: ['Oak Knoll', 'Linda Vista', 'San Rafael', 'Madison Heights', 'Bungalow Heaven'],
    nearby: ['san-marino', 'altadena', 'sierra-madre'],
    intro: 'Pasadena has been keeping beautiful houses for a century, and we service the kitchens inside them. Everything from Greene and Greene era remodels to brand new Oak Knoll builds.',
  },
  {
    slug: 'san-marino', name: 'San Marino', region: 'Pasadena & the Foothills',
    hoods: ['The Huntington district', 'Lacy Park', 'The Mission district'],
    nearby: ['pasadena', 'sierra-madre', 'altadena'],
    intro: 'San Marino homes are kept, not just owned. We match that standard. Uniformed techs, protected floors, and repairs documented down to the part number.',
  },
  {
    slug: 'sierra-madre', name: 'Sierra Madre', region: 'Pasadena & the Foothills',
    hoods: ['The Canyon', 'The Village', 'Upper Sierra Madre'],
    nearby: ['pasadena', 'altadena', 'san-marino'],
    intro: 'Sierra Madre likes its small town quiet. We arrive, fix the refrigerator, and leave. The only evidence is a kitchen that works perfectly again.',
  },
  {
    slug: 'agoura-hills', name: 'Agoura Hills', region: 'Conejo Valley & Ventura County',
    hoods: ['Old Agoura', 'Morrison Ranch', 'Lake Lindero', 'Liberty Canyon'],
    nearby: ['calabasas', 'westlake-village', 'thousand-oaks'],
    intro: 'Agoura Hills sits at the edge of most companies’ service maps. It sits in the middle of ours. Standing Conejo routes mean nobody waits for a truck to finally get out there.',
  },
  {
    slug: 'calabasas', name: 'Calabasas', region: 'Conejo Valley & Ventura County',
    hoods: ['The Oaks', 'Calabasas Park', 'Mont Calabasas', 'Mulholland Heights', 'Park Moderne'],
    nearby: ['hidden-hills', 'woodland-hills', 'agoura-hills'],
    intro: 'Calabasas kitchens get photographed as often as they get cooked in, and both jobs demand appliances that perform. We keep The Oaks and Calabasas Park ready for either.',
  },
  {
    slug: 'hidden-hills', name: 'Hidden Hills', region: 'Conejo Valley & Ventura County',
    hoods: ['Round Meadow', 'Long Valley', 'Spring Valley'],
    nearby: ['calabasas', 'woodland-hills', 'agoura-hills'],
    intro: 'Behind the gates of Hidden Hills, service means clearance at the guard house and total discretion past it. We handle both as a matter of routine.',
  },
  {
    slug: 'moorpark', name: 'Moorpark', region: 'Conejo Valley & Ventura County',
    hoods: ['Moorpark Highlands', 'Campus Park', 'Mountain Meadows', 'Serenata'],
    nearby: ['simi-valley', 'thousand-oaks', 'westlake-village'],
    intro: 'Moorpark homeowners used to drive their appliance problems over the hill. Now the factory trained truck drives to Moorpark. Same diagnostic, same warranty, no hill.',
  },
  {
    slug: 'simi-valley', name: 'Simi Valley', region: 'Conejo Valley & Ventura County',
    hoods: ['Wood Ranch', 'Bridle Path', 'Big Sky', 'Indian Hills'],
    nearby: ['moorpark', 'thousand-oaks', 'chatsworth'],
    intro: 'From Wood Ranch to Bridle Path, Simi Valley gets full Noble coverage. Sub-Zero refrigeration, Wolf cooking, and maintenance plans that prevent the next call.',
  },
  {
    slug: 'thousand-oaks', name: 'Thousand Oaks', region: 'Conejo Valley & Ventura County',
    hoods: ['North Ranch', 'Lynn Ranch', 'Conejo Oaks', 'Lake Sherwood'],
    nearby: ['westlake-village', 'agoura-hills', 'moorpark'],
    intro: 'Thousand Oaks estates, North Ranch especially, run appliance suites that rival showrooms. We service the whole suite in one visit whenever parts allow.',
  },
  {
    slug: 'westlake-village', name: 'Westlake Village', region: 'Conejo Valley & Ventura County',
    hoods: ['Westlake Island', 'First Neighborhood', 'Three Springs', 'North Ranch borders'],
    nearby: ['thousand-oaks', 'agoura-hills', 'calabasas'],
    intro: 'Lakeside living in Westlake Village comes with entertaining obligations, and entertaining runs on refrigeration. We keep the island and the shore ready for guests.',
  },
  {
    slug: 'topanga', name: 'Topanga', region: 'Malibu & the Canyons',
    hoods: ['Fernwood', 'Old Canyon', 'Viewridge', 'Top of Topanga'],
    nearby: ['malibu', 'pacific-palisades', 'calabasas'],
    intro: 'Canyon roads scare off plenty of service trucks. We drive Topanga anyway, because a Fernwood kitchen deserves the same care as one on the Golden Triangle.',
  },
  {
    slug: 'holmby-hills', name: 'Holmby Hills', region: 'Westside',
    hoods: ['The Mapleton corridor', 'Holmby Park', 'Comstock Hills'],
    nearby: ['bel-air', 'beverly-hills', 'century-city'],
    intro: 'Holmby Hills estates are staffed, scheduled, and private. We work cleanly inside all three. That means coordinating with house managers and leaving kitchens exactly as found, only colder.',
  },
  {
    slug: 'hancock-park', name: 'Hancock Park', region: 'Hollywood & Central LA',
    hoods: ['Windsor Square', 'Fremont Place', 'Larchmont', 'Brookside'],
    nearby: ['hollywood', 'los-feliz', 'beverly-hills'],
    intro: 'Hancock Park pairs 1920s architecture with modern appliance suites, and that pairing takes skill to service. We protect original cabinetry while bringing the machines back to factory performance.',
  },
  {
    slug: 'toluca-lake', name: 'Toluca Lake', region: 'San Fernando Valley',
    hoods: ['The Lake district', 'Toluca Woods', 'West Toluca'],
    nearby: ['studio-city', 'sherman-oaks', 'hollywood'],
    intro: 'Toluca Lake is a village that values relationships, and half our calls here start with a neighbor passing along our number. That is how we like to grow.',
  },
  {
    slug: 'newport-beach', name: 'Newport Beach', region: 'Beyond Los Angeles',
    hoods: ['Newport Coast', 'Corona del Mar', 'Balboa Island', 'Lido Isle', 'Crystal Cove'],
    nearby: ['palos-verdes', 'manhattan-beach', 'beverly-hills'],
    intro: 'Newport Beach kept asking, so we answered. Scheduled service days for Newport Coast, Corona del Mar, and the islands, with the same factory trained crew we send everywhere else.',
  },
  {
    slug: 'santa-barbara', name: 'Santa Barbara', region: 'Beyond Los Angeles',
    hoods: ['Montecito', 'Hope Ranch', 'The Riviera', 'The Upper East', 'Mission Canyon'],
    nearby: ['malibu', 'westlake-village', 'thousand-oaks'],
    intro: 'Montecito and Hope Ranch estates plan service like everything else. In advance, done right, once. We run dedicated Santa Barbara days for exactly that reason.',
  },
];

// ---------------------------------------------------------------------------
// Problem pages. slug => <slug>.html
// ---------------------------------------------------------------------------
export const PROBLEMS = [
  {
    slug: 'sub-zero-not-cooling',
    brand: 'sub-zero',
    title: 'Sub-Zero not cooling',
    nav: 'Not cooling',
    tagline: 'A warm Sub-Zero is an emergency. We treat it like one.',
    what: [
      'When a Sub-Zero drifts warm, it is almost never the whole machine. It is one link in the cold chain. A condenser choked with dust, an evaporator fan gone quiet, a tired compressor, or a sealed system leak slowly bleeding refrigerant.',
      'The wrong response is a guess. The right response is a structured diagnostic that isolates which link failed, confirms it with gauge and thermometer readings, and fixes that. Nothing more, nothing less.',
    ],
    causes: [
      ['Blocked condenser', 'Dust and pet hair blanket the coil. The unit runs constantly, cools poorly, and ages fast.'],
      ['Evaporator fan failure', 'Cold gets made but never moved. Sections drift warm while the compartment sounds normal.'],
      ['Sealed system leak', 'Refrigerant escapes at a weld or joint. Cooling fades over weeks. Gauge testing confirms it.'],
      ['Compressor wear', 'Older compressors lose capacity a little at a time. We measure output before condemning one.'],
      ['Control or sensor fault', 'A sensor misreads temperature and the unit follows bad data. We read what the board reads.'],
      ['Worn door seal', 'Warm, moist air sneaks in around a hardened gasket and overwhelms the system on hot days.'],
    ],
    faqs: [
      ['How fast can you get here?', 'Warm fridge calls jump the queue. In most of our service area we can be at your door the same day or next morning, seven days a week.'],
      ['Should I empty the refrigerator?', 'Not yet. Keep the doors closed. A loaded Sub-Zero holds safe temperature for hours. If we cannot restore cooling on the first visit, your tech will help you plan for the perishables.'],
      ['Is a 15 year old unit worth repairing?', 'Usually, yes. Sub-Zero builds these to run 20 years and more, and a properly repaired sealed system buys years of service for a fraction of replacement cost. Either way, we give you honest numbers and let you decide.'],
    ],
  },
  {
    slug: 'sub-zero-leaking-water',
    brand: 'sub-zero',
    title: 'Sub-Zero leaking water',
    nav: 'Leaking water',
    tagline: 'Water on the floor means a fault upstream. We find it before your floors pay for it.',
    what: [
      'Water at the base of a Sub-Zero has a short list of origins. A clogged defrost drain icing over and overflowing. A cracked or kinked water line to the ice maker. A tired inlet valve. Or a drain pan that shifted or split.',
      'Because built in units sit flush against cabinetry, small leaks can travel invisibly along the toe kick before they surface. We trace the water to its source, repair it with factory parts, and inspect the surrounding cavity so a slow drip never turns into a subfloor claim.',
    ],
    causes: [
      ['Clogged defrost drain', 'The most common source. Meltwater backs up, freezes into a sheet, and overflows into the compartment or onto the floor.'],
      ['Ice maker supply line', 'Plastic lines harden and split with age. We replace the line, route it properly, and pressure test it.'],
      ['Water inlet valve', 'A valve that no longer seats fully weeps constantly. Slow, silent, and destructive.'],
      ['Displaced drain pan', 'After moves or floor work, pans shift. Condensate misses the pan and finds the hardwood.'],
    ],
    faqs: [
      ['Should I shut off the water?', 'If the leak is active and you can reach the supply valve, yes. Then call us. If not, towels at the toe kick, keep the doors closed, and know that active leak calls get priority.'],
      ['Can a leak damage the unit itself?', 'It can corrode hinges, rust the base pan, and short low voltage connections. Fixing it early costs far less than fixing it late.'],
      ['Do you repair the floor too?', 'We stop the water and document the source in writing. That documentation is exactly what your flooring contractor and insurer will ask for.'],
    ],
  },
  {
    slug: 'sub-zero-ice-maker-repair',
    brand: 'sub-zero',
    title: 'Sub-Zero ice maker repair',
    nav: 'Ice maker',
    tagline: 'No ice, hollow cubes, or a bin frozen into one giant block. All fixable, all common.',
    what: [
      'Sub-Zero ice systems fail in predictable ways. A fill valve that no longer delivers full volume. A frozen fill tube. A worn ice maker module. Or a bin sensor that tells the system to stop early.',
      'We carry the current factory ice maker assemblies and valves on the truck, which is why most ice calls end with ice production restored the same visit. While we are in there, we check water quality too, since scale is the quiet killer of ice systems.',
    ],
    causes: [
      ['Frozen fill tube', 'A weak fill valve lets water dribble and freeze in the tube until nothing gets through.'],
      ['Worn module or motor', 'Harvest cycles slow down, stall, or quit halfway, leaving crescent stubs or nothing at all.'],
      ['Scaled water valve', 'Hard water narrows the valve opening. Hollow cubes and shrinking output are the tell.'],
      ['Bin sensor fault', 'The system believes the bin is full and quietly stops making ice.'],
    ],
    faqs: [
      ['Why does the ice taste off?', 'Usually the filter is overdue, or the bin has absorbed freezer odors. We replace the filter, sanitize the bin, and check the door seal that let the odor in.'],
      ['How much ice should it make?', 'A healthy Sub-Zero ice maker fills roughly a bin a day. Much less than that is a service signal, not a quirk.'],
      ['Is it worth fixing versus ignoring?', 'Ice trouble is often the first symptom of a water supply or valve issue that will not stay contained. Fixing it early protects the rest of the unit.'],
    ],
  },
  {
    slug: 'wolf-burner-clicking',
    brand: 'wolf',
    title: 'Wolf burner clicking',
    nav: 'Burner clicking',
    tagline: 'Endless clicking with no flame, or clicking that never stops. Both have clean fixes.',
    what: [
      'A Wolf burner that clicks without lighting, or keeps clicking after it lights, is telling you about one of three things. Moisture in the igniter circuit, a fouled or cracked spark igniter, or a spark module starting to fail.',
      'The repair matters because the symptom is annoying but the cause can get worse. An igniter with a hairline crack arcs to the burner base, and a soaked switch can click every burner at once. We isolate the circuit, replace the failed part with factory components, and set the igniter gaps back to spec.',
    ],
    causes: [
      ['Moisture after cleaning or a boil over', 'Water in the burner wells shorts the spark circuit. Sometimes it dries out. Often it corrodes.'],
      ['Cracked or fouled igniter', 'Carbon buildup or a hairline crack bleeds the spark away from the flame path.'],
      ['Failing spark module', 'The module fires weakly or will not stop firing. Clicking that continues after ignition is its signature.'],
      ['Misaligned burner cap', 'A cap seated one notch off breaks the spark gap. The simplest fix on this list.'],
    ],
    faqs: [
      ['Is the clicking dangerous?', 'The clicking itself is not. Unburned gas from repeated failed ignition deserves respect, though. If you smell gas, stop using the cooktop and air the room out before calling.'],
      ['Can I fix it by drying the burners?', 'If it started right after cleaning, run the burners on low once one lights and let everything dry out. If the clicking is still there a day later, a component has been compromised.'],
      ['Do you service all Wolf models?', 'Yes. Rangetops, sealed burner ranges, dual fuel, and gas cooktops across generations. Our techs certify on current Wolf platforms every year.'],
    ],
  },
  {
    slug: 'sub-zero-error-code-ec-50',
    brand: 'sub-zero',
    title: 'Sub-Zero error code EC 50',
    nav: 'Error code EC 50',
    tagline: 'EC 50 is a defrost system fault. Ignore it and frost will finish the job.',
    what: [
      'EC 50 means the control board expected a defrost cycle to complete and it did not. The usual suspects are a failed defrost heater, a faulty defrost sensor, or a control relay that never switched the circuit on.',
      'The unit keeps cooling at first, which tempts people to dismiss the code. A few weeks later the evaporator is a block of ice, airflow dies, and a simple heater replacement has become a full thaw and repair visit. Call at the code, not at the frost.',
    ],
    causes: [
      ['Failed defrost heater', 'The element burns open and frost builds on the evaporator with every cycle.'],
      ['Defrost sensor fault', 'The sensor misreports coil temperature, so defrost ends immediately or never runs.'],
      ['Control relay failure', 'The board calls for defrost but the relay never closes the circuit.'],
    ],
    faqs: [
      ['Can I clear the code myself?', 'You can clear the display, but the fault will come back. The board keeps detecting a real failure. Clearing the code does not repair the circuit.'],
      ['Is the unit safe to run with EC 50?', 'Short term, yes. But frost is stacking up on the evaporator and efficiency drops every day. Getting us out within the week keeps this from becoming the expensive version of the repair.'],
      ['What does the repair involve?', 'We confirm which component failed, install factory replacement parts, do a controlled thaw if frost has built up, and watch a full defrost cycle complete before we leave.'],
    ],
  },
  {
    slug: 'sub-zero-error-code-ec-40',
    brand: 'sub-zero',
    title: 'Sub-Zero error code EC 40',
    nav: 'Error code EC 40',
    tagline: 'EC 40 points at the evaporator fan. The part that moves your cold air.',
    what: [
      'EC 40 means the control board has lost proper feedback from an evaporator fan motor. It is stalled, spinning out of spec, or electrically disconnected. Cold is still being made, but it is no longer moving where it needs to go.',
      'Common culprits are ice physically jamming the fan blade, often downstream of a defrost issue, a worn motor bearing, or a wiring harness fault. We figure out which one, and whether a defrost problem caused it, so the fix actually holds.',
    ],
    causes: [
      ['Ice jammed fan blade', 'Frost from a defrost fault grows into the fan path and stalls the blade.'],
      ['Worn fan motor', 'Bearings drag, speed falls out of spec, and the board flags the deviation.'],
      ['Harness or connector fault', 'Vibration works a connector loose and the feedback signal drops out.'],
    ],
    faqs: [
      ['The fan sounds loud lately. Related?', 'Very likely. A grinding or chirping fan is the bearing announcing itself before EC 40 appears. Early replacement is a smaller visit.'],
      ['Why is one section warm but not the other?', 'Sub-Zero uses dedicated systems and fans per zone. One failed fan warms one zone. That is a useful clue and we use it.'],
      ['Will it fail again?', 'Not if the root cause gets addressed. If ice jammed the fan, we repair the defrost fault too. Otherwise the new fan just meets the same ice.'],
    ],
  },
  {
    slug: 'sub-zero-error-code-ec-60',
    brand: 'sub-zero',
    title: 'Sub-Zero error code EC 60',
    nav: 'Error code EC 60',
    tagline: 'EC 60 flags the ice maker system before you notice the empty bin.',
    what: [
      'EC 60 is the control board reporting an ice maker fault. A harvest cycle that stalled, a fill that never completed, or sensor feedback outside the expected range. It is the machine asking for service while the problem is still small.',
      'Because the code covers the whole ice subsystem, a real diagnosis means testing the module, the fill valve, the water pressure, and the sensors in order. We do exactly that, with the common replacement parts already on the truck.',
    ],
    causes: [
      ['Stalled harvest cycle', 'The ice maker module weakens with age and stops partway through a harvest.'],
      ['Fill fault', 'A scaled valve or low water pressure leaves trays underfilled, and the system flags the shortfall.'],
      ['Sensor out of range', 'Sensor drift makes the board misjudge when ice is ready.'],
    ],
    faqs: [
      ['Ice still comes out. Do I need service?', 'EC 60 with working ice usually means the failure is intermittent. Intermittent becomes permanent. The early appointment is the cheap one.'],
      ['Is this related to the water filter?', 'It can be. A badly overdue filter drops pressure enough to trigger fill faults. Checking filter status is step one.'],
      ['Can you fix it in one visit?', 'Usually. Ice maker assemblies, valves, and sensors for current Sub-Zero platforms ride on every Noble truck.'],
    ],
  },
  {
    slug: 'sub-zero-service-light',
    brand: 'sub-zero',
    title: 'Sub-Zero service light on',
    nav: 'Service light',
    tagline: 'The service light is a request, not a mystery. We read it and act.',
    what: [
      'Depending on the model, a Sub-Zero service or wrench indicator most often means the condenser needs cleaning. Otherwise it flags a system fault the control board has logged. The light is deliberately conservative. It comes on before performance visibly suffers.',
      'A Noble visit reads the stored fault codes, cleans and inspects the condenser, checks temperatures against factory spec, and clears the light only after the underlying condition is actually resolved.',
    ],
    causes: [
      ['Condenser maintenance due', 'The most frequent trigger. The coil needs a proper cleaning to restore airflow.'],
      ['Logged system fault', 'The board recorded something out of range. Defrost, fan, sensor, or temperature recovery.'],
      ['Door ajar history', 'On some models, repeated long door openings add up to a service flag.'],
    ],
    faqs: [
      ['Can I just clear it?', 'On many models, yes. And it will come back if the cause remains. Treat it like an oil light. Reset it after the service, not instead of it.'],
      ['The unit seems fine. Is this urgent?', 'Not an emergency, but not decorative either. Book a normal appointment. Catching it here is what keeps it from becoming an error code visit.'],
      ['Is condenser cleaning really a pro job?', 'On built in units, yes. The coil sits behind the grille up top, the fins bend easily, and a full cleaning includes the fan and an airflow check. It is also the single best thing you can do for compressor life.'],
    ],
  },
  {
    slug: 'sub-zero-vacuum-condenser',
    brand: 'sub-zero',
    title: 'Sub-Zero condenser cleaning',
    nav: 'Condenser cleaning',
    tagline: 'The most valuable 45 minutes in your Sub-Zero’s life.',
    what: [
      'The condenser is where your Sub-Zero sheds heat. As dust, lint, and pet hair blanket the coil, the unit runs longer and hotter to do the same job, quietly burning compressor life and electricity until something fails on a holiday weekend.',
      'Our condenser service is a full airflow restoration. Grille off, coil vacuumed and flushed, condenser fan cleaned and checked, temperatures verified against factory spec before we button it up. Sub-Zero itself recommends this every 6 to 12 months, and most failures we see trace back to years without it.',
    ],
    causes: [
      ['Why it clogs', 'The condenser fan pulls room air, and everything in it, through the coil all day long. Kitchens with pets or open floor plans clog fastest.'],
      ['What neglect costs', 'Longer run cycles, higher electric bills, struggles in warm weather, and early compressor failure. That last one is the most expensive repair on the machine.'],
      ['What service restores', 'Factory spec airflow, shorter cycles, quieter running, and headroom for the next heat wave.'],
    ],
    faqs: [
      ['How often should it be done?', 'Every 6 to 12 months, straight from Sub-Zero’s own guidance. Once a year at minimum. Every six months if you have shedding pets.'],
      ['Can I do it with a household vacuum?', 'You can improve the grille area, but the full coil face, the fan blades, and the airflow check need the panel work and tools of a service visit. Bent fins from home brushing are a repair we see all the time.'],
      ['Is this included in the maintenance plan?', 'Yes. Scheduled condenser service is the backbone of the Noble maintenance plan, along with seal inspection, temperature calibration, and a full system check.'],
    ],
  },
];

// Sub-Zero problem topics shown on the problems hub that link to detail pages
export const SZ_HUB = [
  { title: 'Not cooling', link: 'sub-zero-not-cooling.html', desc: 'Warm compartments, constant running, or a slow drift away from the set temperature.' },
  { title: 'Leaking water', link: 'sub-zero-leaking-water.html', desc: 'Water at the toe kick, in the compartment, or pooling under the unit.' },
  { title: 'Ice maker down', link: 'sub-zero-ice-maker-repair.html', desc: 'No ice, hollow cubes, off taste, or a harvest that never finishes.' },
  { title: 'Excess frost', link: null, desc: 'Snow on the evaporator panel or frost lines creeping into the compartment.' },
  { title: 'Door seal failure', link: null, desc: 'Condensation at the gasket, doors that need a push, warm edges.' },
  { title: 'Unusual noise', link: null, desc: 'Grinding, chirping, or rattling. Usually a fan or compressor mount announcing itself.' },
  { title: 'Error codes', link: 'sub-zero-error-code-ec-50.html', desc: 'EC 50, EC 40, EC 60, and the service light. Each has a specific meaning and fix.' },
  { title: 'Wine storage drift', link: null, desc: 'Zones that will not hold their set temperature. For a collection, that is an emergency, and we treat it quietly.' },
];

export const WOLF_HUB = [
  { title: 'Oven not heating', link: null, desc: 'Long preheats, no heat, or heat that cuts out partway through a roast.' },
  { title: 'Uneven baking', link: null, desc: 'One side browns first. Convection fan, element, or calibration.' },
  { title: 'Burner clicking', link: 'wolf-burner-clicking.html', desc: 'Igniters that click without lighting, or never stop clicking.' },
  { title: 'Flame control', link: null, desc: 'Simmers that die, flames that surge, or burners stuck on high.' },
  { title: 'Display or touchpad faults', link: null, desc: 'Dead panels, phantom inputs, error messages on oven controls.' },
  { title: 'Door and seal issues', link: null, desc: 'Heat leaking at the door, hinges that fight back, gaskets past their prime.' },
];

export const ERROR_LINKS = [
  ['sub-zero-error-code-ec-50.html', 'Error code EC 50'],
  ['sub-zero-error-code-ec-40.html', 'Error code EC 40'],
  ['sub-zero-error-code-ec-60.html', 'Error code EC 60'],
  ['sub-zero-service-light.html', 'Service light on'],
  ['sub-zero-vacuum-condenser.html', 'Condenser cleaning'],
];

export const PILLARS = [
  ['Factory trained, always', 'Every Noble tech certifies on current Sub-Zero and Wolf platforms, and recertifies every year. Not once a decade.'],
  ['Genuine parts only', 'Real factory components, sourced through authorized channels, stocked on the truck so most repairs finish on the first visit.'],
  ['A 3 year guarantee', 'Parts and labor, in writing. If our repair fails within three years, we come back and make it right.'],
  ['White glove treatment', 'Floor runners, shoe covers, padding on every panel we touch. And before we leave, we clean up, walk you through the repair, and answer every question. Your kitchen looks untouched. You feel taken care of.'],
  ['An honest diagnostic', '$89, quoted up front, credited toward the repair. You approve the number before any work begins.'],
  ['Seven days a week', 'Open daily 7am to 7pm, with same day priority for refrigerators that have gone warm. When your kitchen needs us, we genuinely want to be there.'],
];

// Placeholder testimonials written for launch. Replace each entry with real
// customer reviews as they come in — same shape: quote, name, area, service.
export const REVIEWS = [
  { q: 'Our Sub-Zero stopped cooling on a Friday night with a full house arriving Saturday. Noble had a tech out by 9am and the unit cold by noon. I don’t know how they did it, and I don’t need to. They’re in my phone now.', name: 'Rachel M.', area: 'Beverly Hills', service: 'Sub-Zero refrigerator' },
  { q: 'Third company we called about the ice maker. First one that actually fixed it. The tech explained exactly what failed, showed me the old valve, and the ice has been perfect since.', name: 'Dan K.', area: 'Manhattan Beach', service: 'Ice maker repair' },
  { q: 'They serviced the Wolf range and both Sub-Zero columns in one visit, left the kitchen spotless, and sent a written report I forwarded straight to our house manager. This is how it should be done.', name: 'Alexandra P.', area: 'Montecito', service: 'Estate account' },
  { q: 'The quote they gave me is the number I paid. The job ran longer than anyone expected and they never said a word about it. Just finished, cleaned up, and shook my hand.', name: 'Robert S.', area: 'Calabasas', service: 'Wolf oven repair' },
  { q: 'My wine column was drifting two degrees and I was sick over it. The tech found a worn door seal in twenty minutes, had the part on the truck, and checked every zone before he left.', name: 'Priya N.', area: 'Brentwood', service: 'Wine storage' },
  { q: 'Showed up inside the window they promised, shoe covers on before I even asked, and my ten year old fridge runs like new. My neighbor recommended them and now I get why.', name: 'Tom W.', area: 'Pasadena', service: 'Sub-Zero refrigerator' },
];

export const FAQS_HOME = [
  ['How fast can you actually get here?', 'For refrigeration emergencies, a warm Sub-Zero or an active leak, we hold same day and next morning slots across our service area, seven days a week. Standard appointments usually land within the week.'],
  ['Who is coming to my home?', 'A background checked, factory trained Noble tech in uniform. Not a subcontractor, not a stranger from an app. You get a name and a photo before the truck arrives.'],
  ['Do you use genuine Sub-Zero and Wolf parts?', 'Only. Factory parts through authorized channels, and the common ones ride on the truck so most repairs finish in one visit.'],
  ['What does the diagnostic cost?', '$89, flat, quoted before we book. It gets credited in full toward the repair when you go ahead. No trip fees stacked on top.'],
  ['What warranty do I get?', 'Three years on parts and labor, in writing. It is the longest guarantee we know of in this trade, and we can offer it because of how we repair.'],
  ['Will my kitchen be protected?', 'Floor runners go down before toolboxes open. Shoe covers at the door, padding on every panel we touch. That is just how we work, not an upgrade.'],
];
