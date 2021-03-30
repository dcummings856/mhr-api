const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let monsters = {
  'aknosom': {
    'name':'Aknosom',
    'type': 'Bird Wyvern',
    'elements': 'Fire',
    'ailments': 'Fireblight',
    'weakness': ['Water(Primary)', 'Lightning(Secondary)'],
    'weakspots': ['Head', 'Crest', 'Wing'],
    'habitat': ['Shrine Ruins', 'Frost Islands'],
  },
  'almudron': {
    'name': 'Almudron',
    'type': 'Leviathan',
    'elements': 'Water',
    'ailments': ['Waterblight', 'Muddy'],
    'weakness': ['Fire(Primary)', 'Ice(Secondary)'],
    'weakspots': ['Tail Tip', 'Tail', 'Head'],
    'habitat': ['Shrine Ruins', 'Sandy Plains', 'Flooded Forest'],
  },
  'anjanath': {
    'name': 'Anjanath',
    'type': 'Brute Wyvern',
    'elements': 'Fire',
    'ailments': 'Fireblight',
    'weakness': ['Water(Primary)', 'Ice(Secondary)'],
    'weakspots': ['Head', 'Tail'],
    'habitat': ['Shrine Ruins', 'Sandy Plains', 'Flooded Forest', 'Lava Caverns'],
  },
  'azuros': {
    'name': 'Azuros',
    'type': 'Fanged Beast',
    'elements': 'Water',
    'ailments': ['Waterblight', 'Muddy'],
    'weakness': ['Fire(Primary)', 'Ice/Lightning(Secondary)'],
    'weakspots': ['Head', 'Rear', 'Upper Half'],
    'habitat': ['Shrine Ruins', 'Flooded Forest']
  },
  'barioth': {
    'name': 'Barioth',
    'type': 'Flying Wyvern',
    'elements': 'Ice',
    'ailments': ['Iceblight', 'Snowman'],
    'weakness': ['Fire(Primary)', 'Thunder(Secondary)'],
    'weakspots': ['Head', 'Tail Tip'],
    'habitat': 'Frost Islands',
  },
  'barroth': {
    'name': 'Barroth',
    'type': 'Brute Wyvern',
    'elements': 'Water',
    'ailments': ['Waterblight', 'Muddy'],
    'weakness': ['Fire(Primary)', 'Ice(Secondary)'],
    'weakspots': ['Foreleg', 'Tail'],
    'habitat': 'Sandy Plains',
  },
  'basarios': {
    'name': 'Basarios',
    'type': 'Rock Wyvern',
    'elements': 'Fire',
    'ailments': ['Poison', 'Noxious Poison', 'Sleep'],
    'weakness': ['Dragon', 'Water'],
    'weakspots': ['Foreleg', 'Tail'],
    'habitat': ['Sandy Plains', 'Lava Caverns'],
  },
  'bishaten': {
    'name': 'Bishaten',
    'type': 'Fanged Beast',
    'elements': 'None',
    'ailments': ['Poison', 'Stun'],
    'weakness': ['Ice(Primary)', 'Fire(Secondary)'],
    'weakspots': ['Head', 'Tail'],
    'habitat': ['Shrine Ruins', 'Flooded Forest'],
  },
  'chameleos': {
    'name':'Chameleos',
    'type': 'Elder Dragon',
    'elements': 'Dragon',
    'ailments': 'Poison',
    'weakness': 'Dragon',
    'habitat': 'Shrine Ruins',
  },
  'diablos': {
    'name':'Diablos',
    'type': 'Flying Wyvern',
    'elements': 'None',
    'ailments': 'None',
    'weakness': 'Ice',
    'habitat': 'Sandy Plains',
  },
  'goss harag': {
    'name':'Goss Harag',
    'type': 'Fanged Beast',
    'elements': 'Ice',
    'ailments': 'Iceblight',
    'weakness': 'unknown',
    'habitat': 'Frost Islands',
  },
  'great baggi': {
    'name':'Great Baggi',
    'type': 'Bird Wyvern',
    'elements': 'Ice',
    'ailments': 'Sleep',
    'weakness': 'Fire',
    'habitat': 'Frost Islands',
  },
  'great izuchi': {
    'name':'Great Izuchi',
    'type': 'Bird Wyvern',
    'elements': 'None',
    'ailments': 'None',
    'weakness': 'unknown',
    'habitat': ['Shrine Ruins', 'Frost Islands'],
  },
  'great wroggi': {
    'name':'Great Wroggi',
    'type': 'Bird Wyvern',
    'elements': 'Fire',
    'ailments': 'Poison',
    'weakness': 'Ice',
    'habitat': 'Shrine Ruins',
  },
  'jyuratodus': {
    'name':'Jyuratodus',
    'type': 'Mud Fish Wyvern',
    'elements': 'Water',
    'ailments': ['Waterblight', 'Muddy'],
    'weakness': ['Thunder', 'Water'],
    'habitat': 'Flooded Forest',
  },
  'khezu': {
    'name':'',
    'type': 'Flying Wyvern',
    'elements': 'Thunder',
    'ailments': ['Thunderblight', 'Paralysis', 'Stun'],
    'weakness': 'Fire',
    'habitat': 'Frost Islands',
  },
  'kulu-ya-ku': {
    'name':'Kulu-Ya-Ku',
    'type': 'Bird Wyvern',
    'elements': 'None',
    'ailments': ['Stun', 'Fireblight'],
    'weakness': 'Water',
    'habitat': ['Shrine Ruins', 'Frost Islands', 'Sandy Plains', 'Lava Caverns'],
  },
  'lagombi': {
    'name':'Lagombi',
    'type': 'Fanged Beast',
    'elements': 'Ice',
    'ailments': ['Iceblight', 'Snowman'],
    'weakness': ['Fire', 'Thunder'],
    'habitat': 'Frost Islands',
  },
  'magnamalo': {
    'name':'Magnamalo',
    'type': 'Fanged Wyvern',
    'elements': 'None',
    'ailments': 'Hellfireblight',
    'weakness': 'unknown',
    'habitat': ['Shrine Ruins', 'Lava Caverns'],
  },
  'mizutsune': {
    'name':'Mitzutsune',
    'type': 'Leviathan',
    'elements': 'Water',
    'ailments': ['Bubble', 'Waterblight'],
    'weakness': ['Thunder', 'Dragon'],
    'habitat': ['Shrine Ruins', 'Frost Islands', 'Flooded Forest'],
  },
  'nargacuga': {
    'name':'Nargacuga',
    'type': 'Flying Wyvern',
    'elements': 'Water',
    'ailments': 'Bleeding',
    'weakness': ['Thunder', 'Fire'],
    'habitat': 'Shrine Ruins',
  },
  'pukei-pukei': {
    'name':'Pukei-Pukei',
    'type': 'Bird Wyvern',
    'elements': 'None',
    'ailments': ['Poison', 'Stun'],
    'weakness': 'Tunder',
    'habitat': ['Shrine Ruins', 'Flooded Forest', 'Sandy Plains'],
  },
  'rajang': {
    'name':'Rajang',
    'type': 'Fanged Beast',
    'elements': 'Thunder',
    'ailments': 'Thunderblight',
    'weakness': 'Ice',
    'habitat': ['Flooded Forest', 'Sandy Plains', 'Lava Caverns'],
  },
  'rakna-kadaki': {
    'name':'Rakna-Kadaki',
    'type': 'Temnoceran',
    'elements': 'Fire',
    'ailments': ['Fireblight', 'Webbed'],
    'weakness': 'unknown',
    'habitat': ['Sandy Plains', 'Lava Caverns'],
  },
  'somnacanth': {
    'name':'Somnacanth',
    'type': 'Leviathan',
    'elements': 'None',
    'ailments': ['Sleep', 'Stun', 'Blastblight'],
    'weakness': 'unknown',
    'habitat': ['Flooded Forest', 'Frost Islands'],
  },
  'tetranadon': {
    'name':'Tetranadon',
    'type': 'Amphibian',
    'elements': 'Water',
    'ailments': 'Waterblight',
    'weakness': 'unknown',
    'habitat': ['Shrine Ruins', 'Frost Islands'],
  },
  'tigrex': {
    'name':'Tigrex',
    'type': 'Flying Wyvern',
    'elements': ['Fire', 'Water', 'Ice'],
    'ailments': ['Snowman', 'Fireblight', 'Waterblight', 'Iceblight', 'Effluvium'],
    'weakness': ['Thunder', 'Dragon'],
    'habitat': 'Frost Islands',
  },
  'rathalos': {
    'name':'Rathalos',
    'type': 'Flying Wyvern',
    'elements': 'Fire',
    'ailments': ['Fireblight', 'Stun', 'Poison'],
    'weakness': ['Dragon', 'Thunder'],
    'habitat': ['Shrine Ruins', 'Lava Caverns'],
  },
  'rathian': {
    'name':'Rathian',
    'type': 'Flying Wyvern',
    'elements': 'Fire',
    'ailments': ['Fireblight', 'Stun', 'Poison'],
    'weakness': ['Dragon', 'Thunder'],
    'habitat': ['Shrine Ruins', 'Sandy Plains', 'Lava Caverns'],
  },
  'royal ludroth': {
    'name':'Royal Ludroth',
    'type': 'Leviathan',
    'elements': 'Water',
    'ailments': 'Waterblight',
    'weakness': ['Fire', 'Thunder'],
    'habitat': ['Flooded Forest', 'Lava Caverns'],
  },
  'tobi-kadachi': {
    'name':'Tobi-Kadachi',
    'type': 'Fanged Wyvern',
    'elements': 'Thunder',
    'ailments': 'Thunderblight',
    'weakness': 'Water',
    'habitat': ['Shrine Ruins', 'Flooded Forest'],
  },
  'volvidon': {
    'name':'Volvidon',
    'type': 'Fanged Beast',
    'elements': 'Thunder',
    'ailments': ['Paralysis', 'Soiled'],
    'weakness': ['Water', 'Earth'],
    'habitat': 'Lava Caverns',
  },
  'zinogre': {
    'name':'Zinogre',
    'type': 'Fanged Wyvern',
    'elements': 'Thunder',
    'ailments': ['Thunderblight', 'Paralysis'],
    'weakness': ['Ice', 'Earth'],
    'habitat': ['Shrine Ruins', 'Flooded Forest'],
  },
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/monsters', (req, res) => {
  res.json(monsters)
})

app.get('/api/monsters/:monster', (req, res) => {
  const monsterInfo = req.params.monster.toLowerCase()
  console.log(monsterInfo)
  res.json(monsters[monsterInfo])
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on ${PORT}`)
})