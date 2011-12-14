
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
//	Personal Data
	pageTitle: 'UC Alumni Survey', 
	name: 'Nama Lengkap',
	studentID : 'NIM', 
		studentIDcaption : 'Nomor Induk Mahasiswa', 
	personalData: 'Data Pribadi',
	dateofBirth: 'Tanggal Lahir',
	graduationPeriod: 'Periode Kelulusan',
		graduationPeriodCaption: 'Bulan dan tahun berapa Anda lulus dari UC',

//	Personal Contact
	contactData: 'Data Kontak',
	address: 'Alamat',
	city: 'Kota',
	country: 'Negara',
		countryCaption: 'Tidak di Indonesia?',
		countryCaptionLink: 'Ubah negara asal Anda',
	postalCode: 'Kode Pos',
	email: 'e-Mail',
	phoneMobile: 'Nomor Telepon Pribadi',
		phoneMobileCaption: '+62 81 55 14 77 00 atau +62.81.5514.7700 atau 08155147700',
		
//	Professional Certificate
	proCertificate: 'Sertifikasi Profesi',
	checktoSkip: 'Apabila dipilih, maka data di bawah ini tidak akan disimpan',
	certName: 'Nama Sertifikat',
	certDate: 'Tanggal Sertifikasi',
	certPublisher: 'Penerbit Sertifikat',
	certJobLink: 'Hubungan dengan pekerjaan',
	
//	Graduate Studies
  gradStudies: 'Pendidikan Lanjut',
  schoolName: 'Nama Institusi',
  enrollYear: 'Tahun Ajaran',
  schoolCountry: 'Negara',
  strata: 'Tingkat Pendidikan',
  reason: 'Alasan pengambilan pendidikan lanjut',
    reasonInterest: 'Pendalaman Minat',
    reasonTalent: 'Bakat',
    reasonFriend: 'Ikut Teman',
    reasonCulture: 'Ingin melihat budaya lain',
    reasonNotinUC: 'Tidak tersedia di UC',
    reasonOther: 'Lainnya',

//	Work
  work: 'Karir Professional',
  unemreasonApply: 'Masih dalam tahap pengajuan',
  unemreasonCulture: 'Ingin melihat budaya lain',
  unemreasonSchool: 'Saya sedang menjalani studi lanjut',

  bizName: 'Nama Bisnis',
  bizEst: 'Tahun Didirikan',
  bizField: 'Bidang Usaha',
  bizNumOfEmployee: 'Jumlah karyawan',
  bizMonthlyRevenue: 'Omzet per Bulan',

  employName: 'Nama Perusahaan',
  employCountry: 'Negara',
  employCurrent: 'Ini adalah pekerjaan saya sekarang',
  employStartDate: 'Mulai Bekerja',
  employEndDate: 'sampai dengan',
  employField: 'Bidang Usaha',
  employSalary: 'Upah Kerja',
  employAlign: 'Sesuai dengan bidang studi?',
  employStudyHelp: 'Apakah pembelajaran di UC membantu dalam pekerjaan Anda?',

  famName: 'Nama Bisnis',
  famEst: 'Tahun Didirikan',
  famField: 'Bidang Usaha',
  famNumOfEmployee: 'Jumlah karyawan',
  famMonthlyRevenue: 'Omzet per Bulan',

  intern: 'Informasi Tambahan'

	})
};