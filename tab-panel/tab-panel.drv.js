/**
 * Created by moshi on 1/27/2016.
 */
(function(module){
    module.directive('tabPanel', function(){
        return {
            restrict: 'E',
            scope: {
                items: '='
            },
            templateUrl: 'tab-panel/tab-panel.tpl.html',
            bindToController: true,
            controller: TabPanelCtrl,
            controllerAs: 'vm'
        }
    });

    module.directive('tabPanelInstance', function(){
        return {
            restrict: 'A',
            require: '^tabPanel',
            link: function(scope, element, attrs, tabPanelCtrl){
                scope.tabPanelApi = tabPanelCtrl.api;
                var myCtrl = element.controller();
                if(myCtrl){
                    myCtrl.tabPanelApi = tabPanelCtrl.api
                }
            }
        }
    });

    function TabPanelCtrl($scope, $compile){
        var self = this;
        self.activeItem = null;
        self.navigateToItem = navigateToItem;

        self.api = {
            addItem: addItem
        };

        function addItem(item){
            self.items.push(item);
        }

        function navigateToItem(item){
            var tpl = '<div ng-controller="' + item.controller+ '"> ' + item.template+'</div>';
            var contentElement = $('.content');
            if(contentElement.children().length){
                contentElement.children().scope().$destroy();
            }
            contentElement.html(tpl);
            $compile(contentElement)($scope);
        }
    }
})(angular.module('angular-tab-panel'));
