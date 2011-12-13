var AlumniData = require('../models/AlumniData');


module.exports.createAlumniSchema = function(){
	console.log('>>> Create Alumni Schema in AlumniController');
	AlumniData.createAlumniSchema();
}

module.exports.saveAlumniData = function(req,res){
	console.log('>>> Save Alumi Data in AlumniController');
	
	var newAlumni = require('../models/Alumni');
	// newAlumni.getAlumni().nim = req.body.studentID;
	// newAlumni.getAlumni().nama = req.body.fullName;
	// newAlumni.getAlumni().email_address = req.body.email;
	// newAlumni.getAlumni().mobile_phone = req.body.phoneMobile;
	// newAlumni.getAlumni().address = req.body.addressline1 + " " +req.body.addressline2;
	// newAlumni.getAlumni().city = req.body.city;
	// newAlumni.getAlumni().zip = req.body.postalCode;
	// newAlumni.getAlumni().country = 'Indonesia';
	// 
	// var birthDate = new Date();
	// birthDate.setDate(req.body.birthDay);
	// birthDate.setMonth(req.body.birthMonth);
	// birthDate.setYear(req.body.birthYear);
	// 
	// newAlumni.getAlumni().birth_date = birthDate;
	// newAlumni.getAlumni().graduation_period = req.body.graduationPeriod;
	// newAlumni.getAlumni().not_certified_reason = '';
	// newAlumni.getAlumni().business_ownership = req.body.worktype[0];
	// newAlumni.getAlumni().internship_experience = '';
	// newAlumni.getAlumni().internship_total_duration_in_months='';
	// newAlumni.getAlumni().unemployment= req.body.worktype[1];
	// newAlumni.getAlumni().unemployment_reason=req.body.unemployedReason;
	// newAlumni.getAlumni().has_family_business = req.body.worktype[2];
	newAlumni.getAlumni().nim = "20107032";
	newAlumni.getAlumni().nama = "Dhany Sugianto";
	newAlumni.getAlumni().email_address = "rsugianto@yahoo.com";
	newAlumni.getAlumni().mobile_phone = "023984283";
	newAlumni.getAlumni().address = "Villa Sentra Raya A3/17, Citraland";
	newAlumni.getAlumni().city = "Surabaya";
	newAlumni.getAlumni().zip = "60217";
	newAlumni.getAlumni().country = "Indonesia";
	
	// newAlumni.getAlumni().birth_date = birthDate;
	// newAlumni.getAlumni().graduation_period = req.body.graduationPeriod;
	// newAlumni.getAlumni().not_certified_reason = '';
	// newAlumni.getAlumni().business_ownership = req.body.worktype[0];
	// newAlumni.getAlumni().internship_experience = '';
	// newAlumni.getAlumni().internship_total_duration_in_months='';
	// newAlumni.getAlumni().unemployment= req.body.worktype[1];
	// newAlumni.getAlumni().unemployment_reason=req.body.unemployedReason;
	// newAlumni.getAlumni().has_family_business = req.body.worktype[2];
	
	newAlumni.getAlumni().birth_date = getCustomDate(19,5,1989);
	newAlumni.getAlumni().graduation_period = "2011";
	newAlumni.getAlumni().not_certified_reason = "Ga apa-apa";
	newAlumni.getAlumni().business_ownership = "Family";
	newAlumni.getAlumni().internship_experience = "Jatis Mobile";
	newAlumni.getAlumni().internship_total_duration_in_months="3";
	newAlumni.getAlumni().unemployment= "YES";
	newAlumni.getAlumni().unemployment_reason="Becoming Entrepreneur";
	newAlumni.getAlumni().has_family_business = "NO";
	
	//Continue Study
	// newAlumni.getAlumni().continue_study.institution_name = req.body.schoolName;
	// newAlumni.getAlumni().continue_study.country = req.body.schoolCountry;
	// newAlumni.getAlumni().continue_study.start_year = req.body.enrollYear;
	// newAlumni.getAlumni().continue_study.reason = req.body.reason;
	newAlumni.getAlumni().continue_study.institution_name = "Harvard";
	newAlumni.getAlumni().continue_study.country = "Amerika Serikat";
	newAlumni.getAlumni().continue_study.start_year = "2011";
	newAlumni.getAlumni().continue_study.reason = "Becoming Bill Gates";
	newAlumni.getAlumni().continue_study.level = "1";
	newAlumni.getAlumni().continue_study.field = "IMT";
	newAlumni.getAlumni().continue_study.aligned_with_UC = "YES";
	
	//Professional Career
	var newCareer = new (require('../models/Career.js')).Career();
	// newCareer.company_name = req.body.employName;
	// 
	// newCareer.start_date = getCustomDate(req.body.employStartDate,req.body.employStartMonth,req.body.employStartYear);
	// newCareer.end_date = getCustomDate(req.body.employEndDate,req.body.employEndMonth,req.body.employEndYear);
	// newCareer.aligned_with_major = req.body.employAlign;
	// newCareer.aligned_with_study = req.body.employStudyHelp;
	// newCareer.first_salary_range = "10";
	newCareer.company_name = "MyMe";
	newCareer.aligned_with_major = "YES";
	newCareer.aligned_with_study = "YES";
	newCareer.first_salary_range = "9";

	var newCareer2 = new (require('../models/Career.js')).Career();
	// newCareer2.company_name = req.body.employName+"2";
	// newCareer2.aligned_with_major = req.body.employAlign;
	// newCareer2.aligned_with_study = req.body.employStudyHelp;
	// newCareer2.first_salary_range = "2";
	newCareer2.company_name = "Jatis";
	newCareer2.aligned_with_major = "YES";
	newCareer2.aligned_with_study = "NO";
	newCareer2.first_salary_range = "1";
	
	newAlumni.addCareer(newCareer);
	newAlumni.addCareer(newCareer2);
	
	//Familiy Business
	var newFamBiz = new (require('../models/FamBusiness.js')).FamBusiness();
	newFamBiz.nama = "Sampoerna";
	newFamBiz.business_majority = "Industry";
	newFamBiz.employee_range = "5";
	newFamBiz.omzet_range = "8";
	
	var newFamBiz2 = new (require('../models/FamBusiness.js')).FamBusiness();
	newFamBiz2.nama = "Wong Hang";
	newFamBiz2.business_majority = "Fashion";
	newFamBiz2.employee_range = "6";
	newFamBiz2.omzet_range = "7";
	
	newAlumni.addFamBiz(newFamBiz);
	newAlumni.addFamBiz(newFamBiz2);
	
	//Certificates
	var newCert = new (require('../models/Certificates.js')).Certificates();
	newCert.title = "CCNA";
	newCert.issuer = "Cisco";
	newCert.issue_date = getCustomDate(12,6,2000);
	newCert.aligned_with_work = "YES";
	
	var newCert2 = new (require('../models/Certificates.js')).Certificates();
	newCert2.title = "Oracle";
	newCert2.issuer = "Oracle";
	newCert2.issue_date = getCustomDate(21,4,2002);
	newCert2.aligned_with_work = "NO";
	
	newAlumni.addCertificate(newCert);
	newAlumni.addCertificate(newCert2);
	
	//Own Business
	var newOwn = new (require('../models/Certificates.js')).Certificates();
	newOwn.nama = "MyMe";
	newOwn.country = "Surabaya";
	newOwn.is_current_job = "YES";
	newOwn.start_date = getCustomDate(5,2,2009);
	newOwn.end_date = getCustomDate(8,3,2010);
	newOwn.business_majority = "Technology";
	newOwn.employee_range = "3";
	newOwn.omzet_range = "5";
	
	var newOwn2 = new (require('../models/Certificates.js')).Certificates();
	newOwn2.nama = "Hidden Apps";
	newOwn2.country = "Surabaya";
	newOwn2.is_current_job = "YES";
	newOwn2.start_date = getCustomDate(5,2,2009);
	newOwn2.end_date = getCustomDate(8,3,2010);
	newOwn2.business_majority = "Mobile";
	newOwn2.employee_range = "8";
	newOwn2.omzet_range = "9";
	
	newAlumni.addOwnBiz(newOwn);
	newAlumni.addOwnBiz(newOwn2);
	
	AlumniData.saveAlumniData(newAlumni);
}

function getCustomDate(date,month,year){
	var date = new Date();
	date.setDate(date);
	date.setMonth(month);
	date.setYear(year);
	
	return date;
}
