import React from 'react'
import { useTypedSelect } from '../../modules'
import { UserRole } from '../../__generated__/globalTypes'
import MentorMyPage from './MentorMyPage'
import NotFound from '../NotFound'
import ClientMyPage from './ClientMyPage'

function MyPage() {
  const user = useTypedSelect((state) => state.user.user)
  if (user?.role === UserRole.client) return <ClientMyPage />
  if (user?.role === UserRole.mentor) return <MentorMyPage />
  return <NotFound />
}

export default MyPage
