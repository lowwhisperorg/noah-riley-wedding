"use client"
import { NextUIProvider } from '@nextui-org/react'
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import EventDetails from './components/EventDetails/EventDetails'
import GiftTips from './components/GiftTips/GiftTips'


export default function Home() {
  return (
    <NextUIProvider>
      <main className="light bg-background text-foreground font-serif">
      <Header />
      <LandingPage />
      <EventDetails />
      <GiftTips />
      </main>
      
    </NextUIProvider>
  )
}
