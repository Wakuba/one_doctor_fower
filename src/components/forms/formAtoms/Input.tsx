import { VFC, ChangeEvent } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type InputPropsType = {
  name: string
  children?: string
  subTitle?: string
  style?: { wholeStyle?: string; labelStyle?: string; inputStyle?: string }
  type: 'email' | 'password' | 'text'
  placeholder?: string
  register?: UseFormRegister<FieldValues>
  errors?: any
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: VFC<InputPropsType> = ({
  name,
  children,
  subTitle,
  style,
  type,
  placeholder,
  register,
  errors,
  onChange,
}) => {
  let errorMessage = ''
  if (type === 'email') errorMessage = 'メールアドレスが記入されていません'
  else if (type === 'password') errorMessage = 'パスワードを入力してください'
  else errorMessage = '入力されていません'
  console.log('errorMessage', errorMessage)
  return (
    <div className={`${style?.wholeStyle}`}>
      <label
        htmlFor={name}
        className={`text-sm ${style?.labelStyle} ${
          children === 'dummy' && 'invisible'
        }`}
      >
        {children}
        {children && (
          <>
            <p className='text-[#FF0000] inline '>*</p>
            <div className='text-sm'>{subTitle}</div>
          </>
        )}
      </label>
      {register && (
        <input
          className={`${style?.inputStyle} text-sm w-full rounded border-1 border-solid border-[#707070] bg-white h-10`}
          type={type}
          placeholder={placeholder}
          {...register(name, {
            required: errorMessage,
            pattern:
              type === 'email'
                ? {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                    message: '無効なメールアドレスです',
                  }
                : undefined,
            onChange: (e) => {
              if (onChange) onChange(e)
            },
          })}
        />
      )}
      {errors[name] ? (
        <div className='block mt-2 text-xs text-[#FF0000]'>
          {errors[name].message}
        </div>
      ) : (
        <div className='invisible text-xs blocki mt-2'>message</div>
      )}
    </div>
  )
}
export default Input