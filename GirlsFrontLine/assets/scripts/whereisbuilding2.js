cc.Class({
    extends: cc.Component,

    properties: {
        Manager:{
            default:null,
            type:cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    OnButtonDown(){
        var name;
        name = this.node.name;
        this.Manager.emit('NumberBuilPool',name);
    }
    // update (dt) {},
});
