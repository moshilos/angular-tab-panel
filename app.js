/**
 * Created by moshi on 1/27/2016.
 */
angular.module('angular-tab-panel', [])

.controller('MainCtrl', function(){
    var self = this;
    self.items = [
        {
            name: 'moshi',
            controller: 'CtrlMoshi as vm',
            template: '<div tab-panel-instance="vm"><span>{{vm.namea}}</span><button ng-click="vm.addTab()">add Tab</button></div>'
        },
        {
            name: 'idan',
            controller: 'CtrlIdan as vm',
            template: '<span>{{vm.nameb}}</span>'
        }
    ];
})


    .controller('CtrlMoshi', function($rootScope, $scope){
        var self = this;
        self.namea = 'Moshi';
        self.addTab = function(){
            self.tabPanelApi.addItem({
                name: 'moshi2',
                controller: 'CtrlMoshi as vm',
                template: '<div inject-tab-panel-api="vm"><span>{{vm.namea}}</span><button ng-click="vm.addTab()">add Tab</button></div>'
            })
        };
        window.root = $rootScope;
        $scope.$on('moshi',function(){
            console.log('moshi');
        });
        $scope.$on('$destroy', function(){
            console.log('destroy A')
        });
    })
    .controller('CtrlIdan', function(){
        this.nameb = 'Idan';
    });