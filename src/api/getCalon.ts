// calonKetua.ts

export interface ICandidate {
	image: string
	name: string
	desc: string
	visi: string
	misi: string
	link: string
}

const candidates: ICandidate[] = [
	{
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anies_Baswedan%2C_Candidate_for_Indonesia%27s_President_in_2024.jpg/220px-Anies_Baswedan%2C_Candidate_for_Indonesia%27s_President_in_2024.jpg',
		name: 'Anies',
		desc: 'Deskripsi Anies',
		visi: 'Visi Anies',
		misi: 'Misi Anies',
		link: 'link_anies'
	},
	{
		image:
			'https://images.bisnis.com/posts/2023/11/08/1712375/prabowo_subianto_1699419408.jpg',
		name: 'Prabowo',
		desc: 'Deskripsi Prabowo',
		visi: 'Visi Prabowo',
		misi: 'Misi Prabowo',
		link: 'link_prabowo'
	},
	{
		image:
			'https://asset.kompas.com/crops/A0qds-2BjWmU4g8xkkxJANW0Zmo=/0x0:0x0/750x500/data/photo/2022/10/24/635673c468c46.jpg',
		name: 'Ganjar',
		desc: 'Deskripsi Ganjar',
		visi: 'Visi Ganjar',
		misi: 'Misi Ganjar',
		link: 'link_ganjar'
	}
]

export default async function getCandidates(): Promise<ICandidate[]> {
	return candidates
}
