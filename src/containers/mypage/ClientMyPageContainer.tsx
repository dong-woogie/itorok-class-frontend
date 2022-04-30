import React from 'react'
import { Activity, Flag, Heart, Book, Bell, Rss } from 'react-feather'
import MyPageMenuList from '../../components/mypage/MyPageMenuList'
import MyPageMenuTitle from '../../components/mypage/MyPageMenuTitle'
import MyPageMenuWrap from '../../components/mypage/MyPageMenuWrap'
import MyPageProfile from '../../components/mypage/MyPageProfile'
import MyPageTitle from '../../components/mypage/MyPageTitle'
import { useTypedSelect } from '../../modules'

function ClientMyPageContainer() {
  const user = useTypedSelect((state) => state.user.user)

  return (
    <div className="px-4">
      <MyPageTitle />
      <MyPageProfile
        thumbnail={user?.profile.thumbnail}
        username={user?.username}
        displayName={user?.profile.displayName}
        role={user?.role}
      />

      <MyPageMenuWrap>
        <MyPageMenuTitle text="활동내역" />
        <MyPageMenuList icon={Activity} text="현재 예약중인 클래스" href="" />
        <MyPageMenuList icon={Flag} text="완료한 클래스" href="" />
        <MyPageMenuList icon={Heart} text="좋아요 누른 클래스" href="" />
        <MyPageMenuList icon={Book} text="최근 본 클래스" href="" />
      </MyPageMenuWrap>

      <MyPageMenuWrap>
        <MyPageMenuTitle text="설정" />
        <MyPageMenuList icon={Bell} text="알림" href="" />
        <MyPageMenuList icon={Rss} text="공지사항" href="" />
      </MyPageMenuWrap>
    </div>
  )
}

export default ClientMyPageContainer
