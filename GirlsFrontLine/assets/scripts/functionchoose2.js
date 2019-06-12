cc.Class({
    extends: cc.Component,

    properties: {
        Close:{
            default:[],
            type:[cc.Node]
        },
        Open:{
            default:[],
            type:[cc.Node]
        },
        isColorChange:false,
        Color:{
            default:[],
            type:[cc.Node]
        },
        isAnimationPlay:false,
        AnimationName:"",
        Animations:{
            default:null,
            type:cc.Animation
        },
    },
    // onLoad () {},

    start () {

    },

    OnBottonDown(){
        var i;
        for(i=0;i<this.Close.length;i++){
            this.Close[i].active = false;   
        }
        for(i=0;i<this.Open.length;i++){
            this.Open[i].active = true;   
        }

        if(this.isColorChange){
            this.node.color = new cc.Color(231,175,6);
            for(i=0;i<this.Color.length;i++){
                this.Color[i] = new cc.Color(255,255,255);
            }
        }

        if(this.isAnimationPlay){
            var anim = this.Animations.getComponent(cc.Animations);
            anim.play(this.AnimationName);
        }
    },
    // update (dt) {},
});
