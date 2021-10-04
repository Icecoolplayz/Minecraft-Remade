/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mobs extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("EnderMan Idle", "./Mobs/costumes/EnderMan Idle.png", {
        x: 32,
        y: 32
      }),
      new Costume("EnderMan Happy", "./Mobs/costumes/EnderMan Happy.png", {
        x: 32,
        y: 32
      }),
      new Costume("EnderMan Angry", "./Mobs/costumes/EnderMan Angry.png", {
        x: 32,
        y: 32
      }),
      new Costume("EnderMan Angry 2", "./Mobs/costumes/EnderMan Angry 2.png", {
        x: 32,
        y: 32
      }),
      new Costume("EnderMan Angry 3", "./Mobs/costumes/EnderMan Angry 3.png", {
        x: 32,
        y: 32
      }),
      new Costume("EnderMan Angry 4", "./Mobs/costumes/EnderMan Angry 4.png", {
        x: 32,
        y: 32
      }),
      new Costume("EnderMan Calm", "./Mobs/costumes/EnderMan Calm.png", {
        x: 32,
        y: 32
      }),
      new Costume("Zombie Idle", "./Mobs/costumes/Zombie Idle.png", {
        x: 32,
        y: 32
      }),
      new Costume("Zombie Happy", "./Mobs/costumes/Zombie Happy.png", {
        x: 32,
        y: 32
      }),
      new Costume("Zombie Angry", "./Mobs/costumes/Zombie Angry.png", {
        x: 32,
        y: 32
      }),
      new Costume("Zombie Mad", "./Mobs/costumes/Zombie Mad.png", {
        x: 32,
        y: 32
      }),
      new Costume("Zombie MAD 1", "./Mobs/costumes/Zombie MAD 1.png", {
        x: 32,
        y: 32
      }),
      new Costume("Zombie MAD 2", "./Mobs/costumes/Zombie MAD 2.png", {
        x: 32,
        y: 32
      }),
      new Costume("Zombie Sad/Calm", "./Mobs/costumes/Zombie Sad/Calm.png", {
        x: 32,
        y: 32
      }),
      new Costume("Villager Idle", "./Mobs/costumes/Villager Idle.png", {
        x: 32,
        y: 32
      }),
      new Costume("Villager Happy", "./Mobs/costumes/Villager Happy.png", {
        x: 32,
        y: 32
      }),
      new Costume("Villager Happy 2", "./Mobs/costumes/Villager Happy 2.png", {
        x: 32,
        y: 32
      }),
      new Costume(
        "Villager Emerald 1",
        "./Mobs/costumes/Villager Emerald 1.png",
        { x: 32, y: 32 }
      ),
      new Costume(
        "Villager Emerald 2",
        "./Mobs/costumes/Villager Emerald 2.png",
        { x: 32, y: 32 }
      ),
      new Costume("Villager Annoyed", "./Mobs/costumes/Villager Annoyed.png", {
        x: 32,
        y: 32
      }),
      new Costume("Villager MAD", "./Mobs/costumes/Villager MAD.png", {
        x: 32,
        y: 32
      }),
      new Costume(
        "Villager Scared 1",
        "./Mobs/costumes/Villager Scared 1.png",
        { x: 32, y: 32 }
      ),
      new Costume(
        "Villager Scared 2",
        "./Mobs/costumes/Villager Scared 2.png",
        { x: 32, y: 32 }
      )
    ];

    this.sounds = [new Sound("pop", "./Mobs/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spawn Mob" },
        this.whenIReceiveSpawnMob
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSpawnMob() {
    yield* this.wait(1);
    this.createClone();
  }

  *startAsClone() {
    this.visible = true;
    if (this.stage.vars.selectedMob == 1) {
      this.costume = "Zombie Idle";
    }
    if (this.stage.vars.selectedMob == 2) {
      this.costume = "EnderMan Idle";
    }
    if (this.stage.vars.selectedMob == 3) {
      this.costume = "Villager Idle";
    }
    while (true) {
      if (this.stage.vars.selectedMob == 1) {
        if (this.stage.vars.mode == 1) {
          while (true) {
            this.direction = this.radToScratch(
              Math.atan2(
                this.sprites["Player"].y - this.y,
                this.sprites["Player"].x - this.x
              )
            );
            this.move(3);
            if (this.touching(this.sprites["Player"].andClones())) {
              while (!!this.touching(this.sprites["Player"].andClones())) {
                yield* this.wait(0.1);
                this.stage.vars.health += -1;
                yield;
              }
            }
            if (this.touching("mouse") && this.mouse.down) {
              this.deleteThisClone();
            }
            yield;
          }
        }
        if (this.stage.vars.mode == 0) {
          this.costume = "Zombie Idle";
          while (true) {
            this.direction = this.radToScratch(
              Math.atan2(
                this.sprites["Zombie"].y - this.y,
                this.sprites["Zombie"].x - this.x
              )
            );
            yield* this.glide(
              3,
              this.random(-240, 240),
              this.random(-180, 180)
            );
            yield;
          }
        }
      }
      if (this.stage.vars.selectedMob == 2) {
        if (this.stage.vars.mode == 1) {
          this.stage.vars.endermanTrigger = 0;
          while (true) {
            this.direction = this.radToScratch(
              Math.atan2(
                this.sprites["Enderman"].y - this.y,
                this.sprites["Enderman"].x - this.x
              )
            );
            this.move(4);
            if (this.touching("mouse")) {
              this.stage.vars.endermanTrigger = 1;
              this.direction = this.radToScratch(
                Math.atan2(
                  this.sprites["Player"].y - this.y,
                  this.sprites["Player"].x - this.x
                )
              );
              for (let i = 0; i < 5; i++) {
                this.costume = "EnderMan Angry";
                this.costume = "EnderMan Angry 2";
                yield;
              }
              yield* this.wait(1);
              this.costume = "EnderMan Angry 3";
              this.costume = "EnderMan Angry 4";
              while (!!(this.stage.vars.endermanTrigger == 1)) {
                this.direction = this.radToScratch(
                  Math.atan2(
                    this.sprites["Player"].y - this.y,
                    this.sprites["Player"].x - this.x
                  )
                );
                this.move(6);
                yield;
              }
              if (!(this.stage.vars.endermanTrigger == 1)) {
                this.costume = "EnderMan Calm";
                yield* this.wait(1);
                this.costume = "EnderMan Idle";
              }
            }
            yield;
          }
        }
        if (this.stage.vars.mode == 0) {
          this.costume = "EnderMan Idle";
          while (true) {
            this.direction = this.radToScratch(
              Math.atan2(
                this.sprites["Enderman"].y - this.y,
                this.sprites["Enderman"].x - this.x
              )
            );
            yield;
          }
        }
      }
      if (this.stage.vars.selectedMob == 3) {
        if (this.stage.vars.mode == 1) {
          while (true) {
            this.direction = this.radToScratch(
              Math.atan2(
                this.sprites["Villager"].y - this.y,
                this.sprites["Villager"].x - this.x
              )
            );
            this.move(3);
            if (this.touching("mouse") && this.mouse.down) {
              this.costume = "Villager Scared 1";
              yield* this.wait(0.1);
              this.costume = "Villager Scared 2";
              yield* this.wait(0.1);
              this.direction = this.radToScratch(
                Math.atan2(
                  this.sprites["Player"].y - this.y,
                  this.sprites["Player"].x - this.x
                )
              );
              this.costume = this.random(20, 21);
              yield* this.wait(2);
              this.costume = "Villager Idle";
            }
            yield;
          }
        }
        if (this.stage.vars.mode == 0) {
          this.costume = "Villager Idle";
          while (true) {
            this.direction = this.radToScratch(
              Math.atan2(
                this.sprites["Villager"].y - this.y,
                this.sprites["Villager"].x - this.x
              )
            );
            yield* this.glide(
              3,
              this.random(-240, 240),
              this.random(-180, 180)
            );
            yield;
          }
        }
      }
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      if (!this.touching("mouse")) {
        yield* this.wait(10);
        this.stage.vars.endermanTrigger = 0;
      }
      yield;
    }
  }
}
