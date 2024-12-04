const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  ];

  const people = [
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William',
  ];
  
  const travelMethods = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
  ];
  

  const devs = [
    { name: 'Alex', year: 1988 },
    { name: 'Dani', year: 1986 },
    { name: 'Matt', year: 1970 },
    { name: 'Wes', year: 2015 },
  ];
  

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
  ];

  

  //-----------------------------------------------------------------------------------------------

  let veryOldInventors = inventors.filter((old)=>{
    return old.year > 1500 && old.year < 1599
  })

  console.log('Exercise 1 my result: ', veryOldInventors);




  //----------------------------------------------------------------------------------------------------------



  let inventorNames = inventors.map((name)=>{
    return `first: ${name.first}   last: ${name.last}`

  })

  console.log('Exercise 2 my result: ', inventorNames);


  //-----------------------------------------------------------------------------------------------


  let sortedByBirthYear = inventors.sort((sorted)=>{
    return `first: ${sorted.first}  last: ${sorted.last}
    year: ${sorted.year} passed: ${sorted.passed}`  
  })

  console.log('Exercise 3 my result: ', sortedByBirthYear);

  //----------------------------------------------------------------------------------------------------------

  let inventorNamedAda = inventors.find((ada)=>{
    return ada.first == "Ada"
  })

  console.log('Exercise 4 my result: ', inventorNamedAda);

  //-------------------------------------------------------------------------------------------------------

  let firstLast = people.map((human)=>{
    let [last,first] = human.split(',')
    return `${first} ${last}`

  })

  console.log('Exercise 5 my result: ', firstLast);


  //-----------------------------------------------------------------------------------------------------------------

  let isAdultPresent = devs.some((age)=>{
    return age.year >= 2006
  })


  console.log('Exercise 6 my result: ', isAdultPresent);


  //--------------------------------------------------------------------------------------------------

  let isEveryone19OrOlder = devs.every((nineteen)=>{
    return nineteen.year >= 2005
  })

  console.log('Exercise 7 my result: ', isEveryone19OrOlder);


  //--------------------------------------------------------------------------------------------------

  let commentById = comments.find((comment)=>{
    return comment.id = 823423
  })

  console.log('Exercise 8 my result: ', commentById);

  //----------------------------------------------------------------------------------------------------

  let idx = comments.findIndex((commentor)=>{
    return commentor.id == 123523
  })

  console.log('Exercise 9 my result: ', idx);

  