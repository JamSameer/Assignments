    var initialCats=[
    {
        clickCount : 0,
        name : '*Ragdoll*',
        imgsrc : 'images/chewie.jpg',
        nickname: ['doll']
    },
    {
        clickCount : 0,
        name : '*Bengal Cat*',
        imgsrc : 'images/poplinre.jpg',
        nickname: ['bengaaaal']
    },
    {
        clickCount : 0,
        name : '*American Curl*',
        imgsrc : 'images/jetske.jpg',
        nickname: ['Americaaaaaaa']

    },


    ];



    var Cat=function(data){
        this.clickCount=ko.observable(data.clickCount);
        this.name=ko.observable(data.name);
        this.nickname=ko.observableArray(data.nickname);
        this.imgsrc=ko.observable(data.imgsrc);



        this.title=ko.computed (function(){
           var title;
           var clicks=this.clickCount();
            if(clicks==0){
                title='Cat Under Process';}
                    else if(clicks<10){
                    title='New Born';}
                    else if (clicks<25) {
                        title='Infant';}
                        else{
                           this.title.clickCount()==0;
                       }
                       return title;
                   },this);
    }



    var ViewModel=function () {
    	var self=this;
    	this.catList = ko.observableArray([]);
        this.catname=ko.observable("");
        initialCats.forEach(function(catItem){
            self.catList.push(new Cat(catItem) );
        });



        this.currentCat = ko.observable(this.catList()[0]);


        this.incrementCounter = function()
        {
            self.currentCat().clickCount(self.currentCat().clickCount()+1);
        };



        self.setCat= function(clickedCat)
        {
            self.currentCat(clickedCat);
        }



        self.addnickname = function() {


            if(self.catname() !=  "")
            {
          self.currentCat().nickname.push( self.catname());
          self.catname("");
      }
        };

        self.removeNickname = function(data) {
            self.currentCat().nickname.remove(data);
        }


    }

    ko.applyBindings(new ViewModel());



