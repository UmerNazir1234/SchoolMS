'use client'

import { useState } from 'react'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const dummyCredentials = {
    email: 'admin@school.edu',
    password: 'Demo@12345',
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (email === dummyCredentials.email && password === dummyCredentials.password) {
        // Store user info in localStorage (for demo purposes)
        localStorage.setItem('user', JSON.stringify({ email, role: 'Admin' }))
        // Redirect to dashboard
        router.push('/admin')
      } else {
        alert('Invalid credentials. Please try again.')
        setIsLoading(false)
      }
    }, 500)
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      
    >
       <Image
    src="/image.jpg"
    alt="Background"
    fill
    className="object-cover"
  />
     
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Login Container */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-purple-300 to-purple-400 px-8 py-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">📚</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center">School Dashboard</h1>
            <p className="text-blue-100 text-center text-sm mt-2">Management System</p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="px-8 py-8">
            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="admin@school.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">Demo: admin@school.edu</p>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Demo: Demo@12345</p>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-purple-300 rounded cursor-pointer"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-purple-300 hover:text-purple-400 font-medium">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-300 to-purple-400 hover:from-purple-500 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn size={20} />
                  Sign In
                </>
              )}
            </button>

            {/* Demo Info */}
            <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-xs text-gray-600">
                <span className="font-semibold text-purple-300">Demo Credentials:</span>
                <br />
                Email: <code className="bg-white px-2 py-1 rounded text-purple-600 font-mono">admin@school.edu</code>
                <br />
                Password: <code className="bg-white px-2 py-1 rounded text-purple-600 font-mono">Demo@12345</code>
              </p>
            </div>
          </form>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
            <p className="text-xs text-gray-600 text-center">
              © 2024 School Management System. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
