cc.Class({
    extends: cc.Component,

    properties: {
        Fast: {
            default:null,
            type:cc.Node
        }, 
        FastE: {
            default:null,
            type:cc.Node
        }, 
        Contract: {
            default:null,
            type:cc.Node
        },  
        Equipment:{
            default:null,
            type:cc.Node
        } ,
        Humener:{
            default:null,
            type:cc.Node
        },
        Slugs:{
            default:null,
            type:cc.Node
        },
        Mres:{
            default:null,
            type:cc.Node
        },
        Patrs:{
            default:null,
            type:cc.Node
        },
        Diamond:{
            default:null,
            type:cc.Node
        },

        fast:0,
        contract:0,
        equipment:0,
        humener:0,
        slugs:0,
        mres:0,
        parts:0,
        diamond:0,

        callback:null,

        Animation:{
            default:null,
            type:cc.Animation
        }
    },
    // onLoad () {},

    start () {

    },

    OnConsume(item1,item2,item3,item4) //consume\humener\slugs\mres\parts
    {
        var i1 = parseInt(this.Contract.getComponent(cc.Label).string) - 1;
        var i2 = parseInt(this.Humener.getComponent(cc.Label).string) - item1;
        var i3 = parseInt(this.Slugs.getComponent(cc.Label).string) - item2;
        var i4 = parseInt(this.Mres.getComponent(cc.Label).string) - item3;
        var i5 = parseInt(this.Patrs.getComponent(cc.Label).string) - item4;
        

        cc.log(i1);cc.log(i2);cc.log(i3);cc.log(i4);cc.log(i5);

        if(i1<0||i2<0||i3<0||i4<0||i5<0) return;

        this.Contract.getComponent(cc.Label).string = i1;
        this.Humener.getComponent(cc.Label).string = i2;
        this.Slugs.getComponent(cc.Label).string = i3;
        this.Mres.getComponent(cc.Label).string =  i4;
        this.Patrs.getComponent(cc.Label).string = i5;
        
        this.Humener.getChildByName("Consume").getChildByName("com").getComponent(cc.Label).string = -item1;
        this.Slugs.getChildByName("Consume").getChildByName("com").getComponent(cc.Label).string = -item2;
        this.Mres.getChildByName("Consume").getChildByName("com").getComponent(cc.Label).string = -item3;
        this.Patrs.getChildByName("Consume").getChildByName("com").getComponent(cc.Label).string = -item4;

        var anim = this.Animation.getComponent(cc.Animation);
        anim.play("Resours");
    }
    // update (dt) {},
});
