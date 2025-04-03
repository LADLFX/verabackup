'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { 
  User,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined' && auth) {
      const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
        setUser(user)
        setLoading(false)
      })

      return () => unsubscribe()
    } else {
      setLoading(false)
    }
  }, [])

  const login = async (email: string, password: string) => {
    if (!auth) {
      throw new Error('Firebase auth is not initialized')
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/dashboard')
    } catch (error) {
      console.error('Login error:', error)
      throw new Error('Invalid email or password')
    }
  }

  const logout = async () => {
    if (!auth) {
      throw new Error('Firebase auth is not initialized')
    }

    try {
      await signOut(auth)
      router.push('/login')
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 