import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_PRODUCT_COUNT } from '../../lib/graphql'
import { useTypedSelect } from '../../modules'
import { getProductCountquery } from '../../__generated__/getProductCountquery'
import MyPageTitle from '../../components/mypage/MyPageTitle'
import MyPageProfile from '../../components/mypage/MyPageProfile'
import MyPageAddress from '../../components/mypage/MyPageAddress'
import MyPageClassSituation from '../../components/mypage/MyPageClassSituation'

function MentorMyPageContainer() {
  const user = useTypedSelect((state) => state.user.user)
  const { data } = useQuery<getProductCountquery>(GET_PRODUCT_COUNT)
  return (
    <div className="px-4">
      <MyPageTitle />
      <MyPageProfile
        thumbnail={user?.profile.thumbnail}
        username={user?.username}
        displayName={user?.profile.displayName}
        role={user?.role}
      />
      <MyPageAddress address={user?.address} detailAddress={user?.detailAddress} />
      <MyPageClassSituation classCount={data?.getProductCount.productCount} />
    </div>
  )
}

export default MentorMyPageContainer
