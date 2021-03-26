const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let monsters = {
  'aknosom': {
    'name':'Aknosom',
    'monster-class': 'Bird Wyvern',
    'elements': 'Fire',
    'ailments': 'Fireblight',
    'weakness': 'unknown',
    'habitat': ['Shrine Ruins', 'Frost Islands'],
  },
  'almudron': {
    'name': 'Almudron',
    'monster-class': 'Leviathan',
    'elements': 'Water',
    'ailments': ['Waterblight', 'Muddy'],
    'weakness': 'unknown',
    'habitat': ['Shrine Ruins', 'Sandy Plains', 'Flooded Forest'],
  },
  'anjanath': {
    'name': 'Anjanath',
    'monster-class': 'Brute Wyvern',
    'elements': 'Fire',
    'ailments': 'None',
    'weakness': ['Fire', 'Ice', 'Thunder'],
    'habitat': ['Shrine Ruins', 'Sandy Plains', 'Flooded Forest', 'Lava Caverns'],
  },
  'azuros': {
    'name': 'Azuros',
    'monster-class': 'Fanged Beast',
    'elements': 'Water',
    'ailments': ['Waterblight', 'Muddy'],
    'weakness': 'unknown',
    'habitat': 'Shrine Ruins',
  },
  'barioth': {
    'name': 'Barioth',
    'monster-class': 'Flying Wyvern',
    'elements': 'Ice',
    'ailments': ['Iceblight', 'Snowman'],
    'weakness': ['Fire', 'Thunder'],
    'habitat': 'Frost Islands',
  },
  'barroth': {
    'name': 'Barroth',
    'monster-class': 'Brute Wyvern',
    'elements': 'Water',
    'ailments': ['Waterblight', 'Muddy'],
    'weakness': ['Water', 'Fire', 'Ice'],
    'habitat': 'Sandy Plains',
  },
  'basarios': {
    'name': 'Basarios',
    'monster-class': 'Rock Wyvern',
    'elements': 'Fire',
    'ailments': ['Poison', 'Noxious Poison', 'Sleep'],
    'weakness': ['Dragon', 'Water'],
    'habitat': ['Sandy Plains', 'Lava Caverns'],
  },
  'bishaten': {
    'name': 'Bishaten',
    'monster-class': 'Fanged Beast',
    'elements': 'None',
    'ailments': ['Poison', 'Stun'],
    'weakness': 'unknown',
    'habitat': ['Shrine Ruins', 'Flooded Forest'],
  },
  'chameleos': {
    'name':'Chameleos',
    'monster-class': 'Elder Dragon',
    'elements': 'Dragon',
    'ailments': 'Poison',
    'weakness': 'Dragon',
    'habitat': 'Shrine Ruins',
  },
  'diablos': {
    'name':'Diablos',
    'monster-class': 'Flying Wyvern',
    'elements': 'None',
    'ailments': 'None',
    'weakness': 'Ice',
    'habitat': 'Sandy Plains',
  },
  'goss harag': {
    'name':'Goss Harag',
    'monster-class': 'Fanged Beast',
    'elements': 'Ice',
    'ailments': 'Iceblight',
    'weakness': 'unknown',
    'habitat': 'Frost Islands',
  },
  'great baggi': {
    'name':'Great Baggi',
    'monster-class': 'Bird Wyvern',
    'elements': 'Ice',
    'ailments': 'Sleep',
    'weakness': 'Fire',
    'habitat': 'Frost Islands',
  },
  'great izuchi': {
    'name':'Great Izuchi',
    'monster-class': 'Bird Wyvern',
    'elements': 'None',
    'ailments': 'None',
    'weakness': 'unknown',
    'habitat': ['Shrine Ruins', 'Frost Islands'],
  },
  'great wroggi': {
    'name':'Great Wroggi',
    'monster-class': 'Bird Wyvern',
    'elements': 'Fire',
    'ailments': 'Poison',
    'weakness': 'Ice',
    'habitat': 'Shrine Ruins',
  },
  'jyuratodus': {
    'name':'Jyuratodus',
    'monster-class': 'Mud Fish Wyvern',
    'elements': 'Water',
    'ailments': ['Waterblight', 'Muddy'],
    'weakness': ['Thunder', 'Water'],
    'habitat': 'Flooded Forest',
  },
  'khezu': {
    'name':'',
    'monster-class': 'Flying Wyvern',
    'elements': 'Thunder',
    'ailments': ['Thunderblight', 'Paralysis', 'Stun'],
    'weakness': 'Fire',
    'habitat': 'Frost Islands',
  },
  'kulu-ya-ku': {
    'name':'Kulu-Ya-Ku',
    'monster-class': 'Bird Wyvern',
    'elements': 'None',
    'ailments': ['Stun', 'Fireblight'],
    'weakness': 'Water',
    'habitat': ['Shrine Ruins', 'Frost Islands', 'Sandy Plains', 'Lava Caverns'],
  },
  'lagombi': {
    'name':'Lagombi',
    'monster-class': 'Fanged Beast',
    'elements': 'Ice',
    'ailments': ['Iceblight', 'Snowman'],
    'weakness': ['Fire', 'Thunder'],
    'habitat': 'Frost Islands',
  },
  'magnamalo': {
    'name':'Magnamalo',
    'monster-class': 'Fanged Wyvern',
    'elements': 'None',
    'ailments': 'Hellfireblight',
    'weakness': 'unknown',
    'habitat': ['Shrine Ruins', 'Lava Caverns'],
  },
  'mizutsune': {
    'name':'Mitzutsune',
    'monster-class': 'Leviathan',
    'elements': 'Water',
    'ailments': ['Bubble', 'Waterblight'],
    'weakness': ['Thunder', 'Dragon'],
    'habitat': ['Shrine Ruins', 'Frost Islands', 'Flooded Forest'],
  },
  'nargacuga': {
    'name':'Nargacuga',
    'monster-class': 'Flying Wyvern',
    'elements': 'Water',
    'ailments': 'Bleeding',
    'weakness': ['Thunder', 'Fire'],
    'habitat': 'Shrine Ruins',
  },
  'pukei-pukei': {
    'name':'Pukei-Pukei',
    'monster-class': 'Bird Wyvern',
    'elements': 'None',
    'ailments': ['Poison', 'Stun'],
    'weakness': 'Tunder',
    'habitat': ['Shrine Ruins', 'Flooded Forest', 'Sandy Plains'],
  },
  'rajang': {
    'name':'Rajang',
    'monster-class': 'Fanged Beast',
    'elements': 'Thunder',
    'ailments': 'Thunderblight',
    'weakness': 'Ice',
    'habitat': ['Flooded Forest', 'Sandy Plains', 'Lava Caverns'],
  },
  'rakna-kadaki': {
    'name':'Rakna-Kadaki',
    'monster-class': 'Temnoceran',
    'elements': 'Fire',
    'ailments': ['Fireblight', 'Webbed'],
    'weakness': 'unknown',
    'habitat': ['Sandy Plains', 'Lava Caverns'],
  },
  'somnacanth': {
    'name':'Somnacanth',
    'monster-class': 'Leviathan',
    'elements': 'None',
    'ailments': ['Sleep', 'Stun', 'Blastblight'],
    'weakness': 'unknown',
    'habitat': ['Flooded Forest', 'Frost Islands'],
  },
  'tetranadon': {
    'name':'Tetranadon',
    'monster-class': 'Amphibian',
    'elements': 'Water',
    'ailments': 'Waterblight',
    'weakness': 'unknown',
    'habitat': ['Shrine Ruins', 'Frost Islands'],
  },
  'tigrex': {
    'name':'Tigrex',
    'monster-class': 'Flying Wyvern',
    'elements': ['Fire', 'Water', 'Ice'],
    'ailments': ['Snowman', 'Fireblight', 'Waterblight', 'Iceblight', 'Effluvium'],
    'weakness': ['Thunder', 'Dragon'],
    'habitat': 'Frost Islands',
  },
  'rathalos': {
    'name':'Rathalos',
    'monster-class': 'Flying Wyvern',
    'elements': 'Fire',
    'ailments': ['Fireblight', 'Stun', 'Poison'],
    'weakness': ['Dragon', 'Thunder'],
    'habitat': ['Shrine Ruins', 'Lava Caverns'],
  },
  'rathian': {
    'name':'Rathian',
    'monster-class': 'Flying Wyvern',
    'elements': 'Fire',
    'ailments': ['Fireblight', 'Stun', 'Poison'],
    'weakness': ['Dragon', 'Thunder'],
    'habitat': ['Shrine Ruins', 'Sandy Plains', 'Lava Caverns'],
  },
  'royal ludroth': {
    'name':'Royal Ludroth',
    'monster-class': 'Leviathan',
    'elements': 'Water',
    'ailments': 'Waterblight',
    'weakness': ['Fire', 'Thunder'],
    'habitat': ['Flooded Forest', 'Lava Caverns'],
  },
  'tobi-kadachi': {
    'name':'Tobi-Kadachi',
    'monster-class': 'Fanged Wyvern',
    'elements': 'Thunder',
    'ailments': 'Thunderblight',
    'weakness': 'Water',
    'habitat': ['Shrine Ruins', 'Flooded Forest'],
  },
  'volvidon': {
    'name':'Volvidon',
    'monster-class': 'Fanged Beast',
    'elements': 'Thunder',
    'ailments': ['Paralysis', 'Soiled'],
    'weakness': ['Water', 'Earth'],
    'habitat': 'Lava Caverns',
  },
  'zinogre': {
    'name':'Zinogre',
    'monster-class': 'Fanged Wyvern',
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

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})