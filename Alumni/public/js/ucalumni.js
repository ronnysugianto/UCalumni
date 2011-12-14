/* js for UC Alumni, Ray Pello */
$(document).ready(function() {
    $('.addbtn').click(function() {
				var loc			= $(this).closest('div').attr('id');
				var num     = $('.clonable' + loc).length; // how many "duplicatable" input fields we currently have

				switch(loc) {
					case ('cert'):
		       	var newNumcert  = new Number(num + 1);      // the numeric ID of the new input field being added

		       	// create the new element via clone(), and manipulate it's ID using newNum value
				    var newElem = $('#' + loc + 'data' + num).clone().attr('id', loc + 'data' + newNumcert);

		       	// manipulate the name/id values of the input inside the new element
							// 		       	newElem.children(':first').
							// attr('certName', 'certName' + newNumcert).
							// attr('certDate', 'certDate' + newNumcert).
							// attr('certPublisher','certPublisher' + newNumcert);
		         // insert the new element after the last "duplicatable" input field
						
						$('#noofcert').val(newNumcert);
						break;
					case ('employ'):
		       	var newNumemploy  = new Number(num + 1);      // the numeric ID of the new input field being added

		       	// create the new element via clone(), and manipulate it's ID using newNum value
				    var newElem = $('#' + loc + 'data' + num).clone().attr('id', loc + 'data' + newNumemploy);
							// 		       	newElem.children(':first').
							// attr('employName', 'bizName' + newNumemploy).
							// attr('employCountry', 'employCountry' + newNumemploy).
							// attr('employCurrent','employCurrent' + newNumemploy).
							// attr('employStartDate','employStartDate' + newNumemploy).
							// attr('employEndDate','employEndDate' + newNumemploy).
							// attr('employField','employField' + newNumemploy).
							// attr('employSalary','employSalary' + newNumemploy).
							// attr('employAlign','employAlign' + newNumemploy).
							// attr('employStudyHelp','employStudyHelp' + newNumemploy);
		         // insert the new element after the last "duplicatable" input field

						$('#noofemploy').val(newNumemploy);
						break;
					case ('biz'):
		       	var newNumbiz  = new Number(num + 1);      // the numeric ID of the new input field being added

		       	// create the new element via clone(), and manipulate it's ID using newNum value
				    var newElem = $('#' + loc + 'data' + num).clone().attr('id', loc + 'data' + newNumbiz);
							// 		       	newElem.children(':first').
							// attr('bizName', 'bizName' + newNumbiz).
							// attr('bizEst', 'bizEst' + newNumbiz).
							// attr('bizField','bizField' + newNumbiz).
							// attr('bizNumOfEmployee','bizNumOfEmployee' + newNumbiz).
							// attr('bizMonthlyRevenue','bizMonthlyRevenue' + newNumbiz);
		         // insert the new element after the last "duplicatable" input field

						$('#noofbiz').val(newNumbiz);
						break;
					case ('fam'):
		       	var newNumfam  = new Number(num + 1);      // the numeric ID of the new input field being added
		       	// create the new element via clone(), and manipulate it's ID using newNum value
				    var newElem = $('#' + loc + 'data' + num).clone().attr('id', loc + 'data' + newNumfam);
							// 		       	newElem.children(':first').
							// attr('famName', 'famName' + newNumfam).
							// attr('famEst', 'famEst' + newNumfam).
							// attr('famField','famField' + newNumfam).
							// attr('famNumOfEmployee','famNumOfEmployee' + newNumfam).
							// attr('famMonthlyRevenue','famMonthlyRevenue' + newNumfam);
		         // insert the new element after the last "duplicatable" input field

						$('#nooffam').val(newNumfam);
						break;
					case ('study'):
						break;
				}
		    $('#' + loc + 'data' + num).after(newElem);

        // enable the "remove" button
        $('.delbutton' + loc).removeClass('hidden').addClass('showelement');

        // business rule: you can only add 5 names
//        if (newNum == 5)
//           $('.addbutton').removeClass('showelement').addClass('hidden');
    });

    $('.delbtn').click(function() {
				var loc			= $(this).closest('div').attr('id');
        var num = $('.clonable' + loc).length; // how many "duplicatable" input fields we currently have

				if (num != 1) {
        	$('#' + loc + 'data' + num).remove();     // remove the last element
					$('#noof' + loc).val(num-1);
				}
        // enable the "add" button
        $('.addbutton' + loc).removeClass('hidden').addClass('showelement')

        // if only one element remains, disable the "remove" button
        if (num-1 == 1) {
          $('.delbutton' + loc).removeClass('showelement').addClass('hidden');
					}
    });
//    $('.delbtn').removeClass('showelement').addClass('hidden');
    $('#procertSkip').change(function() { $('#cert').toggle(); });
    $('#gradstudySkip').change(function() { $('#study').toggle(); });
    $('#unemployed').change(function() { 
				$('#working').toggle();
				$('#unemreason').toggle(); 			
			});
    $('#employed').change(function() { $('#employ').toggle(); });
    $('#entrepreneur').change(function() { $('#biz').toggle(); });
    $('#family').change(function() { $('#fam').toggle(); });
});