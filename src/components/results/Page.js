import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '../appBar/index'
import {
	Card,
	Typography,
	CardActionArea,
	CardContent,
	CardMedia,
} from '@mui/material'
import './styles.css'

export default function Page({ results, goTo }) {
	console.log(results)
	const isEmpty = results.length === 0
	return (
		<>
			<CssBaseline />
			<AppBar />
			<div className='results-page'>
				{isEmpty ? (
					<Typography variant='h5' component='h3' className='page-message'>
						There are'nt results matching
					</Typography>
				) : (
					results.map(tech => {
						return (
							<div key={tech.id} className='card-container'>
								<Card
									className='card'
									onClick={() => goTo(`/details/${tech.id}`)}
								>
									<CardActionArea>
										<CardMedia
											className='card-media'
											image={tech.image}
											title={tech.title}
										/>
										<CardContent>
											<Typography gutterBottom variant='h5' component='h2'>
												{tech.title}
											</Typography>
											<Typography component='p'>{tech.content}</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</div>
						)
					})
				)}
			</div>
		</>
	)
}
