/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!

var AllEnemy = [{Id:0, msg:"", mHealth:"50", atk:15, def:0, numItem:1, dropItemId:0, money:20},//mushroom
    {Id:1, msg:"", mHealth:"50", atk:15, def:0, numItem:2, dropItemId:1, money:30},//eagle
    {Id:2, msg:"", mHealth:"50", atk:15, def:5, numItem:2, dropItemId:3, money:30},//knight
    {Id:3, msg:"", mHealth:"50", atk:15, def:0, numItem:0, dropItemId:0, money:10}]

function Enemy(id) {
   
    this.Id = AllEnemy[id].Id;
    this.msg = AllEnemy[id].msg;   //the description of enemy
    
    // attribute
    this.mHealth = AllEnemy[id].mHealth;    
    this.atk = AllEnemy[id].atk;
    this.def = AllEnemy[id].def;
    this.money = AllEnemy[id].money;
    
    //item
    this.numItem = AllEnemy[id].numItem;    //the number of item you can get
    this.dropItemId = AllEnemy[id].dropItemId;  //the item id 
    
}

Enemy.prototype.fight = function (game){
    var total = 0;
    var msg;
    var dmg1 = this.atk - game.mDefenseValue;
    if(dmg1 < 0)
        dmg1 = 0;
    var dmg2 = game.mAttackValue - this.def;
    if(dmg2 < 0)
        dmg2 = 0;
    console.log(dmg1);
    console.log(dmg2);
    while(game.mHealthValue > 0 && this.mHealth > 0){
        this.mHealth -= dmg2;
        game.mHealthValue -= dmg1;
        total += dmg1;
    }
    if(game.mHealthValue <= 0){
        //gEngine.GameLoop.stop();
        if(this.Id == 2){
            game.ending = 5;
        }
        else
            game.ending = 0;
        msg = "you lose";
        game.EndGame();
        return msg;
    }   
    else if(this.numItem>0){
        game.mBag.AddItem(this.dropItemId, this.numItem);
    }
    console.log(this.money);
    game.mMoneyValue += this.money;
    console.log(game.mMoneyValue);
    msg = "You win, lose " + total + " HP, get " + NameList[this.dropItemId] + " * "+this.numItem+", "+this.money+" gold.";
    return msg;    
}
