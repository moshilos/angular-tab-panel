/**
 * Created by moshi on 1/27/2016.
 */
(function(module){
    module.directive('tabPanel', function(){
        return {
            templateUrl: 'tab-panel/tab-panel.tpl.html',
            bindToController: true,
            controller: TabPanelCtrl,
            controllerAs: 'vm'
        }
    });

    function TabPanelCtrl($scope, $compile, $controller){
        var self = this;
        self.activeItem = null;
        self.navigateToItem = function(item){
            var tpl = '<div ng-controller="' + item.controller+ '"> ' + item.template+'</div>';
            $('.content').html($compile(tpl)($scope));
        };
        self.items = [
            {
                name: 'moshi',
                controller: 'CtrlMoshi as vm',
                template: '<span>{{vm.namea}}</span>{{vm.items}}'
            },
            {
                name: 'idan',
                controller: 'CtrlIdan as vm',
                template: '<span>{{vm.nameb}}</span>'
            }
        ]
    }
})(angular.module('tab-panel-demo'));
