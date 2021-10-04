/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Villager extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Villager/costumes/costume1.svg", {
        x: 2.1086956521740206,
        y: 2.782608695652243
      })
    ];

    this.sounds = [new Sound("pop", "./Villager/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.effects.ghost = 100;
    while (true) {
      yield* this.glide(3, this.random(-240, 240), this.random(-180, 180));
      yield;
    }
  }
}
