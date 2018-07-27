/*
* MyMenu.js
* This file describe the menu
* 2018.7.24
*
*/

"use strict";

function MyMenu(){

    this.bgBackground = "assets/StartScene/background.png";
    this.CursorTexture = "assets/StartScene/CrownIcons_007.png";
    this.NameTexture = "assets/StartScene/Name.png";
    this.HelpTexture = "assets/StartScene/Help.png";
    
    this.mBackground = null;
    this.back = null;
    this.Cursor = null;
    this.Name = null;
    this.mCamera = null;
    this.mText1 = null;
    this.mText2 = null;
    this.mText3 = null;
    this.mText4 = null;
    
    this.Help = null;
    
    this.choice = 0;
    
    this.isHelpOpen = false;
    this.BGM = "assets/StartScene/PilotsOfStone.mp3";

}

//gEngine.Core.inheritPrototype(MyMenu, Scene);

MyMenu.prototype.loadScene = function () {
    //暂时没有图片
    gEngine.Textures.loadTexture(this.bgBackground);
    gEngine.Textures.loadTexture(this.CursorTexture);
    gEngine.Textures.loadTexture(this.NameTexture);
    gEngine.Textures.loadTexture(this.HelpTexture);
    gEngine.AudioClips.loadAudio(this.BGM);

}

MyMenu.prototype.unloadScene = function () {

    //暂时没有图片
     gEngine.Textures.unloadTexture(this.bgBackground);
     gEngine.Textures.unloadTexture(this.CursorTexture);
     gEngine.Textures.unloadTexture(this.NameTexture);
     gEngine.Textures.unloadTexture(this.HelpTexture);
    //开始游戏
    gEngine.AudioClips.stopBackgroundAudio();
    gEngine.AudioClips.unloadAudio(this.BGM);
    var mygame = new MyGame();
    gEngine.Core.startScene(mygame);
}

MyMenu.prototype.initialize = function () {
    this.mCamera = new Camera(
        vec2.fromValues(650, 300), // position of the camera
        1300,                     // width of camera
        [0, 0, 1300, 600],         // viewport (orgX, orgY, width, height)
        1
    );
    this.mCamera.setBackgroundColor([0,0.8,0.8,0]);
    gEngine.DefaultResources.setGlobalAmbientIntensity(3);
    
    gEngine.AudioClips.playBackgroundAudio(this.BGM);
    
    this.mBackground = new TextureRenderable(this.bgBackground);
    this.mBackground.getXform().setSize(1800,600);
    this.mBackground.setColor([1,0,0,0]);
    this.mBackground.getXform().setPosition(505,300);
    
    this.Cursor = new TextureRenderable(this.CursorTexture);
    this.Cursor.getXform().setSize(70,90);
    this.Cursor.setColor([1,0,0,0]);
    this.Cursor.getXform().setPosition(830,250);
    
    this.Help = new TextureRenderable(this.HelpTexture);
    this.Help.getXform().setSize(512,512);
    this.Help.setColor([1,0,0,0]);
    this.Help.getXform().setPosition(350,300);
    
    this.Name = new TextureRenderable(this.NameTexture);
    this.Name.getXform().setSize(1024,200);
    this.Name.setColor([1,0,0,0]);
    this.Name.getXform().setPosition(1130,450);

    this.mText1 = new FontRenderable("Start Game");
    this.mText1.setColor([0,0,0,1]);
    this.mText1.getXform().setPosition(900,250);
    this.mText1.setTextHeight(35);
    
    this.mText2 = new FontRenderable("How to Play");
    this.mText2.setColor([0,0,0,1]);
    this.mText2.getXform().setPosition(900,180);
    this.mText2.setTextHeight(35);
    
    this.mText3 = new FontRenderable("Endings Overview");
    this.mText3.setColor([0,0,0,1]);
    this.mText3.getXform().setPosition(900,110);
    this.mText3.setTextHeight(35);

    this.mText4 = new FontRenderable("[press ENTER to confirm]");
    this.mText4.setColor([1,1,1,1]);
    this.mText4.getXform().setPosition(900,50);
    this.mText4.setTextHeight(25);
}

MyMenu.prototype.draw = function () {
    gEngine.Core.clearCanvas([0,0,0,1]);

    this.mCamera.setupViewProjection();
    this.mBackground.draw(this.mCamera);
    this.Cursor.draw(this.mCamera);
    
    this.Name.draw(this.mCamera);
    if(this.isHelpOpen==true){
        this.Help.draw(this.mCamera);
    }
    this.mText1.draw(this.mCamera);
    this.mText2.draw(this.mCamera);
    this.mText3.draw(this.mCamera);
    this.mText4.draw(this.mCamera);
}

MyMenu.prototype.update = function () {
    if(this.choice==0&&gEngine.Input.isKeyClicked(gEngine.Input.keys.Enter)){
        gEngine.GameLoop.stop();
    }
    if(this.choice==1&&gEngine.Input.isKeyClicked(gEngine.Input.keys.Enter)){
        this.isHelpOpen=true;
    }
    if(this.isHelpOpen==true&&gEngine.Input.isKeyClicked(gEngine.Input.keys.Space)){
        this.isHelpOpen=false;
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Up)){
        var temp = this.Cursor.getXform().mPosition;
        if(this.choice>0){           
            this.Cursor.getXform().setPosition(temp[0],temp[1]+67);
            this.choice -= 1;
        }
        else{
            this.Cursor.getXform().setPosition(temp[0],temp[1]-67*2);
            this.choice = 2;
        }
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Down)){
        var temp = this.Cursor.getXform().mPosition;
        if(this.choice<2){
            var temp = this.Cursor.getXform().mPosition;
            this.Cursor.getXform().setPosition(temp[0],temp[1]-67);
            this.choice += 1;
        }
        else{
            this.Cursor.getXform().setPosition(temp[0],temp[1]+67*2);
            this.choice = 0;
        }
    }
}
