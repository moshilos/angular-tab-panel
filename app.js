/**
 * Created by moshi on 1/27/2016.
 */
angular.module('tab-panel-demo', [])
.controller('Ctrl', function(){
    this.name = 'moshi';
})
.controller('CtrlMoshi', function(){
    var self = this;
    self.namea = 'Moshi';
    self.addTab = function(){
        self.tabPanelApi.addItem({
            name: 'moshi2',
            controller: 'CtrlMoshi as vm',
            template: '<div inject-tab-panel-api="vm"><span>{{vm.namea}}</span><button ng-click="vm.addTab()">add Tab</button></div>'
        })
    }
})
    .controller('CtrlIdan', function(){
        this.nameb = 'Idan';
    });