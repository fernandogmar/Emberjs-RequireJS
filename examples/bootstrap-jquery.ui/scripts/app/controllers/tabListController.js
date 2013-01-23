define([
  "models/TabModel"
],function(TabModel){
  

  var helper = {
    slugify : function(str) {
      if(!str){
        return "";
      }
      
      return str.replace(/[^a-zA-Z0-9-._~]/g, '-').toLowerCase().replace(/^-+/, '').replace(/-+$/, '').replace(/-+/g, '-');
    },
    changeHashTo : function(str) {
      window.location.hash = str;
    },
    randomLowerCaseLetters: function(string_length){
      var chars = "abcdefghiklmnopqrstuvwxyz";
      return this.randomIdFrom(string_length, chars);
    },
    randomIdFrom: function(string_length, chars){
      var i, rnum,
          randomstring = '';
          
      for (i=0; i<string_length; i= i+1) {
        rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars[rnum];
      }
      return randomstring;
    }
  };

  
 var tabListController = Em.ArrayController.createWithMixins({
    selected: null,
    content: [], 
    sortProperties: ["order"],
    sortAscending: true,
    tabs: function(){
      return this.filter(function(item, index, list){
        return !item.get("deleted");
      });
    }.property('@each.deleted'),
    selectTab: function(slug){
        var selectedTab = this.get("content").findProperty("slug", slug);
        this.set("selected", selectedTab);
        return selectedTab;
    },
    addTab: function(tab){
      var tabs = this.get('content');
      if(!tab.get){
        tab = TabModel.create(tab);
      }
      tabs.pushObject(tab);
      
      return this;
    },
    addTabs: function(tabs){
        if(tabs && tabs.length){
            var self = this;
            tabs.forEach(function(tab){
                self.addTab(tab);
            });
        }
    },
    createTab: function(title){
        var tab = TabModel.create(properties);
                
        this.addTab(tab);
        this.showTab(tab);    
    },
    removeTab: function(tab){
      var controller = this,
        tabs = controller.get("content"),
        last = tabs.length - 1,
        index = tabs.indexOf(tab),
        next_tab;

      if (index < 0) {
        return;
      }  

      if(tab === controller.get("selected")){       
        if(last === 0 ){
          next_tab = null;
        } else if(index === last){
          next_tab = tabs.objectAt(index - 1);
        } else {
          next_tab = tabs.objectAt(index + 1);
        }
        if(next_tab) {
          controller.showTab(next_tab);
        } else {
          setTimeout(function(){
            controller.showTab(next_tab);
            controller.set("selected", null);
          });//no tab to show
        }
      }
      tab.set("deleted", true);
    },  
    showTab: function(tab){
      if(tab){
        helper.changeHashTo(tab.get("link"));
      } else {
        helper.changeHashTo("");
      }
    },
    showFirstTab: function(){
      var first_tab = this.objectAt(0);
      if(first_tab){       
        this.set("selected", first_tab);
      }
    },
    existSlug: function(slug){
      return !!this.findProperty("slug", slug);
    },
    createUniqueSlug: function(title){
      var slug;
      
      if(!title){
        slug = helper.randomLowerCaseLetters(10);
      } else {
        slug = helper.slugify(title);
      }
      
      while(this.existSlug(slug)){
        slug = slug + "-" + this.get('content').length + helper.randomLowerCaseLetters(2);
      }
      return slug;
    }
}); 
  
  return tabListController;
  
});
