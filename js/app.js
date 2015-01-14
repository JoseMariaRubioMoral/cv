(function() {
    
    var app = angular.module("angularJoseMariaRubioMoralCV", ["firebase"]);
    
    app.factory("Node", ["$firebase", function($firebase) {
        return function(node){
            var ref = new Firebase("https://burning-heat-1910.firebaseio.com/" + node);
            return $firebase(ref).$asObject();
        }
    }]);
    
    app.controller( "StudiesController", ["$scope", "Node", function($scope, Node){
        $scope.studies = Node("studies");
    }]);
    
    app.controller( "TimeLineController", ["$scope", "Node", function($scope, Node){
        $scope.timeline = Node("timeline");
        console.log(Node("timeline"));
    }]);
    
    app.directive("cvTitle", function(){
        return{
            restrivt: "E",
            templateUrl: "/html/cv-title.html"
        }
    });
    
    app.directive("cvGraphs", function(){
        return{
            restrivt: "E",
            templateUrl: "/html/cv-graphs.html"
        }
    });
    
    app.directive("cvTimeline", function(){
        return{
            restrivt: "E",
            templateUrl: "/html/cv-timeline.html"
        }
    });
    
    app.directive("cvStudies", function(){
        return{
            restrivt: "E",
            templateUrl: "/html/cv-studies.html"
        }
    });
    
})();
