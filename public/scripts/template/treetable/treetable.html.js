angular.module('template/treetable/treetable.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/treetable/treetable.html',
    '<table class="table table-bordered treetable"><thead><tr><th>名称</th><th>Kind</th><th>Size</th></tr></thead><tbody ng-transclude></tbody></table>');
}]);
