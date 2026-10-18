import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Ravensfjord Kindred | From Hearth to Hall', description: 'Honor the Old Ways. Walk with Courage. Live with Purpose.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
