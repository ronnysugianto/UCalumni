var AlumniData = require('../models/AlumniData');
var basicAlumni = require('../models/Alumni');

module.exports.createAlumniSchema = function(){
	console.log('>>> Create Alumni Schema in AlumniController');
	AlumniData.createAlumniSchema();
}

module.exports.saveAlumniData = function(req,res){
	console.log('>>> Save Alumi Data in AlumniControllersssss');
	
	var newAlumni = new basicAlumni.Alumni;
  	newAlumni.nim = req.body.studentID;
	newAlumni.nama = req.body.fullName;
  	newAlumni.email_address = req.body.email;
	newAlumni.mobile_phone = req.body.phoneMobile;
	newAlumni.address = req.body.addressline;
	newAlumni.city = req.body.city;
	newAlumni.zip = req.body.postalCode;
	newAlumni.country = 'Indonesia';

	newAlumni.birth_date = req.body.birthDate;
	newAlumni.graduation_period = req.body.graduationPeriod;
 	newAlumni.internship_total_duration_in_months=req.body.internship;

	
	//Continue Study
	newAlumni.has_continue_study = getChecked(req.body.gradstudySkip);
	if(newAlumni.has_continue_study == 'YES'){
		var contStudy = new (require('../models/ContinueStudy.js')).ContinueStudy();
		
		contStudy.institution_name = req.body.schoolName;
		contStudy.country = req.body.schoolCountry;
		contStudy.start_year = req.body.enrollYear;
		contStudy.reason = req.body.reason;
		
		newAlumni.continue_study = contStudy;
	}

	
	//Certificates
	newAlumni.has_certificate = getChecked(req.body.procertSkip);
	var noofCert = req.body.noofcert;
	console.log("No of Cert : "+noofCert);
	console.log("............"+req.body.certName1);
	if(newAlumni.has_certificate == 'YES'){
		if(noofCert == 1){
			var newCert = new (require('../models/Certificates.js')).Certificates();
			newCert.title = req.body.certName1;
			newCert.issuer = req.body.certPublisher1;
			newCert.issue_date = req.body.certDate1;

			newAlumni.addCertificate(newCert);
		}else if(noofCert > 1){

			for(var i=0;i<noofCert;i++){
				var newCert = new (require('../models/Certificates.js')).Certificates();
				newCert.title = req.body.certName1[i];
				newCert.issuer = req.body.certPublisher1[i];
				newCert.issue_date = req.body.certDate1[i];

				newAlumni.addCertificate(newCert);
			}
		}
	}
	
	newAlumni.employment = req.body.worktype;
	console.log(">>>>>>> EE : "+newAlumni.employment);
	if(newAlumni.employment != undefined && newAlumni.employment.indexOf("unemployed") != -1){
		newAlumni.unemployed_reason = req.body.unemployedReason;
	}else if(newAlumni.employment != undefined){
	
		if(newAlumni.employment.indexOf("entrepreneur") > -1){
			newAlumni.has_own_business = 'YES';
			//Own Business
			var noofOwn = req.body.noofbiz;
			console.log("No of Own : "+noofOwn);
			if(noofOwn==1){
				var newOwn = new (require('../models/OwnBusiness.js')).OwnBusiness();
				newOwn.nama = req.body.bizName;
				newOwn.field = req.body.bizField;
				newOwn.omzet_range = req.body.bizMonthlyRevenue;
				newOwn.employee_range = req.body.bizNumOfEmployee;
				newOwn.start_year = req.body.bizEst;

				newAlumni.addOwnBiz(newOwn);
			}else if(noofOwn > 1){
				for(var i=0;i<noofOwn;i++){
					var newOwn = new (require('../models/OwnBusiness.js')).OwnBusiness();
					newOwn.nama = req.body.bizName[i];
					newOwn.field = req.body.bizField[i];
					newOwn.omzet_range = req.body.bizMonthlyRevenue[i];
					newOwn.employee_range = req.body.bizNumOfEmployee[i];
					newOwn.start_year = req.body.bizEst[i];

					newAlumni.addOwnBiz(newOwn);
				}
			}
		}
	
		if(newAlumni.employment.indexOf("employed") > -1){
			newAlumni.has_work_in_company = "YES";
			//Professional Career	
			// var noofCareer = req.body.noofemploy;
			// console.log("No of Career : "+noofCareer);
			// if(noofCareer == 1){
				var newCareer = new (require('../models/Career.js')).Career();
				newCareer.company_name = req.body.employName;
				newCareer.field = req.body.employField;
				newCareer.state = req.body.employCountry;
				newCareer.start_date = req.body.employStartDate;
				newCareer.end_date = req.body.employEndDate;
				newCareer.aligned_with_major = req.body.employAlign;
				newCareer.aligned_with_study = req.body.employStudyHelp;
				if(getChecked(req.body.employCurrent) == "NO"){
					newCareer.actively_employed = "YES";
				}
				newCareer.current_salary_range = req.body.employSalary;

				newAlumni.addCareer(newCareer);
			// }else if(noofCareer > 1){
			// 	for(var i=0;i<noofCareer;i++){
			// 		var newCareer = new (require('../models/Career.js')).Career();
			// 		newCareer.company_name = req.body.employName[i];
			// 		newCareer.field = req.body.employField[i];
			// 		newCareer.state = req.body.employCountry[i];
			// 		newCareer.start_date = req.body.employStartDate[i];
			// 		newCareer.end_date = req.body.employEndDate[i];
			// 		newCareer.aligned_with_major = req.body.employAlign[i];
			// 		newCareer.aligned_with_study = req.body.employStudyHelp[i];
			// 		newCareer.actively_employed = (!getChecked(req.body.employCurrent[i]));
			// 		newCareer.current_salary_range = req.body.employSalary[i];
			// 
			// 		newAlumni.addCareer(newCareer);
			// 	}
			// }
		}


		if(newAlumni.employment.indexOf("family") > -1){
			newAlumni.has_family_business = "YES";
			//Familiy Business
			var noofFamz = req.body.nooffam;
			console.log("No of Famz : "+noofFamz);
			if(noofFamz == 1){
				var newFamBiz = new (require('../models/FamBusiness.js')).FamBusiness();
				newFamBiz.nama = req.body.famName;
				newFamBiz.field = req.body.famField;
				newFamBiz.start_year = req.body.famEst;
				newFamBiz.employee_range = req.body.famNumOfEmployee;
				newFamBiz.omzet_range = req.body.famMonthlyRevenue;

				newAlumni.addFamBiz(newFamBiz);
			}else if(noofFamz > 1){
				for(var i=0;i<noofFamz;i++){
					var newFamBiz = new (require('../models/FamBusiness.js')).FamBusiness();
					newFamBiz.nama = req.body.famName[i];
					newFamBiz.field = req.body.famField[i];
					newFamBiz.start_year = req.body.famEst[i];
					newFamBiz.employee_range = req.body.famNumOfEmployee[i];
					newFamBiz.omzet_range = req.body.famMonthlyRevenue[i];

					newAlumni.addFamBiz(newFamBiz);
				}
			}
		}
	}

	AlumniData.saveAlumniData(newAlumni,res);
}

function getCustomDate(date,month,year){
	var date = new Date();
	date.setDate(date);
	date.setMonth(month);
	date.setYear(year);
	
	return date;
}

function getChecked(resValue){
	if(resValue == undefined){
		return 'YES';
	}else{
		return 'NO';
	}
}
