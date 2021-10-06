import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/core/AccountCircle'

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
				<AccountCircle />
			</Toolbar>
		</AppBar>
	)
}
