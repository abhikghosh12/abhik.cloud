'use client'

import Navbar from '../components/Navbar'
import DynamicResume from '../components/DynamicResume'
import Footer from '../components/Footer'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <DynamicResume />
      <Footer />
    </main>
  )
}