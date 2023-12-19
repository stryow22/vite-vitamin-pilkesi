/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/function-component-definition */
import type { ICandidate } from 'api/getCalon'
import type React from 'react'
import VoteButton from './ButtonVote'

interface CandidateDetailModalProperties {
	candidate: ICandidate
	onClose: () => void
}

const CandidateDetailModal: React.FC<CandidateDetailModalProperties> = ({
	candidate,
	onClose
}) => (
	<div
		className='relative z-10'
		aria-labelledby='modal-title'
		role='dialog'
		aria-modal='true'
	>
		<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />

		<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
			<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
				<div className='relative transform overflow-hidden rounded-2xl border-4 border-blue-500 bg-white py-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
					<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
						<div className='mx-auto flex flex-shrink-0 items-center justify-center rounded-full'>
							<img
								className='rounded-full object-cover'
								src={candidate.image}
								alt={`${candidate.name} Image`}
							/>
						</div>
						<div className='sm:flex sm:items-start'>
							<div className='mt-3 space-y-4 py-10 text-center sm:ml-4 sm:mt-0 sm:text-left'>
								<h3
									className='text-xl font-semibold leading-6 text-gray-900'
									id='modal-title'
								>
									{candidate.name}
								</h3>
								<div className='mt-2'>
									<h2 className='text-lg font-semibold leading-6 text-gray-500'>
										Visi
									</h2>
									<p className='text-sm text-gray-500'>{candidate.visi}</p>
								</div>

								<div className='mt-2'>
									<h2 className='text-lg font-semibold leading-6 text-gray-500'>
										Misi
									</h2>
									<ul className='space-y-2 text-sm text-gray-500'>
										{candidate.misi.split('\n').map((mission, index) => (
											<li key={index}>{mission}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
						<button
							type='button'
							className='inline-flex w-full justify-center rounded-md border border-blue-500 bg-white px-3 py-2 text-sm font-semibold text-blue-500 shadow-sm hover:bg-blue-100 sm:ml-3 sm:w-auto'
							onClick={onClose}
						>
							Tutup
						</button>

						<VoteButton link={candidate.link} />
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default CandidateDetailModal
