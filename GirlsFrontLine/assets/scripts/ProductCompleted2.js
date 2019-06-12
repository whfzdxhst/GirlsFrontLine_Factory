cc.Class({
    extends: cc.Component,

    properties: {
        AnimControl:{
            default:null,
            type:cc.Node
        },
        number:0,
        nameR:"",
        rank:1,
        kind:"",
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    OnButtonDown(){
        this.AnimControl.getCompont("StrAnimControl").onButtonDown(this.number,this.rank,this.nameR,this.kind);
        var begin = this.node.parent.parent;
        this.node.active = false;
        begin.active = false;
    }
    // update (dt) {},
});
