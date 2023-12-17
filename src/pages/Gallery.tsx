/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// Import fungsi getCandidates dari api calon ketua
import { useQuery } from '@tanstack/react-query'
import getCandidates from 'api/getCalon'
import CandidateCard from 'components/CandidateCard' // Gantilah ini dengan komponen yang sesuai untuk menampilkan data calon ketua
import Head from 'components/Head'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'

interface NumberBadgeProperties {
	number: number
}

const NumberBadge: React.FC<NumberBadgeProperties> = ({ number }) => (
	<div className='mx-auto my-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-blue-500 bg-white text-4xl font-bold text-blue-500'>
		{number}
	</div>
)

// Komponen Header untuk menyusun struktur header
const Header: React.FC = () => (
	<div className='my-8 text-center'>
		{/* <img src='' alt='' /> */}
		<h1 className='mb-4 text-3xl font-bold'>PEMILIHAN KETUA</h1>
		<h2 className='mb-2 text-xl font-semibold'>
			HIMPUNAN MAHASISWA SISTEM INFORMASI (HIMSI)
		</h2>
		<h3 className='mb-4 text-lg'>
			UNIVERSITAS BINA SARANA INFORMATIKA KOTA BOGOR
		</h3>
		<span className='text-lg font-bold'>2024</span>
	</div>
)

// Komponen GalleryPage yang menyusun seluruh halaman
const GalleryPage: React.FC = (): ReactElement => {
	// Menggunakan useQuery untuk mendapatkan data calon ketua
	const {
		isLoading,
		isError,
		error,
		data: candidates
	} = useQuery(['candidates'], getCandidates)

	if (isLoading || isError) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<>
			<Head title='Pemilihan Ketua HIMSI || PilkeSI' />
			<Header />
			<div className='m-2 mx-auto grid max-w-screen-xl grid-cols-3 place-items-center gap-2'>
				{candidates.map((candidate, index) => (
					<div key={`CandidateWrapper-${candidate.name}`} className='relative'>
						<NumberBadge number={index + 1} />
						<CandidateCard
							key={`CandidateCard-${candidate.name}`}
							candidate={candidate}
							index={index}
						/>
					</div>
				))}
			</div>
		</>
	)
}

export default GalleryPage
