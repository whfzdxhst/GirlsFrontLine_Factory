cc.Class({
    extends: cc.Component,

    properties: {
    },
    onButtonDown(number,rank,name,kind) {
            this.node.parent.x = 0;
            var anim;
            switch(rank)
            {
                case 2:{
                    anim = this.getComponent(cc.Animation);
                    anim.play("Start2");
                    break;
                }
                case 3:{
                    anim = this.getComponent(cc.Animation);
                    anim.play("start3");
                    break;
                }
                case 4:{
                    anim = this.getComponent(cc.Animation);
                    anim.play("start4");
                    break;
                }
                case 5:{
                    anim = this.getComponent(cc.Animation);
                    anim.play("start5");
                    break;
                }
            }
            var self = this;
            cc.loader.loadRes("Star/"+rank, cc.SpriteFrame, function (err, spriteFrame) {
                self.node.parent.getChildByName("Role").getChildByName("Rank").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            cc.loader.loadRes("Rolepicture/"+number, cc.SpriteFrame, function (err, spriteFrame) {
                self.node.parent.getChildByName("Role").getChildByName("role").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            self.node.parent.getChildByName("Role").getChildByName("Name").getComponent(cc.Label).string = name;
            self.node.parent.getChildByName("Role").getChildByName("KindsOfGun").getComponent(cc.Label).string = kind;
            
    },

    onAnimCompleted: function () {
        this.node.active = false;
    },


    OnGunShow(){
        this.node.active = true;
        this.node.parent.x = 1500;
        this.node.getChildByName("identy").getChildByName("start1").opacity = 0;
        this.node.getChildByName("identy").getChildByName("start2").opacity = 0;
        this.node.getChildByName("identy").getChildByName("start3").opacity = 0;
        this.node.getChildByName("identy").getChildByName("start4").opacity = 0;
        this.node.getChildByName("identy").getChildByName("start5").opacity = 0;
    },

    start () {

    },

    // update (dt) {},
});
