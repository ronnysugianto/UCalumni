var alumni = {
	nim: '',
	nama : '',
	email_address : '',
	mobile_phone : '',
	address : '',
	city : '',
	zip : '',
	country : '',
	birth_date : Date.now,
	graduation_period : Date.now,
	not_certified_reason : '',
	business_ownership : '',
	internship_experience : false,
	internship_total_duration_in_months : 0,
	unemployment : '',
	unemployment_reason : '',
	has_family_business:'',
	has_certificate:'',
	continue_study : {
		institution_name : '',
		country : '',
		level : '',
		field : '',
		start_year : 0,
		aligned_with_UC : false,
		reason : ''
	},
	professional_career : [],
	professional_certificates : [],
	own_business : [],
	family_business : []
}
module.exports.alumni = alumni;
module.exports.getAlumni = function(){
	return alumni;
}
module.exports.addCareer = function(career){
	var careerLength = alumni.professional_career.length;
	alumni.professional_career[careerLength] = career;
	console.log("Career Length : "+alumni.professional_career.length);
}
module.exports.addFamBiz = function(famBiz){
	var famBizLength = alumni.family_business.length;
	alumni.family_business[famBizLength] = famBiz;
	console.log("FamBiz Length : "+alumni.family_business.length);
}
module.exports.addCertificate = function(cert){
	var certLength = alumni.professional_certificates.length;
	alumni.professional_certificates[certLength] = cert;
	console.log("Cert Length : "+alumni.professional_certificates.length);
}
module.exports.addOwnBiz = function(ownBiz){
	var ownBizLength = alumni.own_business.length;
	alumni.own_business[ownBizLength] = ownBiz;
	console.log("OwnBiz Length : "+alumni.own_business.length);
}

