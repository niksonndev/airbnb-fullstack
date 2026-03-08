import { RegisterModal } from './components/modals/RegisterModal';
import { Navbar } from './components/navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
import { ToasterProvider } from './providers/ToasterProvider';
import { LoginModal } from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import { RentModal } from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';
import { Suspense } from 'react';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Suspense fallback={null}>
          <Navbar currentUser={currentUser} />
        </Suspense>
        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  );
}
