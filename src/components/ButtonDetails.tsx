/* eslint-disable react/function-component-definition */
// DetailButton.tsx

import type React from 'react'

interface DetailButtonProperties {
	link: string
}

const DetailButton: React.FC<DetailButtonProperties> = ({ link }) => (
	<a
		href={link}
		target='_blank'
		rel='noopener noreferrer'
		className='inline-block w-full rounded-md border-4 border-blue-500 bg-white px-4 py-2 text-center text-sm font-semibold text-blue-500 transition duration-300 hover:bg-blue-50'
	>
		Selengkapnya...
	</a>
)

export default DetailButton
