var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var db = mongoose.connect('mongodb://localhost/db');

var careerSchema = new Schema({
	company_name: {type:String, default:''},
	state: {type:String, default:'Indonesia'},
	start_year: {type:Date, default:Date.now},
	aligned_with_major: {type:String, default:''},
	aligned_with_study: {type:String, default:''},
	actively_employed: {type:String, default:''},
	first_salary_range: {type:String, default:''},
	current_salary_range: {type:String, default:''}
});
var certificateSchema = new Schema({
	title: {type:String, default:''},
	issuer: {type:String, default:''},
	issue_date: {type:Date, default:Date.now},
	aligned_with_work: {type:String, default:''}
});
var ownBusinessSchema = new Schema({
	nama: {type:String, default:''},
	country: {type:String, default:'Indonesia'},
	is_current_job: {type:String, default:''},
	start_date: {type:Date, default:Date.now},
	end_date: {type:Date, default:Date.now},
	business_majority: {type:String, default:Date.now},
	employee_range: {type:String, default:''},
	omzet_range: {type:String, default:''}
});
var famBusinessSchema = new Schema({
	nama: {type:String, default:''},
	business_majority: {type:String, default:''},
	employee_range: {type:String, default:''},
	omzet_range: {type:String, default:''}
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
	not_certified_reason: {type:String, default:''},
	business_ownership: {type:String, default:''},
	internship_experience: {type:String, default:''},
	internship_total_duration_in_months: {type:String, default:''},
	unemployment: '',
	unemployment_reason: '',
	has_family_business : '',
	continue_study:{
		institution_name: {type:String, default:''},
		country: {type:String, default:''},
		level: {type:String, default:''},
		field: {type:String, default:''},
		start_year:{type:String, default:''},
		aligned_with_UC: {type:String, default:''},
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
module.exports.saveAlumniData = function(newAlumni){
	console.log('>>>Executing Save AlumniData');
	
	var AlumniModel = mongoose.model('alumni', alumniSchema);
	var alumniData = new AlumniModel();
	alumniData.internship_total_duration_in_months = newAlumni.getAlumni().internship_total_duration_in_months;
	alumniData.internship_experience = newAlumni.getAlumni().internship_experience;
	alumniData.business_ownership = newAlumni.getAlumni().business_ownership;
	alumniData.not_certified_reason = newAlumni.getAlumni().not_certificate_reason;
	alumniData.has_certificate = newAlumni.getAlumni().has_certificate;
	alumniData.graduation_period = newAlumni.getAlumni().graduation_period;
	alumniData.birth_date = newAlumni.getAlumni().birth_date;
	alumniData.country = newAlumni.getAlumni().country;
	alumniData.zip = newAlumni.getAlumni().zip;
	alumniData.city = newAlumni.getAlumni().city;
	alumniData.address = newAlumni.getAlumni().address;
	alumniData.mobile_phone = newAlumni.getAlumni().mobile_phone;
	alumniData.email_address = newAlumni.getAlumni().email_address;
	alumniData.nim = newAlumni.getAlumni().nim;
	alumniData.full_name = newAlumni.getAlumni().nama;
	
	//Continue Study
	alumniData.continue_study.reason = newAlumni.getAlumni().continue_study.reason;
	alumniData.continue_study.aligned_with_UC = newAlumni.getAlumni().continue_study.aligned_with_UC;
	alumniData.continue_study.start_year = newAlumni.getAlumni().continue_study.start_year;
	alumniData.continue_study.field = newAlumni.getAlumni().continue_study.field;
	alumniData.continue_study.level = newAlumni.getAlumni().continue_study.level;
	alumniData.continue_study.country = newAlumni.getAlumni().continue_study.country;
	alumniData.continue_study.institution_name = newAlumni.getAlumni().continue_study.institution_name;
	
	//Professional Career
	var careerArry = newAlumni.getAlumni().professional_career;
	//add all career to Alumni Schema
	for(var i=0;i<careerArry.length;i++){
		var c = careerArry[i];
		var careerData = getCareerModel(c.company_name, c.start_date, c.end_date, c.aligned_with_major,c.aligned_with_study, c.first_salary_range);
		alumniData.professional_career[i] = careerData;
	}
	
	//Family Business
	var famBizArry = newAlumni.getAlumni().family_business;
	for(var i=0;i<famBizArry.length;i++){
		var fb = famBizArry[i];
		console.log('a');
		console.log('nama : '+fb.nama);
		console.log('major : '+fb.business_majority);
		console.log('employee range : '+fb.employee_range);
		console.log('omzet : '+fb.omzet_range);
		var famBizData = getFamBizModel(fb.nama,fb.business_majority,fb.employee_range,fb.omzet_range);
		console.log(">>>test3");
		alumniData.family_business[i] = famBizData;
		console.log(">>>test");
	}
	console.log(">>>test2");
	//Own Business
	var ownBizArry = newAlumni.getAlumni().own_business;
	console.log("OwnBizz Length : "+ownBizArry.length);
	for(var i=0;i<ownBizArry.length;i++){
		console.log('b');		
		var ob = ownBizArry[i];
		console.log('nama : '+ob.nama);
		console.log('country : '+ob.country);
		console.log('is current job : '+ob.is_current_job);
		console.log('startDate : '+ob.start_date);
		console.log('endDate :'+ob.end_date);
		console.log('major : '+ob.business_majority);
		console.log('emp range : '+ob.employee_range);
		console.log('omzet range : '+ob.omzet_range);
		var ownBizData = getOwnBizModel(ob.nama,ob.country,ob.is_current_job,ob.start_date,ob.end_date,ob.business_majority,ob.employee_range,ob.omzet_range);
		alumniData.own_business[i] = ownBizData;
	}
	
	//Professional Certificates
	var certArry = newAlumni.getAlumni().professional_certificates;
	for(var i=0;i<certArry.length;i++){
		console.log('c');
		var ct = certArry[i];
		var certData = getCertModel(ct.title,ct.issuer,ct.issue_date,ct.aligned_with_work);
		alumniData.professional_certificates[i] = certData;
	}
	
	alumniData.save(function(err){
		if(!err){
			console.log('alumni data successfuly save');
		}else{
			console.log('error while alumni data, err : ' + err);
		}
	});
};

//Professional Career Model
function getCareerModel(companyName,startDate,endDate,alignedWithMajor,alignedWithStudy,firstSalaryRange){
	var CareerModel = mongoose.model('career', careerSchema);
	var ca = new CareerModel();
	ca.company_name = companyName;
	ca.startDate = startDate;
	ca.endDate = endDate;
	ca.aligned_with_major = alignedWithMajor;
	ca.aligned_with_study = alignedWithStudy;
	ca.first_salary_range = firstSalaryRange;
	return ca;
}

//Family Business Model
function getFamBizModel(name,business_majority,employee_range,omzet_range){
	var FamBizModel = mongoose.model('family_business', famBusinessSchema);
	var fb = new FamBizModel();
	fb.nama = name;
	fb.business_majority = business_majority;
	fb.employee_range = employee_range;
	fb.omzet_range = omzet_range;

	return fb;
}

//Certificates Model
function getCertModel(title,issuer,issue_date,aligned_with_work){
	var CertModel = mongoose.model('certificates',certificateSchema);
	var cm = new CertModel();
	cm.title = title;
	cm.issuer = issuer;
	cm.issue_date = issue_date;
	cm.aligned_with_work = aligned_with_work;
	
	return cm;
}

//Own Business Model
function getOwnBizModel(nama,country,is_current_job,start_date,end_date,business_majority,employee_range,omzet_range){
	var OwnBizModel = mongoose.model('own_business',ownBusinessSchema);
	var ob = new OwnBizModel();
	ob.nama = nama;
	ob.country = country;
	ob.is_current_job = is_current_job;
	ob.start_date = start_date;
	ob.end_date = end_date;
	ob.business_majority = business_majority;
	ob.employee_range = employee_range;
	ob.omzet_range = omzet_range;
	
	return ob;
}