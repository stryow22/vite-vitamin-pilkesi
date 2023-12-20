/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/function-component-definition */
import type { ICandidate } from 'api/getCalon'
import type React from 'react'
import { useState } from 'react'
import VoteButton from './ButtonVote'
import CandidateDetailModal from './ModalDetail'

interface CandidateCardProperties {
	candidate: ICandidate
	index: number
}

const CandidateCard: React.FC<CandidateCardProperties> = ({
	candidate,
	index
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div
			className='relative mb-10 mt-5 flex w-full max-w-sm flex-col items-center overflow-hidden rounded-2xl border-4 border-blue-500 bg-white pb-10 text-center shadow-lg'
			style={{ width: '400px', height: '700px' }}
		>
			<img
				className='w-full object-cover'
				src={`/images/${candidate.slug}.png`}
				alt={`${candidate.name} Image`}
			/>

			<div className='px-6 py-4'>
				<h3 className='mb-2 text-xl font-bold text-gray-600'>
					{candidate.name}
				</h3>
			</div>

			<div className='flex items-center justify-center px-5'>
				<p className='mb-2 text-gray-600'>{candidate.visi}</p>
			</div>

			<div className='absolute bottom-0 left-1/2 mb-4 flex w-11/12 -translate-x-1/2 transform flex-col items-center justify-center space-y-2'>
				<button
					onClick={openModal}
					className='inline-block w-full rounded-md border-4 border-blue-400 bg-white px-4 py-2 text-center text-sm font-semibold text-blue-500 transition duration-300 hover:bg-blue-100'
				>
					Lihat Detail
				</button>
				<VoteButton link={candidate.link} />
			</div>

			{isModalOpen ? (
				<CandidateDetailModal candidate={candidate} onClose={closeModal} />
			) : undefined}
		</div>
	)
}

export default CandidateCard
