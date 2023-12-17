import { useQuery } from '@tanstack/react-query'
import getCandidates from 'api/getCalon'
import Head from 'components/Head'
import LoadingOrError from 'components/LoadingOrError'
import type React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useMediaQuery } from 'utils'

const DESKTOP_IMAGE_WIDTH_PERCENTAGE = 0.4
const MOBILE_IMAGE_HEIGHT_PERCENTAGE = 0.3

export default function DetailsPage(): React.ReactElement {
	const isTabletAndUp = useMediaQuery('(min-width: 600px)')
	const { candidateName } = useParams()

	const { isLoading, isError, error, data } = useQuery(
		['candidates'],
		getCandidates
	)

	if (isLoading || isError) {
		return <LoadingOrError error={error as Error} />
	}

	const candidate = data.find(
		c => c.name.toLowerCase() === candidateName?.toLowerCase()
	)

	if (!candidate) {
		return <Navigate to='/' replace />
	}

	const imageWidth =
		(isTabletAndUp
			? window.innerWidth * DESKTOP_IMAGE_WIDTH_PERCENTAGE
			: window.innerWidth) * window.devicePixelRatio
	const imageHeight =
		(isTabletAndUp
			? window.innerHeight
			: window.innerHeight * MOBILE_IMAGE_HEIGHT_PERCENTAGE) *
		window.devicePixelRatio

	return (
		<>
			<Head title={candidate.name} />
			<div className='flex min-h-screen flex-col items-center sm:flex-row'>
				<div className='relative'>
					<img
						data-testid='CandidateImage'
						width={imageWidth}
						height={imageHeight}
						src={`${candidate.image}&w=${imageWidth}&h=${imageHeight}`}
						alt={candidate.name}
					/>
				</div>
				<div className='my-8 sm:my-0 sm:ml-16'>
					<Link data-testid='BackLink' to='/' className='flex items-center'>
						<img src='/icons/arrow-left.svg' alt='' className='h-5 w-5' />
						<span className='ml-4 text-xl'>Back</span>
					</Link>

					<h1
						data-testid='CandidateName'
						className='mt-2 text-6xl font-bold sm:mt-8'
					>
						{candidate.name}
					</h1>
					<p className='mt-3 text-lg'>{candidate.desc}</p>
					<h2 className='mt-3 text-xl text-gray-500 dark:text-gray-400'>
						Visi dan Misi
					</h2>
					<p className='mt-3 text-lg'>{candidate.visi}</p>
					<p className='mt-3 text-lg'>{candidate.misi}</p>
				</div>
			</div>
		</>
	)
}
