import { ApolloError } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'

interface SocialLoginComponentProps {
  loading?: boolean
  error?: ApolloError
}

function SocialLoginComponent({ loading, error }: SocialLoginComponentProps) {
  return (
    <div className="flex h-screen justify-center">
      {loading && (
        <div className="mt-40 flex flex-col items-center">
          <h2 className="font-semibold text-2xl tracking-widest italic">Logging...</h2>
          <h3 className="mt-10 text-5xl">🤸‍♂️</h3>
        </div>
      )}
      {error && (
        <div className="mt-40 flex flex-col items-center">
          <div className="font-semibold text-2xl tracking-widest italic">{error}</div>
          <div className="mt-10 text-5xl">⛹️‍♀️</div>
          <Link to="/login" className="mt-10">
            <h3 className="text-rose-500 underline ">로그인페이지로 이동</h3>
          </Link>
        </div>
      )}
    </div>
  )
}

export default SocialLoginComponent
