import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <header>
                    <Navbar />
                    <Paper elevation={1}>
                        <Hero />
                    </Paper>
                </header>
                <main>
                    <section>
                        <h1>Gallery</h1>
                    </section>
                    <section>
                        <h1>Contact</h1>
                    </section>
                </main>
                <footer>{/* footer here */}</footer>
            </Container>
        </ThemeProvider>
    );
}

export default App;
