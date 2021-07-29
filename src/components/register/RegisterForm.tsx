import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../common/Button'
import FixedWrap from '../common/FixedWrap'
import Input from '../common/Input'

export interface ProfileType {
  username: string
  displayName: string
  shortBio: string
}

interface RegisterFormProps {
  onSubmit: (profile: ProfileType) => void
  defaultValues: Partial<ProfileType>
  error?: string
}

function RegisterForm({ onSubmit, defaultValues, error }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<ProfileType>({
    mode: 'onChange',
    defaultValues,
  })

  const onSubmitForm = handleSubmit(async () => {
    await onSubmit(getValues())
  })

  return (
    <form className="mt-5" onSubmit={onSubmitForm}>
      <Input
        label="아이디"
        placeholder="아이디를 입력해주세요."
        error={errors.username?.message}
        {...register('username', { required: '아이디 입력은 필수입니다.' })}
      />

      <Input
        label="사용닉네임"
        placeholder="닉네임을 입력해주세요."
        error={errors.displayName?.message}
        {...register('displayName', { required: '닉네임 입력은 필수입니다.' })}
      />

      <Input label="한줄 소개" placeholder="한줄로 소개를 해주세요." {...register('shortBio')} />
      <FixedWrap>
        <Button text="가입하기" size="small" canClick={isValid && !error} />
      </FixedWrap>

      {error && <p className="mt-2 text-sm text-rose-400 text-center">{error}</p>}
    </form>
  )
}

export default RegisterForm
