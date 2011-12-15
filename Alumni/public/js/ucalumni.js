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
 		       	newElem.children(':first').
							// attr('employName', 'bizName' + newNumemploy).
							// attr('employCountry', 'employCountry' + newNumemploy).
							// attr('employCurrent','employCurrent' + newNumemploy).
							// attr('employStartDate','employStartDate' + newNumemploy).
							// attr('employEndDate','employEndDate' + newNumemploy).
							// attr('employField','employField' + newNumemploy).
							// attr('employSalary','employSalary' + newNumemploy).
							attr('employAlign','employAlign' + newNumemploy).
							attr('employStudyHelp','employStudyHelp' + newNumemploy);
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
    $('#currentJob').change(function() { $('#endDate').toggle(); });
});


/* Paste this code into an external JavaScript file  */
/* This script and many more are available free online at
The JavaScript Source :: http://javascript.internet.com
Created by: Down Home Consulting :: http://downhomeconsulting.com */
/*
Country State Drop Downs v1.0.
(c) Copyright 2005 Down Home Consulting, Inc.
www.DownHomeConsulting.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, itness for a particular purpose and noninfringement. in no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.

*/

// If you have PHP you can set the post values like this
//var postState = '<?= $_POST["state"] ?>';
//var postCountry = '<?= $_POST["country"] ?>';
//var postState = '';
var postCountry = '';
var postField = '';

var fields = '\
Accountants|\
Advertising Agencies|\
Advertising Media|\
Air Conditioning or Heating|\
Airports|\
Amusements|\
Animal Care Services and Supplies|\
Antiques and Collectibles|\
Apartments|\
Apparel|\
Appliances Sales and Repair Services|\
Appraisal Services|\
Arborists|\
Architects|\
Artists or Art Galleries|\
Assisted Living/Skilled Nursing Facilities|\
Attorneys|\
Attractions|\
Auto Parts and Services|\
Automobile Dealers|\
Automobile Rentals|\
Bakeries|\
Banks and Credit Unions|\
Banquet Halls or Meeting Facilities|\
Beauty Supplies|\
Beauty or Nail Salon|\
Beverage Distributers|\
Bikes or Biking|\
Boats or Boating|\
Books or Authors|\
Builders and Contractors|\
Building Materials|\
Business and Professional Associations|\
Business Consulting|\
Business Services|\
Cabinets or Custom Woodworking|\
Cable or Satellite TV|\
Caterers|\
Child Care or Pre School|\
Chiropractor|\
Churches|\
Cleaning Services|\
Coffee Shops and Services|\
Compter Sales/Services|\
Computer Network Services|\
Convenience Stores|\
Dental Care|\
Department Store|\
Dry Cleaners|\
Electrical Services and Supplies|\
EmploymentServices|\
Engine Repair|\
Engineering|\
Entertainment|\
Exercise and Fitness|\
Fencing|\
Financial Services|\
Fishing Charters|\
Floor Coverings|\
Florists|\
Funeral Homes|\
Furniture|\
Gas Stations|\
Gift Shops or Boutiques|\
Golf or Golf Communities|\
Government|\
Graphic Design|\
Grocery Stores|\
Health Care Providers and Services|\
Home Furnishings and Accents|\
Home Inspection Services|\
Home Maintenance|\
Hospitals and Services|\
Ice Cream Shops|\
Individuals|\
Insurance|\
Interior Design|\
Internet Providers and Services|\
Janitorial Supplies or Linens|\
Jewelry|\
Landscaping or Nurseries|\
Liquor Store|\
Lodging|\
Manufactured Homes|\
Manufacturers|\
Marina|\
Marketing or Public Relations|\
Massage Therapy or Day Spas|\
Media|\
Medical Equipment and Supplies|\
Military|\
Mortgages|\
Movie Theaters|\
Moving or Storage|\
Musical Instruments, Services, or Lessons|\
Non-Profits or Charitable Organizations|\
Notary Public|\
Office Supplies or Equipment|\
Optical Services and Supplies|\
Painting or Wallpaper Services and Supplies|\
Party Rentals and Supplies|\
Pest Control Services|\
Pharmacies|\
Photography Services and Supplies|\
Plumbing Services and Supplies|\
Printing Services|\
Produce Markets|\
Promotional Materials|\
Property Management|\
Publisher or Magazines and Guides|\
Real Estate|\
Real Estate Development|\
Real Estate Sales|\
Real Estate Rentals|\
Real Estate Management|\
Real Estate Appraisers|\
Real Estate Tools|\
Research and Development|\
Residential Communities|\
Restaurants|\
Retirement Community|\
Schools or Education|\
Screenprinting or Embroidery|\
Seafood Retail or Wholesale|\
Security Services|\
Self-Storage|\
Sewing Supplies and Service|\
Shopping Centers|\
Signs|\
Specialty Shops|\
Sporting Goods|\
Sun Rooms|\
Surveyors|\
Swimming Pools or Spas|\
Tax Service and Bookkeeping|\
Telecommunication Services and Supplies|\
Tours|\
Transportation|\
Travel Agency|\
Trophies and Plaques|\
Uniforms|\
Upholstery or Fabric|\
Utilities|\
Veterinarians|\
Video and Audio Services|\
Waste Management|\
Water Sports|\
Website Development|\
Wedding Consultant and Event Planning|\
';

// Country data table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var country = '\
AF:Afghanistan|\
AL:Albania|\
DZ:Algeria|\
AS:American Samoa|\
AD:Andorra|\
AO:Angola|\
AI:Anguilla|\
AQ:Antarctica|\
AG:Antigua and Barbuda|\
AR:Argentina|\
AM:Armenia|\
AW:Aruba|\
AU:Australia|\
AT:Austria|\
AZ:Azerbaijan|\
AP:Azores|\
BS:Bahamas|\
BH:Bahrain|\
BD:Bangladesh|\
BB:Barbados|\
BY:Belarus|\
BE:Belgium|\
BZ:Belize|\
BJ:Benin|\
BM:Bermuda|\
BT:Bhutan|\
BO:Bolivia|\
BA:Bosnia And Herzegowina|\
XB:Bosnia-Herzegovina|\
BW:Botswana|\
BV:Bouvet Island|\
BR:Brazil|\
IO:British Indian Ocean Territory|\
VG:British Virgin Islands|\
BN:Brunei Darussalam|\
BG:Bulgaria|\
BF:Burkina Faso|\
BI:Burundi|\
KH:Cambodia|\
CM:Cameroon|\
CA:Canada|\
CV:Cape Verde|\
KY:Cayman Islands|\
CF:Central African Republic|\
TD:Chad|\
CL:Chile|\
CN:China|\
CX:Christmas Island|\
CC:Cocos (Keeling) Islands|\
CO:Colombia|\
KM:Comoros|\
CG:Congo|\
CD:Congo, The Democratic Republic O|\
CK:Cook Islands|\
XE:Corsica|\
CR:Costa Rica|\
CI:Cote d` Ivoire (Ivory Coast)|\
HR:Croatia|\
CU:Cuba|\
CY:Cyprus|\
CZ:Czech Republic|\
DK:Denmark|\
DJ:Djibouti|\
DM:Dominica|\
DO:Dominican Republic|\
TP:East Timor|\
EC:Ecuador|\
EG:Egypt|\
SV:El Salvador|\
GQ:Equatorial Guinea|\
ER:Eritrea|\
EE:Estonia|\
ET:Ethiopia|\
FK:Falkland Islands (Malvinas)|\
FO:Faroe Islands|\
FJ:Fiji|\
FI:Finland|\
FR:France (Includes Monaco)|\
FX:France, Metropolitan|\
GF:French Guiana|\
PF:French Polynesia|\
TA:French Polynesia (Tahiti)|\
TF:French Southern Territories|\
GA:Gabon|\
GM:Gambia|\
GE:Georgia|\
DE:Germany|\
GH:Ghana|\
GI:Gibraltar|\
GR:Greece|\
GL:Greenland|\
GD:Grenada|\
GP:Guadeloupe|\
GU:Guam|\
GT:Guatemala|\
GN:Guinea|\
GW:Guinea-Bissau|\
GY:Guyana|\
HT:Haiti|\
HM:Heard And Mc Donald Islands|\
VA:Holy See (Vatican City State)|\
HN:Honduras|\
HK:Hong Kong|\
HU:Hungary|\
IS:Iceland|\
IN:India|\
ID:Indonesia|\
IR:Iran|\
IQ:Iraq|\
IE:Ireland|\
EI:Ireland (Eire)|\
IL:Israel|\
IT:Italy|\
JM:Jamaica|\
JP:Japan|\
JO:Jordan|\
KZ:Kazakhstan|\
KE:Kenya|\
KI:Kiribati|\
KP:Korea, Democratic People\'S Repub|\
KW:Kuwait|\
KG:Kyrgyzstan|\
LA:Laos|\
LV:Latvia|\
LB:Lebanon|\
LS:Lesotho|\
LR:Liberia|\
LY:Libya|\
LI:Liechtenstein|\
LT:Lithuania|\
LU:Luxembourg|\
MO:Macao|\
MK:Macedonia|\
MG:Madagascar|\
ME:Madeira Islands|\
MW:Malawi|\
MY:Malaysia|\
MV:Maldives|\
ML:Mali|\
MT:Malta|\
MH:Marshall Islands|\
MQ:Martinique|\
MR:Mauritania|\
MU:Mauritius|\
YT:Mayotte|\
MX:Mexico|\
FM:Micronesia, Federated States Of|\
MD:Moldova, Republic Of|\
MC:Monaco|\
MN:Mongolia|\
MS:Montserrat|\
MA:Morocco|\
MZ:Mozambique|\
MM:Myanmar (Burma)|\
NA:Namibia|\
NR:Nauru|\
NP:Nepal|\
NL:Netherlands|\
AN:Netherlands Antilles|\
NC:New Caledonia|\
NZ:New Zealand|\
NI:Nicaragua|\
NE:Niger|\
NG:Nigeria|\
NU:Niue|\
NF:Norfolk Island|\
MP:Northern Mariana Islands|\
NO:Norway|\
OM:Oman|\
PK:Pakistan|\
PW:Palau|\
PS:Palestinian Territory, Occupied|\
PA:Panama|\
PG:Papua New Guinea|\
PY:Paraguay|\
PE:Peru|\
PH:Philippines|\
PN:Pitcairn|\
PL:Poland|\
PT:Portugal|\
PR:Puerto Rico|\
QA:Qatar|\
RE:Reunion|\
RO:Romania|\
RU:Russian Federation|\
RW:Rwanda|\
KN:Saint Kitts And Nevis|\
SM:San Marino|\
ST:Sao Tome and Principe|\
SA:Saudi Arabia|\
SN:Senegal|\
XS:Serbia-Montenegro|\
SC:Seychelles|\
SL:Sierra Leone|\
SG:Singapore|\
SK:Slovak Republic|\
SI:Slovenia|\
SB:Solomon Islands|\
SO:Somalia|\
ZA:South Africa|\
GS:South Georgia And The South Sand|\
KR:South Korea|\
ES:Spain|\
LK:Sri Lanka|\
NV:St. Christopher and Nevis|\
SH:St. Helena|\
LC:St. Lucia|\
PM:St. Pierre and Miquelon|\
VC:St. Vincent and the Grenadines|\
SD:Sudan|\
SR:Suriname|\
SJ:Svalbard And Jan Mayen Islands|\
SZ:Swaziland|\
SE:Sweden|\
CH:Switzerland|\
SY:Syrian Arab Republic|\
TW:Taiwan|\
TJ:Tajikistan|\
TZ:Tanzania|\
TH:Thailand|\
TG:Togo|\
TK:Tokelau|\
TO:Tonga|\
TT:Trinidad and Tobago|\
XU:Tristan da Cunha|\
TN:Tunisia|\
TR:Turkey|\
TM:Turkmenistan|\
TC:Turks and Caicos Islands|\
TV:Tuvalu|\
UG:Uganda|\
UA:Ukraine|\
AE:United Arab Emirates|\
UK:United Kingdom|\
GB:Great Britain|\
US:United States|\
UM:United States Minor Outlying Isl|\
UY:Uruguay|\
UZ:Uzbekistan|\
VU:Vanuatu|\
XV:Vatican City|\
VE:Venezuela|\
VN:Vietnam|\
VI:Virgin Islands (U.S.)|\
WF:Wallis and Furuna Islands|\
EH:Western Sahara|\
WS:Western Samoa|\
YE:Yemen|\
YU:Yugoslavia|\
ZR:Zaire|\
ZM:Zambia|\
ZW:Zimbabwe|\
';

function TrimString(sInString) {
  if ( sInString ) {
    sInString = sInString.replace( /^\s+/g, "" );// strip leading
    return sInString.replace( /\s+$/g, "" );// strip trailing
  }
}

// Populates the country selected with the counties from the country list
function populateCountry(defaultCountry, defaultSelect) {
  if ( postCountry != '' ) {
    defaultCountry = postCountry;
  }
  var countryLineArray = country.split('|');  // Split into lines
  var selObj = document.getElementById(defaultSelect);
  /*selObj.options[0] = new Option('Select Country','');
  selObj.selectedIndex = 0;*/
  for (var loop = 0; loop < countryLineArray.length; loop++) {
    lineArray = countryLineArray[loop].split(':');
    countryCode  = TrimString(lineArray[0]);
    countryName  = TrimString(lineArray[1]);
    if ( countryCode != '' ) {
      selObj.options[loop + 1] = new Option(countryName, countryCode);
    }
    if ( defaultCountry == countryCode ) {
      selObj.selectedIndex = loop + 1;
    }
  }
}

function populateField(defaultField, fieldSelectID) {
  if ( postField != '' ) {
    defaultField = postField;
  }
  var fieldLineArray = fields.split('|');  // Split into lines
  var selObj = document.getElementById(fieldSelectID);
  selObj.options[0] = new Option('Pilih Bidang Usaha','');
  selObj.selectedIndex = 0;
  for (var loop = 0; loop < fieldLineArray.length; loop++) {
    fieldCode = fieldLineArray[loop];
    fieldName = fieldLineArray[loop];
    selObj.options[loop + 1] = new Option(fieldName, fieldCode);
  }
}

function initCountry(country, selectID) {
  populateCountry(country, selectID);
}

function initField(field, selectField) {
	populateField(field, selectField)
}