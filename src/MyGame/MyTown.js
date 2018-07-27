/*
* MyTown.js
* Level 2
* 2018.7.24
*
*/

"use strict";

function MyTown() {
    this.bgForestTexture = "assets/forest3.png";
    this.BagTexture = "assets/bag.png";
    this.kKnight = "assets/Knight.png";
    this.CursorTexture = "assets/cursor.png";

    this.bgTown = "";
    this.bgPalace = "";
    this.bgForest = null;
    this.mBag = null;
    this.bgMsg = null;
    this.mHero = null;
    this.mHealth = null;
    this.mHealthValue = 100;
    this.mHealthValueMax = 100;
    this.mHunger = null;
    this.mHungerValue = 100;
    this.mHungerValueMax = 100;
    this.mAttack = null;
    this.mAttackValue = 10;
    this.mDefense = null;
    this.mDefenseValue = 10;
    this.mMes1 = null;
    this.mMes2 = null;
    this.mMes3 = null;
    this.mMes4 = null;

    this.mCamera = null;
    this.attributeCamera = null;
    this.bagCamera = null;
    this.mEventSet = null;

    // flags
    this.isBagOpened = false;
    this.isMesOn = false;
    this.hasChosen = false;
    this.mEventIndex = 0;

    //counter 
    this.mCounter = 0;

}

gEngine.Core.inheritPrototype(MyMenu, Scene);

MyMenu.prototype.loadScene = function () {
    //暂时没有图片
    //gEngine.Textures.loadTexture(this.bgBackground);

}

MyMenu.prototype.unloadScene = function () {

    //暂时没有图片
    // gEngine.Textures.unloadTexture(this.bgBackground);

    
}

MyMenu.prototype.initialize = function () {
    
}

MyMenu.prototype.draw = function () {
    
}

MyMenu.prototype.update = function () {
    
}