cc.Class({
    extends: cc.Component,
    properties: {
        Manager: {
            default:null,
            type:cc.Node
        },
    },
    // LIFE-CYCLE CALLBACKS:

    
    OnButtonDown(){
        var name;
        name = this.node.name;
        cc.log("emit:" + name);
        this.Manager.emit('NumberBuildPool',name);
    },

    start () {

    },

    // update (dt) {},
});
