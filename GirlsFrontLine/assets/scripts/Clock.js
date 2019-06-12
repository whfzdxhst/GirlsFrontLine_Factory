cc.Class({
    extends: cc.Component,

    properties: {
        Time:0,
        isBegin:false,
        isFinish:false,
        callback:null,
        Finish: {
            default:null,
            type:cc.Node
        },
    },

    onLoad () {
    },

    OnClock(time){
        var i;
        cc.log('10:00');
        var time_f = time;
        this.Countdown(time_f);
        
        this.callback = function () {
            if (this.isFinish) {
                // 在立即完成点击后时取消这个计时器
                this.node.getChildByName('Clock_h').getComponent(cc.Label).string = '00';
                this.node.getChildByName('Clock_m').getComponent(cc.Label).string = '00';
                this.node.getChildByName('Clock_s').getComponent(cc.Label).string = '00';
                this.Finish.active = true;
                cc.log("!");
                this.isFinish = false;   
                this.unschedule(this.callback);
            }
            else{
                if(time_f>0){
                    time_f-=1;
                    this.Countdown(time_f);
                }
                else{
                    this.Finish.active = true;    
                }
            }
        }
        //设置计时器
        this.schedule(this.callback,1, time, 0);
    },

    start () {
    },
    
    Countdown(time_f)
    {
        var str = new Array();
        var time_s = time_f%60; 
        var time_m = Math.floor(time_f/60)%60;
        var time_h = Math.floor(time_f/60/60);
        if(time_s<10) str[0] = '0'+time_s;
        else str[0] = time_s;
        if(time_m<10) str[1] = '0'+time_m;
        else str[1] = time_m;
        if(time_h<10) str[2] = '0'+time_h;
        else str[2] = time_h;
        this.node.getChildByName('Clock_h').getComponent(cc.Label).string = str[2];
        this.node.getChildByName('Clock_m').getComponent(cc.Label).string = str[1];
        this.node.getChildByName('Clock_s').getComponent(cc.Label).string = str[0];
    },

    ImidiateDown(){
        this.isFinish = true;
    },
    //update (dt) {},
});
