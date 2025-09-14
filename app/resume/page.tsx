'use client'

import Navbar from '../components/Navbar'
import DynamicResume from '../components/DynamicResume'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <DynamicResume />
    </main>
  )
}