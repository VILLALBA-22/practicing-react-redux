import React, { Fragment } from 'react'
import AppBar from '../appBar/index'
import './styles.css'

import {
	Button,
	Paper,
	Typography,
	CssBaseline,
	CircularProgress,
} from '@mui/material'

function Page({ goTo, currentItem }) {
	return (
		<Fragment>
			<CssBaseline />

			<AppBar />

			<div className='details-page'>
				<Paper
					elevation={1}
					className='paper-container'
					sx='max-width: 900px; margin: auto'
				>
					{currentItem ? (
						<Fragment>
							<Typography gutterBottom variant='h5' component='h2'>
								{currentItem.title}
							</Typography>

							<div
								className='item-image'
								style={{
									backgroundImage: `url(${currentItem.image})`,
								}}
							/>

							<Typography gutterBottom component='p' className='content'>
								{currentItem.content}
							</Typography>
						</Fragment>
					) : (
						<CircularProgress className='item-loader' />
					)}

					<Button color='primary' onClick={() => goTo('/results')}>
						Back
					</Button>
				</Paper>
			</div>
		</Fragment>
	)
}

export default Page
