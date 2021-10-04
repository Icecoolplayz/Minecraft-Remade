/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spawn extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Spawn/costumes/costume1.svg", {
        x: 135.5,
        y: 52
      })
    ];

    this.sounds = [new Sound("pop", "./Spawn/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse") && this.mouse.down) {
        this.broadcast("Spawn Mob");
      }
      yield;
    }
  }
}
