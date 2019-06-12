cc.Class({
    extends: cc.Component,

    properties: {

        content:{
            default:null,
            type: cc.Node
        },

        NumLab1: {
            default:[],
            type: [cc.Label]
        },

        NumLab2: {
            default:[],
            type: [cc.Label]
        },

        NumLab3: {
            default:[],
            type: [cc.Label]
        },

        NumLab4: {
            default:[],
            type: [cc.Label]
        },

        number1:0,
        number2:0,
        number3:0,
        number4:0,

        Name:"",
    },


    onLoad () {
        this.node.on('NumberBuildPool', function (name) {
            this.Name = name;      
          },this);
    },

    start () {

    },

    OnButtonDown(){
        var num1 = 0;
        var num2 = 0;
        var num3 = 0;
        var num4 = 0;
        var i;
        for(i=0;i<3;i++)
        {
            var lable = this.NumLab1[i].getComponent(cc.Label);
            var str = lable.string;
            num1 += parseInt(str)*Math.pow(10,i);
        }
        for(i=0;i<3;i++)
        {
            var lable = this.NumLab2[i].getComponent(cc.Label);
            var str = lable.string;
            num2 += parseInt(str)*Math.pow(10,i);
        }
        for(i=0;i<3;i++)
        {
            var lable = this.NumLab3[i].getComponent(cc.Label);
            var str = lable.string;
            num3 += parseInt(str)*Math.pow(10,i);
        }
        for(i=0;i<3;i++)
        {
            var lable = this.NumLab4[i].getComponent(cc.Label);
            var str = lable.string;
            num4 += parseInt(str)*Math.pow(10,i);
        }
        this.number1 = num1;
        this.number2 = num2;
        this.number3 = num3;
        this.number4 = num4;

        cc.log(num1);cc.log(num2);cc.log(num3);cc.log(num4);

        this.content.emit('dataExchange', this.Name,this.number1,this.number2,this.number3,this.number4,this.node.name);
    },

    Evaluation(num1,num2,num3,num4){
        var i;
        for(i=0;i<3;i++)
        {
            var lable = this.NumLab1[i].getComponent(cc.Label);
            var right = num1%10;
            lable.string = right;
            num1 = parseInt(num1/10);
        }
        for(i=0;i<3;i++)
        {
            var lable = this.NumLab2[i].getComponent(cc.Label);
            var right = num2%10;
            lable.string = right;
            num2 = parseInt(num2/10);
        }
        for(i=0;i<3;i++)
        {
            var lable = this.NumLab3[i].getComponent(cc.Label);
            var right = num3%10;
            lable.string = right;
            num3 = parseInt(num3/10);
        }
        for(i=0;i<3;i++)
        {
            var lable = this.NumLab4[i].getComponent(cc.Label);
            var right = num4%10;
            lable.string = right;
            parseInt(num4/10);
        }
    },
    // update (dt) {},
});
