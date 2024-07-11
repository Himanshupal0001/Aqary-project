import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const Navbar = () => {
    return (
        <AppBar position="sticky" sx={{ marginBottom: '20px' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'block', md: 'flex' } }}>
                    <Link href='/' style={{ textDecoration: 'none', color: 'white' }}>
                        Logo
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
