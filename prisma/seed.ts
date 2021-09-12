import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.film.upsert({
    where: {
      id: 1,
    },
    update: {
      id: 1,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/557-spider-man',
      img: 'http://image.tmdb.org/t/p/w500//fwoETElxZqiF3it8F4HitSliXqp.jpg',
      title: 'Spider-Man',
      description: 'After being bitten by a genetically altered spider, nerdy high school student Peter Parker is endowed with amazing powers to become the Amazing superhero known as Spider-Man.',
      director: 'Sam Raimi',
      year: '2002',
      duration: '2h 1m',
      stars: 0,
      trailer: ''
    },
  })

  await prisma.film.upsert({
    where: {
      id: 2,
    },
    update: {
      id: 2,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/98-gladiator',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg',
      title: 'Gladiator',
      description: "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders. Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
      director: 'Ridley Scott',
      year: '2000',
      duration: '2h 35m',
      stars: 0,
      trailer: ''
    },
  })

  await prisma.film.upsert({
    where: {
      id: 3,
    },
    update: {
      id: 3,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/531309-brightburn',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/sJWwkYc9ajwnPRSkqj8Aue5JbKz.jpg',
      title: 'Brightburn',
      description: 'What if a child from another world crash-landed on Earth, but instead of becoming a hero to mankind, he proved to be something far more sinister?',
      director: 'David Yarovesky',
      year: '2019',
      duration: '1h 31m',
      stars: 0,
      trailer: ''
    },
  })

  await prisma.film.upsert({
    where: {
      id: 4,
    },
    update: {
      id: 4,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/315837-ghost-in-the-shell',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/myRzRzCxdfUWjkJWgpHHZ1oGkJd.jpg',
      title: 'Ghost in the Shell ',
      description: "In the near future, Major is the first of her kind: a human saved from a terrible crash, then cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.",
      director: 'Rupert Sanders',
      year: '2017',
      duration: '1h 47m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 5,
    },
    update: {
      id: 5,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/78-blade-runner',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg',
      title: 'Blade Runner',
      description: "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
      director: 'Ridley Scott',
      year: '1982',
      duration: '1h 57m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 6,
    },
    update: {
      id: 6,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/335984-blade-runner-2049',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
      title: 'Blade Runner 2049',
      description: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
      director: 'Hampton Fancher',
      year: '2017',
      duration: '2h 44m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 7,
    },
    update: {
      id: 7,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/597-titanic',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
      title: 'Titanic',
      description: "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
      director: 'James Cameron',
      year: '1997',
      duration: '3h 14m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 8,
    },
    update: {
      id: 8,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/978-seven-years-in-tibet',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AwAlbBjAf6K0aX8PPyhTUB1S3X7.jpg',
      title: 'Seven Years in Tibet',
      description: "Austrian mountaineer, Heinrich Harrer journeys to the Himalayas without his family to head an expedition in 1939. But when World War II breaks out, the arrogant Harrer falls into Allied forces' hands as a prisoner of war. He escapes with a fellow detainee and makes his way to Llaso, Tibet, where he meets the 14-year-old Dalai Lama, whose friendship ultimately transforms his outlook on life.",
      director: 'Jean-Jacques Annaud',
      year: '1997',
      duration: '2h 16m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 9,
    },
    update: {
      id: 9,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/807-se7en',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/69Sns8WoET6CfaYlIkHbla4l7nC.jpg',
      title: 'Se7en',
      description: "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
      director: 'David Fincher',
      year: '1995',
      duration: '2h 7m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 10,
    },
    update: {
      id: 10,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/14-american-beauty',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wby9315QzVKdW9BonAefg8jGTTb.jpg',
      title: 'American Beauty',
      description: "Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter's attractive friend.",
      director: 'Alan Ball',
      year: '1999',
      duration: '2h 2m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 11,
    },
    update: {
      id: 11,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/680-pulp-fiction',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
      title: 'Pulp Fiction',
      description: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      director: 'Quentin Tarantino',
      year: '1994',
      duration: '2h 34m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 12,
    },
    update: {
      id: 12,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/299536-avengers-infinity-war',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
      title: 'Avengers: Infinity War',
      description: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      director: 'Joe Russo',
      year: '2018',
      duration: '2h 29m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 13,
    },
    update: {
      id: 13,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/19995-avatar',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
      title: 'Avatar',
      description: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
      director: 'James Cameron',
      year: '2009',
      duration: '2h 42m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 14,
    },
    update: {
      id: 14,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/9799-the-fast-and-the-furious',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gqY0ITBgT7A82poL9jv851qdnIb.jpg',
      title: 'The Fast and the Furious',
      description: "Dominic Toretto is a Los Angeles street racer suspected of masterminding a series of big-rig hijackings. When undercover cop Brian O'Conner infiltrates Toretto's iconoclastic crew, he falls for Toretto's sister and must choose a side: the gang or the LAPD.",
      director: 'Rob Cohen',
      year: '2001',
      duration: '1h 46m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 15,
    },
    update: {
      id: 15,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/238-the-godfather',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      title: 'The Godfather',
      description: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      director: 'Francis Ford Coppola',
      year: '1972',
      duration: '2h 55m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 16,
    },
    update: {
      id: 16,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/11324-shutter-island',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/56utveUWJwmG12YU7c2zKw6pbRZ.jpg',
      title: 'Shutter Island',
      description: "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.",
      director: 'Martin Scorsese',
      year: '2010',
      duration: '2h 18m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 17,
    },
    update: {
      id: 17,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/63-twelve-monkeys',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fCZnJSARoTbLefr9ThwWBSkJ7oR.jpg',
      title: 'Twelve Monkeys',
      description: "In the year 2035, convict James Cole reluctantly volunteers to be sent back in time to discover the origin of a deadly virus that wiped out nearly all of the earth's population and forced the survivors into underground communities. But when Cole is mistakenly sent to 1990 instead of 1996, he's arrested and locked up in a mental hospital. There he meets psychiatrist Dr. Kathryn Railly, and patient Jeffrey Goines, the son of a famous virus expert, who may hold the key to the mysterious rogue group, the Army of the 12 Monkeys, thought to be responsible for unleashing the killer disease.",
      director: 'Terry Gilliam',
      year: '1995',
      duration: '2h 9m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 18,
    },
    update: {
      id: 18,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/72190-world-war-z',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1SWBSYJsnyhdNRfLI1T6RsCxAQ4.jpg',
      title: 'World War Z',
      description: "Life for former United Nations investigator Gerry Lane and his family seems content. Suddenly, the world is plagued by a mysterious infection turning whole human populations into rampaging mindless zombies. After barely escaping the chaos, Lane is persuaded to go on a mission to investigate this disease. What follows is a perilous trek around the world where Lane must brave horrific dangers and long odds to find answers before human civilization falls.",
      director: 'Marc Forster',
      year: '2013',
      duration: '1h 56m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 19,
    },
    update: {
      id: 19,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/2300-space-jam',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4RN5El3Pj2W4gpwgiAGLVfSJv2g.jpg',
      title: 'Space Jam',
      description: "Jokes fly as the Tune Squad takes on the Nerdlucks in a hardcourt game to decide if the Looney Tunes remain here... or become attractions at a far-off galactic off-ramp called Moron Mountain. The Nerdlucks have a monstrous secret weapon: they've stolen the skills of top NBA stars like Charles Barkley and Patrick Ewing and become Monstars. But that's not all, folks. The Tune Squad’s secret weapon just happens to be the finest player in this or any other universe. He's outta this world. So's the fun.",
      director: 'Joe Pytka',
      year: '1996',
      duration: '1h 28m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 20,
    },
    update: {
      id: 20,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/1895-star-wars-episode-iii-revenge-of-the-sith',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg',
      title: 'Star Wars: Episode III - Revenge of the Sith',
      description: "The evil Darth Sidious enacts his final plan for unlimited power -- and the heroic Jedi Anakin Skywalker must choose a side.",
      director: 'George Lucas',
      year: '2005',
      duration: '2h 20m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 21,
    },
    update: {
      id: 21,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/165-back-to-the-future-part-ii',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg',
      title: 'Back to the Future Part II',
      description: "Marty and Doc are at it again in this wacky sequel to the 1985 blockbuster as the time-traveling duo head to 2015 to nip some McFly family woes in the bud. But things go awry thanks to bully Biff Tannen and a pesky sports almanac. In a last-ditch attempt to set things straight, Marty finds himself bound for 1955 and face to face with his teenage parents -- again.",
      director: 'Robert Zemeckis',
      year: '1989',
      duration: '1h 48m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 22,
    },
    update: {
      id: 22,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/615457-nobody',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg',
      title: 'Nobody',
      description: "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a \"nobody.\" When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
      director: 'Ilya Naishuller',
      year: '2021',
      duration: '1h 32m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 23,
    },
    update: {
      id: 23,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/37724-skyfall',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/izrHg2UzxG3YXTBcKFaUbYp9LWA.jpg',
      title: 'Skyfall',
      description: "When Bond's latest assignment goes gravely wrong and agents around the world are exposed, MI6 is attacked forcing M to relocate the agency. These events cause her authority and position to be challenged by Gareth Mallory, the new Chairman of the Intelligence and Security Committee. With MI6 now compromised from both inside and out, M is left with one ally she can trust: Bond. 007 takes to the shadows - aided only by field agent, Eve - following a trail to the mysterious Silva, whose lethal and hidden motives have yet to reveal themselves.",
      director: 'Sam Mendes',
      year: '2012',
      duration: '2h 23m',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 24,
    },
    update: {
      id: 24,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/245891-john-wick',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg',
      title: 'John Wick',
      description: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
      director: 'Chad Stahelski',
      year: '2019',
      duration: '2014',
      stars: 0,
      trailer: ''
    },
  })

await prisma.film.upsert({
    where: {
      id: 25,
    },
    update: {
      id: 25,
    },
    create: {
      referenceUrl: 'https://www.themoviedb.org/movie/138843-the-conjuring',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wVYREutTvI2tmxr6ujrHT704wGF.jpg',
      title: 'The Conjuring',
      description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. Forced to confront a powerful entity, the Warrens find themselves caught in the most terrifying case of their lives.",
      director: 'James Wan',
      year: '2013',
      duration: '1h 52m',
      stars: 0,
      trailer: ''
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })