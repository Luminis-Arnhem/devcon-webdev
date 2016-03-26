angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("people/partials/people.html","<div>people en steef</div>");
$templateCache.put("talk/partials/talks.html","<table class=\"table table-striped\">\n    <tr ng-repeat=\"talk in ctrl.talks\">\n        <td> {{ talk.title }} </td>\n    </tr>    \n</table>");
$templateCache.put("timeslot/partials/timeslots.html","");
$templateCache.put("venue/partials/venue.html","");
$templateCache.put("venue/partials/venues.html","\n<table class=\"table table-striped\" ng-repeat=\"venue in ctrl.venues\">\n    <tr>\n        <td>{{venue.name}}</td>\n    </tr>\n</table>\n\n<h1>hoi</h1>\n");}]);