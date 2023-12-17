/* eslint-disable react/function-component-definition */
// VoteButton.tsx

import type React from 'react'

interface VoteButtonProperties {
	link: string
}

const VoteButton: React.FC<VoteButtonProperties> = ({ link }) => (
	<a
		href={link}
		target='_blank'
		rel='noopener noreferrer'
		className='inline-block w-full rounded-md bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white transition duration-300 hover:bg-blue-700'
	>
		VOTE!
	</a>
)

export default VoteButton
