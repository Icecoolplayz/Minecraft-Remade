/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Steve (Old)", "./Player/costumes/Steve (Old).png", {
        x: 279,
        y: 279
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.health = 10;
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      if (this.keyPressed("w")) {
        this.move(5);
      }
      if (this.stage.vars.health == 0) {
        this.broadcast("Dead");
        /* TODO: Implement stop all */ null;
      }
      if (this.stage.vars.mode == 0) {
        /* TODO: Implement data_hidevariable */ null;
      }
      if (this.stage.vars.mode == 1) {
        /* TODO: Implement data_showvariable */ null;
      }
      yield;
    }
  }
}
