/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Died extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Died", "./Died/costumes/Died.png", { x: 430, y: 231 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDead() {
    this.visible = true;
    /* TODO: Implement looks_gotofrontback */ null;
  }
}
