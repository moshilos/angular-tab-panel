/**
 * Created by moshi on 1/27/2016.
 */
angular.module('tab-panel-demo', [])
.controller('Ctrl', function(){
    this.name = 'moshi';
})
.controller('CtrlMoshi', function(){
    this.namea = 'Moshi';
})
    .controller('CtrlIdan', function(){
        this.nameb = 'Idan';
    });