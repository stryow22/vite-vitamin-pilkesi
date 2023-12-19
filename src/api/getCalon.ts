// calonKetua.ts

export interface ICandidate {
	image: string
	name: string
	slug: string
	desc: string
	visi: string
	misi: string
	link: string
}

const candidates: ICandidate[] = [
	{
		image: '/public/rival.png',
		name: 'Muhammad Rival Cahya Nugraha',
		slug: 'rival',
		desc: 'Deskripsi Anies',
		visi: 'Menjadi pusat inspirasi dan inovasi yang menggerakkan anggota untuk mencapai prestasi luar biasa dan memberikan dampak positif bagi mahasiswa.',
		misi: '1. Mendorong Pengembangan Diri:\n Menyediakan platform dan sumber daya untuk membantu setiap anggota HIMSI mengembangkan diri secara pribadi dan profesionalitas, sehingga mereka dapat mencapai potensi tertinggi dari mereka.\n 2. Menjaga Etika dan Nilai Integritas\nMendorong integritas, etika, dan nilai-nilai moral dalam setiap aspek kegiatan himpunan, menciptakan lingkungan yang menjunjung tinggi standar moral yang tinggi.\n 3. Pengembangan Keterampilan Hard Skills\n Kami bertekad untuk menjadi pusat pengembangan keterampilan hard skill di antara mahasiswa Sistem Informasi, memberikan dukungan dan peluang bagi anggota kami untuk mengasah kemampuan teknis yang relevan dengan perkembangan terbaru di dunia teknologi informasi',
		link: 'https://docs.google.com/forms/d/e/1FAIpQLSefp_GF9FQ55MrNWNyJnohjZIbt1uUKp89r2HDWQ8-YfBKbbg/viewform'
	},
	{
		image: '/public/ghufran.png',
		name: 'Ghufran Faisal Yusuf',
		slug: 'ghufran',
		desc: 'Deskripsi Prabowo',
		visi: 'Menjadikan HIMSI sebagai organisasi yang kreatif, inovatif, bertanggung jawab dan berwawasan luas dengan selalu menjunjung tinggi asas kekeluargaan.',
		misi: '1. Mengadakan pelatihan rutin yang berkelanjutan guna meningkatkan pengetahuan dan kemampuan seluruh anggota himsi.\n2. Memberikan dukungan sumber daya untuk memotivasi seluruh anggota dalam mengembangkan ide kreatif dan inovatif.\n3. Selalu menjaga atmosfer kekeluargaan dalam organisasi dengan mengadakan kegiatan sosial non akademik guna mempererat tali kekeluargaan antar anggota.\n4. Menanamkan rasa kepemilikan dan ikatan terhadap himpunan guna menjadikan seluruh anggota himsi yang disiplin dan bertanggung jawab.\n5. Menjalin hubungan kerja sama yang baik antar organisasi mahasiswa di lingkungan kampus UBSI Bogor.',
		link: 'https://docs.google.com/forms/d/e/1FAIpQLSefp_GF9FQ55MrNWNyJnohjZIbt1uUKp89r2HDWQ8-YfBKbbg/viewform'
	},
	{
		image: '/public/daffa.png',
		name: 'M Daffa Abhinaya Daelami',
		slug: 'daffa',
		desc: 'Deskripsi Ganjar',
		visi: 'Menjadi wadah unggulan bagi mahasiswa Sistem Informasi yang berinovasi, berkarakter, dan berdaya saing tinggi dalam menghadapi tantangan era digital.',
		misi: '1. Menyelenggarakan berbagai kegiatan dan pelatihan guna meningkatkan kompetensi mahasiswa Sistem Informasi\n2. Membangun jaringan alumni yang solid untuk memberikan dukungan dan mentorship kepada mahasiswa Sistem Informasi\n3. Memberikan ruang partisipasi aktif bagi seluruh anggota himpunan dalam proses pengambilan keputusan, sehingga tercipta rasa memiliki dan tanggung jawab kolektif.',
		link: 'https://docs.google.com/forms/d/e/1FAIpQLSefp_GF9FQ55MrNWNyJnohjZIbt1uUKp89r2HDWQ8-YfBKbbg/viewform'
	}
]

export default async function getCandidates(): Promise<ICandidate[]> {
	return candidates
}
