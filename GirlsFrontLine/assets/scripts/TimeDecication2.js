cc.Class({
    extends: cc.Component,

    properties: {
        Comsume:{
            default:null,
            type:cc.Node
        },
        file:{
            default:null,
            type:cc.TextAsset
        },
    },
    onLoad () {
        this.node.on('dataExchange',function(childname,data1,data2,data3,data4){
            var i;
            var text = this.file.text.split("\n");
            var num = new Array();
            var rank = new Array();
            var name = new Array();
            var kind = new Array();
            var time = new Array();
            for(i=0;i<text.length;i++)
            {
                var cache = text.split("_");
                num[i] = cache[0];
                rank[i] = cache[1];
                name[i] = cache[2];
                kind[i] = cache[3];
                time[i] = cache[4];
            }
            var randoms = Math.florr(Math.random()*(1-12)+12);
            
            var backNode = this.node.getChildByName(childname).getChildByName("Begin");
            backNode.active = true;
            backNode.getChildByName("Clock").getComponent('Clock').OnClock(time[randoms]);
            this.Comsume.getComponent('Comsumption').OnConsume(data1,data2,data3,data4);
            backNode.getChildByName("FinishBotton").getChildByName("Finsh").getComponent("ProductCompleted").rank = parseInt(rank[randoms]);
            backNode.getChildByName("FinishBotton").getChildByName("Finsh").getComponent("ProductCompleted").number = parseInt(num[randoms]);
            backNode.getChildByName("FinishBotton").getChildByName("Finsh").getComponent("ProductCompleted").nameR = parseInt(name[randoms]);
            backNode.getChildByName("FinishBotton").getChildByName("Finsh").getComponent("ProductCompleted").kind = parseInt(kind[randoms]);
        },this)
    },

    start () {

    },

    // update (dt) {},
});
