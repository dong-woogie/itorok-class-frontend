import React, { useState, useCallback, useRef } from 'react'
import { useForm } from 'react-hook-form'
import NumberFormat from 'react-number-format'
import { useDispatch } from 'react-redux'
import { openAddressDialog } from '../../modules/dialog'
import { Gender, RegisterWithSocialInput, UserRole } from '../../__generated__/globalTypes'
import Button from '../common/Button'
import FixedWrap from '../common/FixedWrap'
import Input from '../common/Input'
import { ProfileType } from './RegisterForm'
import SelectGender from './SelectGender'

interface MentorRegisterFormProps {
  defaultValues: Partial<ProfileType>
  sendCode: (phoneNumber: string) => Promise<boolean>
  verifyCode: (body: { phoneNumber: string; code: string }) => Promise<boolean>
  onSubmit: (profile: RegisterWithSocialInput) => void
  error: string
}

interface MentorProfileType {
  username: string
  displayName: string
  shortBio: string
  phoneNumber: string
  code: string
}

function MentorRegisterForm({ defaultValues, sendCode, verifyCode, onSubmit, error }: MentorRegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<MentorProfileType>({
    mode: 'onChange',
    defaultValues: {
      ...defaultValues,
      shortBio: `안녕하세요. 멘토 ${defaultValues.displayName}입니다.`,
    },
  })
  const [gender, setGender] = useState<Gender>(Gender.male)
  const [isCertified, setIsCertified] = useState<boolean>(false)
  const [isSentCode, setIsSentCode] = useState<boolean>(false)

  const dispatch = useDispatch()
  const addressRef = useRef<HTMLInputElement>()
  const detailAddressRef = useRef<HTMLInputElement>()

  const onChangeGender = useCallback((selectGender: Gender) => {
    setGender(selectGender)
  }, [])
  const onChangeAddress = (roadAddress: string) => {
    if (!addressRef.current) return
    addressRef.current.value = roadAddress
    detailAddressRef.current?.focus()
  }
  const onFocusAddressInput = () => {
    dispatch(openAddressDialog({ onComplete: onChangeAddress }))
  }

  const phoneFormErrorMessage = () => {
    return errors.phoneNumber?.message || (errors.phoneNumber?.type === 'pattern' && '휴대전화 번호를 입력해주세요.')
  }

  const onClickSendCode = async () => {
    const { phoneNumber } = getValues()
    if (!phoneNumber) return
    const success = await sendCode(phoneNumber.replace(/-/g, ''))
    if (success) setIsSentCode(true)
  }

  const onClickVerifyCode = async () => {
    const { phoneNumber, code } = getValues()

    const success = await verifyCode({ phoneNumber: phoneNumber.replace(/-/g, ''), code })
    if (success) setIsCertified(true)
  }

  const onSubmitForm = handleSubmit(() => {
    if (!isCertified) return
    const { username, shortBio, phoneNumber, displayName } = getValues()
    onSubmit({
      username,
      displayName,
      role: UserRole.mentor,
      shortBio,
      phoneNumber,
      address: addressRef.current?.value || '',
      detailAddress: detailAddressRef?.current?.value || '',
      gender,
    })
  })

  return (
    <form className="mt-5 pb-16" onSubmit={onSubmitForm}>
      <Input
        label="아이디"
        placeholder="아이디를 입력해주세요."
        error={errors.username?.message}
        required
        {...register('username', { required: '아이디를 입력해주세요' })}
      />
      <Input
        label="사용닉네임"
        placeholder="닉네임을 입력해주세요."
        error={errors.displayName?.message}
        required
        {...register('displayName', { required: '닉네임을 입력해주세요.' })}
      />

      <SelectGender gender={gender} onChange={onChangeGender} />

      <div className="relative">
        <NumberFormat
          customInput={Input}
          label="휴대번호 인증하기"
          placeholder="예) 010-xxxx-xxxx"
          format="###-####-####"
          {...register('phoneNumber', {
            required: '휴대전화 번호를 입력해주세요.',
            pattern: /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/,
          })}
          error={phoneFormErrorMessage()}
          required
          readOnly={isCertified}
        />
        {!isCertified && (
          <div className="absolute right-0 top-0 h-full flex items-center w-20">
            <Button
              text={isSentCode ? '재전송' : '전송'}
              size="xs"
              onClick={onClickSendCode}
              type="button"
              canClick={!phoneFormErrorMessage() && !!getValues().phoneNumber && !isCertified}
            />
          </div>
        )}
      </div>

      {isSentCode && (
        <div className="relative">
          <NumberFormat
            customInput={Input}
            format="####"
            label="인증번호"
            placeholder="SMS 인증번호를 입력해주세요."
            required
            {...register('code', {
              required: '인증번호를 입력해주세요.',
            })}
            readOnly={isCertified}
          />
          {!isCertified && (
            <div className="absolute right-0 top-0 h-full flex items-center w-20">
              <Button text="인증하기" size="xs" type="button" onClick={onClickVerifyCode} canClick={!isCertified} />
            </div>
          )}
        </div>
      )}

      <Input
        name="address"
        label="공방 주소"
        placeholder="클릭해서 주소를 입력해주세요."
        ref={addressRef}
        required
        readOnly
        onClick={onFocusAddressInput}
      />

      <Input
        name="detailAddress"
        label="상세 주소"
        placeholder="상세주소를 입력해주세요."
        ref={detailAddressRef}
        required
      />

      <Input label="한줄 소개" placeholder="한줄로 소개해주세요." {...register('shortBio')} />

      <FixedWrap>
        <p className="text-rose-400 text-center font-semibold">{error}</p>
        <Button text="멘토로 가입하기" size="full" canClick={isValid && isCertified && !error} />
      </FixedWrap>
    </form>
  )
}

export default MentorRegisterForm
