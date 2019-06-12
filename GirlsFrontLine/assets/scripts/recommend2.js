cc.Class({
    extends: cc.Component,

    properties: {
        KindsGun:0,
        NumCache:{
            default:null,
            type:cc.Node
        },
    },

    // onLoad () {},

    start () {

    },

    OnButtonBack()
    {
        this.node.active = false;
    },

    OnButtonDown(){
        this.node.active = true;
    },
    OnButtonAply(){
        switch(this.KindsGun)
        {
            case 0:{
                this.NumCache.getComponent("NumberCache").Evalution(130,130,130,30);
                this.node.parent.active = false;
                break;
            }
            case 1:{
                this.NumCache.getComponent("NumberCache").Evalution(400,400,100,200);
                this.node.parent.active = false;
                break;
            }
            case 2:{
                this.NumCache.getComponent("NumberCache").Evalution(400,100,400,200);
                this.node.parent.active = false;
                break;
            }
            case 3:{
                this.NumCache.getComponent("NumberCache").Evalution(100,400,400,200);
                this.node.parent.active = false;
                break;
            }
            case 4:{
                this.NumCache.getComponent("NumberCache").Evalution(800,800,100,400);
                this.node.parent.active = false;
                break;
            }
        }
    },
    // update (dt) {},
});
