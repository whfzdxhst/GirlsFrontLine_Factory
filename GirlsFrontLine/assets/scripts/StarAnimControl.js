cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },


    onButtonDown(number,rank,name,kind){
        this.onDestroy.parent.x = 0;
        var anim;
        switch(rank){
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
            var self;
            cc.loader,loadRes("Start/"+rank,cc.spriteFrame,function(err,spriteFrame){
                self.node.parent.getChildByName("Role").getChildByName("Rank").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            })
            cc.loader,loadRes("Start/"+number,cc.spriteFrame,function(err,spriteFrame){
                self.node.parent.getChildByName("Role").getChildByName("role").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            })
            self.node.parent.getChildByName("Role").getChildByName("Name").getComponent(cc.Sprite).spriteFrame = Name;
            self.node.parent.getChildByName("Role").getChildByName("KindOfGun").getComponent(cc.Sprite).spriteFrame = kind;
        }
    },

    OnAnimaCompleted(){
        this.node.active = false;
    },

    OnGunShow(){
        this.node.active = true;
        this.node.parent_x = 1500;
        this.node.getChildByName("identy").getChildByName("star1").opacity = 0;
        this.node.getChildByName("identy").getChildByName("star2").opacity = 0;
        this.node.getChildByName("identy").getChildByName("star3").opacity = 0;
        this.node.getChildByName("identy").getChildByName("star4").opacity = 0;
        this.node.getChildByName("identy").getChildByName("star5").opacity = 0;
    }

    // update (dt) {},
});
