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
    module.directive('injectTabPanelApi', function(){
        return {
            restrict: 'A',
            require: '^tabPanel',
            link: function(scope, element, attrs, ctrl){
                scope.tabPanelApi = ctrl.api;
                if(attrs.injectTabPanelApi){
                    scope[attrs.injectTabPanelApi].tabPanelApi = ctrl.api;
                }
            }
        }
    });

    function TabPanelCtrl($scope, $compile, $controller){
        var self = this;
        self.activeItem = null;
        self.navigateToItem = navigateToItem;

        self.api = {
            addItem: addItem
        };

        self.items = [
            {
                name: 'moshi',
                controller: 'CtrlMoshi as vm',
                template: '<div inject-tab-panel-api="vm"><span>{{vm.namea}}</span><button ng-click="vm.addTab()">add Tab</button></div>'
            },
            {
                name: 'idan',
                controller: 'CtrlIdan as vm',
                template: '<span>{{vm.nameb}}</span>'
            }
        ];

        function addItem(item){
            self.items.push(item);
        }

        function navigateToItem(item){

            var tpl = '<div ng-controller="' + item.controller+ '"> ' + item.template+'</div>';
            var contentElement = $('.content');
            contentElement.html(tpl);
            $compile($('.content'))($scope);
        }
    }
})(angular.module('tab-panel-demo'));
