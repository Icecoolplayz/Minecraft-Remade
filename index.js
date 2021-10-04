import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Mobs from "./Mobs/Mobs.js";
import Weapons from "./Weapons/Weapons.js";
import Spawn from "./Spawn/Spawn.js";
import Zombie from "./Zombie/Zombie.js";
import Enderman from "./Enderman/Enderman.js";
import Died from "./Died/Died.js";
import Villager from "./Villager/Villager.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player: new Player({
    x: 65.04789013621729,
    y: 11.199432594677203,
    direction: -59.01049249593123,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Mobs: new Mobs({
    x: 133.7515949418545,
    y: -126.9816916540415,
    direction: 40.953176693111686,
    costumeNumber: 21,
    size: 450,
    visible: false
  }),
  Weapons: new Weapons({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Spawn: new Spawn({
    x: 147.76470588235296,
    y: -144.94117647058823,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true
  }),
  Zombie: new Zombie({
    x: 90.91,
    y: -25.13900000000001,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Enderman: new Enderman({
    x: -29.887999999999998,
    y: 62.048,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Died: new Died({
    x: 1.9999945322675963,
    y: 0.0000023735892149545634,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: false
  }),
  Villager: new Villager({
    x: -75.087,
    y: -4.149000000000001,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
