import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Project DNA — Find your perfect project team", description: "Match with student collaborators based on complementary skills, interests and availability." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
