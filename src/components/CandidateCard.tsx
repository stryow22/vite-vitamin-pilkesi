/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/function-component-definition */
import type { ICandidate } from 'api/getCalon'
import type React from 'react'
import DetailButton from './ButtonDetails'
import VoteButton from './ButtonVote'

interface CandidateCardProperties {
	candidate: ICandidate
	index: number
}

const CandidateCard: React.FC<CandidateCardProperties> = ({
	candidate,
	index
}) => (
	<div className='rounded-2xl border-4 border-blue-500 bg-white p-4 shadow-md'>
		<img
			src={candidate.image}
			alt={`${candidate.name} Image`}
			className='mb-4 h-60 w-80 rounded-md object-cover'
		/>
		<h3 className='mb-2 text-xl font-bold text-gray-600'>{candidate.name}</h3>
		<p className='mb-2 text-gray-600'>{candidate.desc}</p>
		<p className='mb-2 text-gray-600'>{candidate.visi}</p>
		<p className='mb-4 text-gray-600'>{candidate.misi}</p>

		<div className='space-y-2'>
			<DetailButton link={`/details/${candidate.name}`} />
			<VoteButton link={candidate.link} />
		</div>
	</div>
)

export default CandidateCard
