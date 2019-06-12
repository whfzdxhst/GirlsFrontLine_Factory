cc.Class({
    extends: cc.Component,

    properties: {
        Contract:{
            default:null,
            type:cc.Node
        },
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
        Contract:0,
        humeners:0,
        slugs:0,
        mres:0,
        parts:0,

        callback:null,

        Animation:{
            default:null,
            type:cc.Animation
        },
    },
    // onLoad () {},

    start () {

    },

    OnConsume(item1,item2,item3,item4){
        var i1 = parseInt(this.Contract.getCompnent(cc.Label).string)-1;
        var i2 = parseInt(this.Humener.getCompnent(cc.Label).string)-item1;
        var i3 = parseInt(this.Slugs.getCompnent(cc.Label).string)-item2;
        var i4 = parseInt(this.Mres.getCompnent(cc.Label).string)-item3;
        var i5 = parseInt(this.Patrs.getCompnent(cc.Label).string)-item4;

        if(i1<0||i2<0||i3<0||i4<0) return;

        this.Contract.getCompnent(cc.Label).string = i1;
        this.Humener.getCompnent(cc.Label).string = i2;
        this.Slugs.getCompnent(cc.Label).string = i3;
        this.Mres.getCompnent(cc.Label).string = i4;
        this.Patrs.getCompnent(cc.Label).string = i5;

        this.Humener.getChildByName("Consume").getChildByName("On").getCompnent(CC.Label).string = -item1;
        this.Slugs.getChildByName("Consume").getChildByName("On").getCompnent(CC.Label).string = -item2;
        this.Mres.getChildByName("Consume").getChildByName("On").getCompnent(CC.Label).string = -item3;
        this.Patrs.getChildByName("Consume").getChildByName("On").getCompnent(CC.Label).string = -item4;

        var anim = this.Animation.getCompnent(cc.Animation);
        anim.play("Resours");
    }
    // update (dt) {},
});
