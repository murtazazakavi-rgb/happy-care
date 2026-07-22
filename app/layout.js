import './globals.css';

export const metadata = {
  title: 'Happy Care · Istefada Ilmiyah',
  description: 'Manage registered children, parents, staff, groups, timetables, daily attendance and parent communication during Happy Care.',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
