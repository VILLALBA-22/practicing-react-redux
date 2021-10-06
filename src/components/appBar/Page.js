import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AutoComplete from '../autoComplete/index'
import AccountCircle from '@mui/icons-material/AccountCircle'
import './styles.css'

export default function Page({
	text,
	suggestions,
	onChangeText,
	onChangeSelection,
}) {
	return (
		<AppBar position='static'>
			<Toolbar className='appbar'>
				<Typography variant='h6' color='inherit'>
					Andres Villalba
				</Typography>
				<AutoComplete
					text={text}
					suggestions={suggestions}
					onChangeText={onChangeText}
					onChangeSelection={onChangeSelection}
				/>
				<AccountCircle />
			</Toolbar>
		</AppBar>
	)
}
