var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var db = mongoose.connect('mongodb://localhost/db');

var careerSchema = new Schema({
	company_name: {type:String, default:''},
	state: {type:String, default:'Indonesia'},
	start_date: {type:Date, default:Date.now},
	start_now: {type:Date, default:Date.now},
	aligned_with_major: {type:String, default:''},
	aligned_with_study: {type:String, default:''},
	actively_employed: {type:String, default:''},
	current_salary_range: {type:String, default:''},
	field:{type:String, default:''}
});
var certificateSchema = new Schema({
	title: {type:String, default:''},
	issuer: {type:String, default:''},
	issue_date: {type:Date, default:Date.now},
});
var ownBusinessSchema = new Schema({
	nama: {type:String, default:''},
	is_current_job: {type:String, default:''},
	start_year: {type:String, default:''},
	field: {type:String, default:Date.now},
	employee_range: {type:String, default:''},
	omzet_range: {type:String, default:''}
});
var famBusinessSchema = new Schema({
	nama: {type:String, default:''},
	field: {type:String, default:''},
	employee_range: {type:String, default:''},
	omzet_range: {type:String, default:''},
	start_year:{type:String, default:''}
});
var alumniSchema = new Schema({
	nim: {type:String, default:''},
	full_name: {type:String, default:''},
	email_address: {type:String, default:''},
	mobile_phone: {type:String, default:''},
	address: {type:String, default:''},
	city: {type:String, default:''},
	zip: {type:String, default:''},
	country: {type:String, default:''},
	birth_date: {type:Date, default:Date.now},
	graduation_period: {type:Date, default:Date.now},
	has_certificate: {type:String, default:''},
	has_continue_study:{type:String,default:''},
	internship_total_duration_in_months: {type:String, default:''},
	employment: {type:String, default:'false'},
	unemployed_reason: {type:String, default:''},
	continue_study:{
		institution_name: {type:String, default:''},
		country: {type:String, default:''},
		start_year:{type:String, default:''},
		reason: {type:String, default:''}
	},
	professional_career:[careerSchema],
	professional_certificates:[certificateSchema],
	own_business:[ownBusinessSchema],
	family_business:[famBusinessSchema]
});
module.exports.createAlumniSchema = function(){
	console.log('>>>Executing Create Alumni Schema');

	mongoose.model('alumni', alumniSchema);
};
module.exports.saveAlumniData = function(newAlumni,res){
	console.log('>>>Executing Save AlumniData');
	
	var AlumniModel = mongoose.model('alumni', alumniSchema);
	var alumniData = new AlumniModel();
	alumniData.internship_total_duration_in_months = newAlumni.getAlumni().internship_total_duration_in_months;
	alumniData.has_certificate = newAlumni.getAlumni().has_certificate;
	alumniData.has_continue_study = newAlumni.getAlumni().has_continue_study;
	alumniData.graduation_period = newAlumni.getAlumni().graduation_period;
	console.log("***bDate before save : "+newAlumni.getAlumni().birth_date);
	alumniData.birth_date = newAlumni.getAlumni().birth_date;
	alumniData.country = newAlumni.getAlumni().country;
	alumniData.zip = newAlumni.getAlumni().zip;
	alumniData.city = newAlumni.getAlumni().city;
	alumniData.address = newAlumni.getAlumni().address;
	alumniData.mobile_phone = newAlumni.getAlumni().mobile_phone;
	alumniData.email_address = newAlumni.getAlumni().email_address;
	alumniData.nim = newAlumni.getAlumni().nim;
	alumniData.full_name = newAlumni.getAlumni().nama;
	alumniData.employment = newAlumni.getAlumni().employment;
	alumniData.unemployed_reason = newAlumni.getAlumni().unemployed_reason;
	
	//Continue Study
	alumniData.continue_study.reason = newAlumni.getAlumni().continue_study.reason;
	alumniData.continue_study.start_year = newAlumni.getAlumni().continue_study.start_year;
	alumniData.continue_study.country = newAlumni.getAlumni().continue_study.country;
	alumniData.continue_study.institution_name = newAlumni.getAlumni().continue_study.institution_name;
	
	//Professional Career
	var careerArry = newAlumni.getAlumni().professional_career;
	//add all career to Alumni Schema
	for(var i=0;i<careerArry.length;i++){
		var c = careerArry[i];
		var careerData = getCareerModel(c.company_name, c.start_date, c.end_date, c.aligned_with_major,c.aligned_with_study,c.field,c.actively_employed,c.current_salary_range);
		alumniData.professional_career[i] = careerData;
	}
	
	//Family Business
	var famBizArry = newAlumni.getAlumni().family_business;
	for(var i=0;i<famBizArry.length;i++){
		var fb = famBizArry[i];
		var famBizData = getFamBizModel(fb.nama,fb.field,fb.employee_range,fb.omzet_range,fb.start_year);
		alumniData.family_business[i] = famBizData;
	}

	//Own Business
	var ownBizArry = newAlumni.getAlumni().own_business;
	console.log("OwnBizz Length : "+ownBizArry.length);
	for(var i=0;i<ownBizArry.length;i++){	
		var ob = ownBizArry[i];
		var ownBizData = getOwnBizModel(ob.nama,ob.is_current_job,ob.start_year,ob.field,ob.employee_range,ob.omzet_range);
		alumniData.own_business[i] = ownBizData;
	}
	
	//Professional Certificates
	var certArry = newAlumni.getAlumni().professional_certificates;
	for(var i=0;i<certArry.length;i++){
		var ct = certArry[i];
		var certData = getCertModel(ct.title,ct.issuer,ct.issue_date);
		alumniData.professional_certificates[i] = certData;
	}
	
	alumniData.save(function(err){
		if(!err){
			console.log('alumni data successfuly save');
			res. redirect('/0');
		}else{
			console.log('error while alumni data, err : ' + err);
			res. redirect('/1');
		}
	});
};

//Professional Career Model
function getCareerModel(companyName,startDate,endDate,alignedWithMajor,alignedWithStudy,field,actively_employed,state,current_salary_range){
	var CareerModel = mongoose.model('career', careerSchema);
	var ca = new CareerModel();
	ca.company_name = companyName;
	ca.startDate = startDate;
	ca.endDate = endDate;
	ca.aligned_with_major = alignedWithMajor;
	ca.aligned_with_study = alignedWithStudy;
	ca.current_salary_range = current_salary_range;
	ca.field = field;
	ca.state = state;
	ca.actively_employed = actively_employed;
	return ca;
}

//Family Business Model
function getFamBizModel(name,field,employee_range,omzet_range,start_year){
	var FamBizModel = mongoose.model('family_business', famBusinessSchema);
	var fb = new FamBizModel();
	fb.nama = name;
	fb.field = field;
	fb.employee_range = employee_range;
	fb.omzet_range = omzet_range;
	fb.start_year = start_year;
	
	return fb;
}

//Certificates Model
function getCertModel(title,issuer,issue_date){
	var CertModel = mongoose.model('certificates',certificateSchema);
	var cm = new CertModel();
	cm.title = title;
	cm.issuer = issuer;
	cm.issue_date = issue_date;
	
	return cm;
}

//Own Business Model
function getOwnBizModel(nama,is_current_job,start_year,field,employee_range,omzet_range){
	var OwnBizModel = mongoose.model('own_business',ownBusinessSchema);
	var ob = new OwnBizModel();
	ob.nama = nama;
	ob.is_current_job = is_current_job;
	ob.start_year = start_year;
	ob.field = field;
	ob.employee_range = employee_range;
	ob.omzet_range = omzet_range;
	
	return ob;
}