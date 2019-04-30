// script for calendar functionality

$(document).ready(function(){

	// put all dates in an array (using Liquid) so that indexing for collapsible works correctly. Indexing is required to jump to and open the correct collapsible.

	// needs to be 0-indexed, with first collapsible having index of 0 and last having index of n

	dates = new Array();
	{% assign index = 0 %} 
	{% assign courses = site.courses | sort: "start" %} // so courses are sorted chronologically
	{% for course in courses %} // loop through all courses

		dates[{{ index }}] = "{{ course.start }}"; // item at this index number is set to course start time at this index number
		{% assign index = index | plus: 1 %} // increment index (couldn't get increment operator to work, maybe someone can fix?)

	{% endfor %}


	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'agendaWeek,agendaDay'
		},
		defaultDate: '2019-05-27',
		minTime: '08:00:00', // these two lines fix the viewable area to business
		maxTime: '17:30:00', // hours and make it not scrollable
		contentHeight: 500,
		defaultView: 'agendaWeek',
		editable: false,
		scrollTime: '08:00:00', //preset the top of the viewable portion at 8am
		events: '{{ "json" | relative_url }}', //f ile is simply called "json". Could have an extension, I suppose
		

		// loop through dates array and see if matches event's date
	    eventClick: function(calEvent, jsEvent, view) {
	    	var id = 0; 
	    	for (i = 0; i < dates.length; i++){
	    		// use momentjs framework to convert Moment object to correct format
	    		if(moment(calEvent.start).format().toString() == dates[i]) {
	    			id = i; // set the collapsible index to the index we found in the array
	    		}
	    	}

	        $('.collapsible').collapsible('open', id); // open the collapsible at that index number
	    }
	});
});
