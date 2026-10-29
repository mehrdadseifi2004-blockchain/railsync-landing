import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RailSync | دستیار هوشمند بلیت رجا',
  description: 'ابزار اتوماسیون جست‌وجو و رزرو بلیت قطار رجا برای آژانس‌ها و شرکت‌های مسافرتی.',
  metadataBase: new URL('https://railsync.ir'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
