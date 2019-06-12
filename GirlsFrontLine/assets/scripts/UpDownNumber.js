cc.Class({
    extends: cc.Component,

    properties: {
        UpOrDown:true, //true is Up
        Number: {
            default:null,
            type: cc.Label
        },
        isMidel:false,
        FrontNumber: {
            default:null,
            type: cc.Label
        },
    },
    // onLoad () {},
    start () {
        if(this.isMidel){
            var lable = this.Number.getComponent(cc.Label);
            lable.string = 3;
        }
    },

    OnButtonDown(){
        var lable = this.Number.getComponent(cc.Label);
        var str = lable.string;
        if(this.UpOrDown){
            var i = parseInt(str);
            if(i<9) i+=1;
            lable.string = i;
        }
        else{
            var i = parseInt(str);
            if(i>0){
                if(this.isMidel)
                {
                    var fLable = this.FrontNumber.getComponent(cc.Label);
                    var str = fLable.string;
                    if(str != '0') i-=1;
                    else{
                        if(i>3) i-=1;
                    }
                }
                else{
                    i-=1;
                }
            }
            
            lable.string = i;
        }
    },
    update (dt) {
        if(this.isMidel)
        {
            var fLable = this.FrontNumber.getComponent(cc.Label);
            var str = fLable.string;
            if(str == '0')
            {
                var lable = this.Number.getComponent(cc.Label);
                if(lable.string<3) lable.string = 3;
            }
        }
    },
});
