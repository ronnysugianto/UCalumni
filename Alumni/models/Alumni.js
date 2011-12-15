function Alumni() {
	this.nim= '';
	this.nama = '';
	this.email_address = '';
	this.mobile_phone = '';
	this.address = '';
	this.city = '';
	this.zip = '';
	this.country = '';
	this.birth_date = '';
	this.graduation_period = "";
	this.internship_total_duration_in_months = 0;
	this.employment = '';
	this.unemployed_reason = '';
	this.has_certificate='';
	this.has_continue_study='';
	this.has_family_business='';
	this.has_own_business='';
	this.has_work_in_company='';
	this.continue_study =Object;
	this.professional_career = new Array();
	this.professional_certificates = new Array();
	this.own_business = new Array();
	this.family_business = new Array;
}
module.exports.Alumni = Alumni;
Alumni.prototype.addCareer = function(career){
	var careerLength = this.professional_career.length;
	this.professional_career[careerLength] = career;
	console.log("Career Length : "+this.professional_career.length);
}
Alumni.prototype.addFamBiz = function(famBiz){
	var famBizLength = this.family_business.length;
	this.family_business[famBizLength] = famBiz;
	console.log("FamBiz Length : "+this.family_business.length);
}
Alumni.prototype.addCertificate = function(cert){
	var certLength = this.professional_certificates.length;
	this.professional_certificates[certLength] = cert;
	console.log("Cert Length : "+this.professional_certificates.length);
}
Alumni.prototype.addOwnBiz = function(ownBiz){
	var ownBizLength = this.own_business.length;
	this.own_business[ownBizLength] = ownBiz;
	console.log("OwnBiz Length : "+this.own_business.length);
}

