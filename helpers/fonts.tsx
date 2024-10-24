import { Afacad, Inter } from "next/font/google"

export const inter = Inter({
    weight: ['500', '900'],
    subsets: ['latin'],
})

export const interMedium = Inter({
    weight: ['700'],
    subsets: ['latin'],
})

export const interItalic = Inter({
    weight: ['700'],
    subsets: ['latin'],
    style: 'italic'
})
  
export const afacad = Afacad({
    weight: ['400'],
    subsets: ['latin'],
})

export const afacadBold = Afacad({
    weight: ['700'],
    subsets: ['latin'],
})

export const afacadItalic = Afacad({
    subsets: ['latin'],
    style: 'italic', 
})