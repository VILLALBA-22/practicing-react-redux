import React, { useState } from 'react'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Paper from '@mui/material/Paper'
import MenuItem from '@mui/material/MenuItem'
import './styles.css'

function Autocomplete({ suggestions, onChangeText, onChangeSelection, text }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='main-container'>
			<div className='container-icon'>
				<SearchIcon />
			</div>
			<InputBase
				placeholder='Search…'
				value={text}
				style={{ width: '100%' }}
				onChange={e => {
					const newText = e.target.value
					onChangeText(newText)
					if (!isOpen && newText) {
						setIsOpen(true)
					} else if (isOpen && !newText) {
						setIsOpen(false)
					}
				}}
				onBlur={() => {
					setTimeout(() => setIsOpen(false), 100)
				}}
				onFocus={() => {
					if (text) {
						setIsOpen(true)
					}
				}}
				onKeyPress={event => {
					if (event.key === 'Enter' && text) {
						onChangeSelection(text)
					}
				}}
			/>
			{isOpen && (
				<Paper className='container-results' square>
					{suggestions.map(suggestion => (
						<MenuItem
							key={suggestion.id}
							component='div'
							onClick={() => {
								onChangeSelection(suggestion.title)
								setIsOpen(false)
							}}
						>
							{suggestion.title}
						</MenuItem>
					))}
				</Paper>
			)}
		</div>
	)
}

export default Autocomplete
