export interface LoginProps {
    onSubmit: (payload:LoginPayload) => void
}
export interface LoginPayload {
    username: string,
    password: string
}