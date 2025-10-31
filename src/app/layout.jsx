import '@/globals.css';

export const metadata = {
    title: 'Devathon X - Equipo 3 - Ouija Virtual',
    description: 'Ouija virtual',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
