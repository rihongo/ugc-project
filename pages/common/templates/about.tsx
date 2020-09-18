import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui-customs/components/Link';

export default function About() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    about
                </Typography>
                <Link href="/" color="secondary">Go to the main page</Link>
            </Box>
        </Container>
    );
}