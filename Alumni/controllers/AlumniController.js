var AlumniData = require('../models/AlumniData');


module.exports.createAlumniSchema = function(){
	console.log('>>> Create Alumni Schema in AlumniController');
	AlumniData.createAlumniSchema();
}

module.exports.saveAlumniData = function(req,res){
	console.log('>>> Save Alumi Data in AlumniController');
	
	var newAlumni = require('../models/Alumni');
	newAlumni.resetArry();
  	newAlumni.getAlumni().nim = req.body.studentID;
	newAlumni.getAlumni().nama = req.body.fullName;
  	newAlumni.getAlumni().email_address = req.body.email;
	newAlumni.getAlumni().mobile_phone = req.body.phoneMobile;
	newAlumni.getAlumni().address = req.body.addressline;
	newAlumni.getAlumni().city = req.body.city;
	newAlumni.getAlumni().zip = req.body.postalCode;
	newAlumni.getAlumni().country = 'Indonesia';
	newAlumni.getAlumni().birth_date = new Date(req.body.birthDate);
	newAlumni.getAlumni().graduation_period = req.body.graduationPeriod;
	newAlumni.getAlumni().has_certificate = getChecked(req.body.procertSkip);
 	newAlumni.getAlumni().internship_total_duration_in_months=req.body.internship;
	// 
	// var birthDate = new Date();
	// birthDate.setDate(req.body.birthDay);
	// birthDate.setMonth(req.body.birthMonth);
	// birthDate.setYear(req.body.birthYear);
	// 
	// newAlumni.getAlumni().birth_date = birthDate;
	// newAlumni.getAlumni().nim = "20107032";
	// newAlumni.getAlumni().nama = "Dhany Sugianto";
	// newAlumni.getAlumni().email_address = "rsugianto@yahoo.com";
	// newAlumni.getAlumni().mobile_phone = "023984283";
	// newAlumni.getAlumni().address = "Villa Sentra Raya A3/17, Citraland";
	// newAlumni.getAlumni().city = "Surabaya";
	// newAlumni.getAlumni().zip = "60217";
	// newAlumni.getAlumni().country = "Indonesia";
	
	//newAlumni.getAlumni().birth_date = getCustomDate(19,5,1989);
	// newAlumni.getAlumni().graduation_period = "2011";
	// newAlumni.getAlumni().internship_total_duration_in_months="3";
	// newAlumni.getAlumni().unemployment= "YES";
	// newAlumni.getAlumni().unemployment_reason="Becoming Entrepreneur";
	
	//Continue Study
	newAlumni.getAlumni().has_continue_study = getChecked(req.body.gradstudySkip);
	if(newAlumni.getAlumni().has_continue_study == 'YES'){
		newAlumni.getAlumni().continue_study.institution_name = req.body.schoolName;
		newAlumni.getAlumni().continue_study.country = req.body.schoolCountry;
		newAlumni.getAlumni().continue_study.start_year = req.body.enrollYear;
		newAlumni.getAlumni().continue_study.reason = req.body.reason;
		// newAlumni.getAlumni().continue_study.institution_name = "Harvard";
		// newAlumni.getAlumni().continue_study.country = "Amerika Serikat";
		// newAlumni.getAlumni().continue_study.start_year = "2011";
		// newAlumni.getAlumni().continue_study.reason = "Becoming Bill Gates";
		// newAlumni.getAlumni().continue_study.level = "1";
		// newAlumni.getAlumni().continue_study.field = "IMT";
		// newAlumni.getAlumni().continue_study.aligned_with_UC = "YES";
	}

	
	//Certificates
	var noofCert = req.body.noofcertification;
	if(noofCert == 1){
		var newCert = new (require('../models/Certificates.js')).Certificates();
		newCert.title = req.body.certName;
		newCert.issuer = req.body.certPublisher;
		newCert.issue_date = new Date(req.body.certDate);

		newAlumni.addCertificate(newCert);
	}else{
		for(var i=0;i<noofCert;i++){
			var newCert = new (require('../models/Certificates.js')).Certificates();
			newCert.title = req.body.certName[i];
			newCert.issuer = req.body.certPublisher[i];
			newCert.issue_date = new Date(req.body.certDate[i]);

			newAlumni.addCertificate(newCert);
		}
	}

	// var newCert = new (require('../models/Certificates.js')).Certificates();
	// newCert.title = "CCNA";
	// newCert.issuer = "Cisco";
	// newCert.issue_date = getCustomDate(12,6,2000);
	// newCert.aligned_with_work = "YES";
	// 
	// var newCert2 = new (require('../models/Certificates.js')).Certificates();
	// newCert2.title = "Oracle";
	// newCert2.issuer = "Oracle";
	// newCert2.issue_date = getCustomDate(21,4,2002);
	// newCert2.aligned_with_work = "NO";
	// 
	// newAlumni.addCertificate(newCert);
	// newAlumni.addCertificate(newCert2);
	
	
	newAlumni.getAlumni().employment = req.body.worktype;
	if(newAlumni.getAlumni().employment == "unemployed"){
		newAlumni.getAlumni().unemployed_reason = req.body.unemployedReason;
	}
	//Own Business
	var noofOwn = req.body.noofentrepreneur;
	if(noofOwn==1){
		var newOwn = new (require('../models/OwnBusiness.js')).OwnBusiness();
		newOwn.nama = req.body.bizName;
		newOwn.field = req.body.bizField;
		newOwn.omzet_range = req.body.bizMonthlyRevenue;
		newOwn.employee_range = req.body.bizNumOfEmployee;
		newOwn.start_year = req.body.bizEst;
		
		newAlumni.addOwnBiz(newOwn);
	}else{
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
	
	// var newOwn = new (require('../models/OwnBusiness.js')).OwnBusiness();
	// newOwn.nama = "MyMe";
	// newOwn.country = "Surabaya";
	// newOwn.is_current_job = "YES";
	// newOwn.start_date = getCustomDate(5,2,2009);
	// newOwn.end_date = getCustomDate(8,3,2010);
	// newOwn.business_majority = "Technology";
	// newOwn.employee_range = "3";
	// newOwn.omzet_range = "5";
	// 
	// var newOwn2 = new (require('../models/Certificates.js')).Certificates();
	// newOwn2.nama = "Hidden Apps";
	// newOwn2.country = "Surabaya";
	// newOwn2.is_current_job = "YES";
	// newOwn2.start_date = getCustomDate(5,2,2009);
	// newOwn2.end_date = getCustomDate(8,3,2010);
	// newOwn2.business_majority = "Mobile";
	// newOwn2.employee_range = "8";
	// newOwn2.omzet_range = "9";
	// 
	// newAlumni.addOwnBiz(newOwn);
	// newAlumni.addOwnBiz(newOwn2);
	
	
	
	//Professional Career	
	var noofCareer = req.body.noofbusiness;
	if(noofCareer == 1){
		var newCareer = new (require('../models/Career.js')).Career();
		newCareer.company_name = req.body.employName;
		newCareer.field = req.body.employField;
		newCareer.state = req.body.employCountry;
		newCareer.start_date = new Date(req.body.employStartDate);
		newCareer.end_date = new Date(req.body.employEndDate);
		newCareer.aligned_with_major = req.body.employAlign;
		newCareer.aligned_with_study = req.body.employStudyHelp;
		newCareer.actively_employed = (!getChecked(req.body.employCurrent));
		newCareer.current_salary_range = req.body.employSalary;

		newAlumni.addCareer(newCareer);
	}else{
		for(var i=0;i<noofCareer;i++){
			var newCareer = new (require('../models/Career.js')).Career();
			newCareer.company_name = req.body.employName[i];
			newCareer.field = req.body.employField[i];
			newCareer.state = req.body.employCountry[i];
			newCareer.start_date = new Date(req.body.employStartDate[i]);
			newCareer.end_date = new Date(req.body.employEndDate[i]);
			newCareer.aligned_with_major = req.body.employAlign[i];
			newCareer.aligned_with_study = req.body.employStudyHelp[i];
			newCareer.actively_employed = (!getChecked(req.body.employCurrent[i]));
			newCareer.current_salary_range = req.body.employSalary[i];

			newAlumni.addCareer(newCareer);
		}
	}

	
	// var newCareer = new (require('../models/Career.js')).Career();
	// newCareer.company_name = "MyMe";
	// newCareer.aligned_with_major = "YES";
	// newCareer.aligned_with_study = "YES";
	// 
	// var newCareer2 = new (require('../models/Career.js')).Career();
	// newCareer2.company_name = "Jatis";
	// newCareer2.aligned_with_major = "YES";
	// newCareer2.aligned_with_study = "NO";
	// 
	// newAlumni.addCareer(newCareer);
	// newAlumni.addCareer(newCareer2);
	
	
	//Familiy Business
	var noofFamz = req.body.nooffamilybiz;
	if(noofFamz == 1){
		var newFamBiz = new (require('../models/FamBusiness.js')).FamBusiness();
		newFamBiz.nama = req.body.famName;
		newFamBiz.field = req.body.famField;
		newFamBiz.start_year = req.body.famEst;
		newFamBiz.employee_range = req.body.famNumOfEmployee;
		newFamBiz.omzet_range = req.body.famMonthlyRevenue;

		newAlumni.addFamBiz(newFamBiz);
	}else{
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

	// var newFamBiz = new (require('../models/FamBusiness.js')).FamBusiness();
	// newFamBiz.nama = "Sampoerna";
	// newFamBiz.field = "Industry";
	// newFamBiz.employee_range = "5";
	// newFamBiz.omzet_range = "8";
	// 
	// var newFamBiz2 = new (require('../models/FamBusiness.js')).FamBusiness();
	// newFamBiz2.nama = "Wong Hang";
	// newFamBiz2.field = "Fashion";
	// newFamBiz2.employee_range = "6";
	// newFamBiz2.omzet_range = "7";
	// 
	// newAlumni.addFamBiz(newFamBiz);
	// newAlumni.addFamBiz(newFamBiz2);
	
	
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
