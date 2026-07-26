import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Bruno · Práctica de guitarra",description:"Rutina diaria de lectura, nutrición y práctica de guitarra.",manifest:"/manifest.webmanifest",appleWebApp:{capable:true,statusBarStyle:"default",title:"Bruno Guitarra"},icons:{icon:"/favicon.svg",apple:"/favicon.svg"}};
export const viewport:Viewport={width:"device-width",initialScale:1,maximumScale:1,themeColor:"#6558e8"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
