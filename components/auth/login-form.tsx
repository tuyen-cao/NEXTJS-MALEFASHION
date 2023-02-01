import { REQUEST_METHOD } from '@/constants/methodRequest.constant'
import { LoginPayload, LoginProps } from '@/models'
import React from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../form'

export const LoginForm: React.FC<LoginProps> = ({ onSubmit }) => {
    const { control, handleSubmit } = useForm<LoginPayload>({
        defaultValues: {
            username: 'kminchelle',
            password: '0lelplR'
        }
    })
    const loginSubmit = (payload: LoginPayload) => {
        onSubmit?.(payload)
        
    }
    return (
        <form id="loginform" onSubmit={handleSubmit(loginSubmit)}>
            <InputField name='username' control={control} type="text" placeholder='email' />
            <InputField
                name='password' control={control} type="password" placeholder='password' />
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}


