import { MyButton } from "./Button.interface"
import { FC, PropsWithChildren } from "react"
import cn from 'classnames'
import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<MyButton>> = ({
    children, 
    className,
    ...props
}) => {
    return (
        <div>
            <button className={cn(styles.Button, className)} {...props}> 
                {children}
            </button>
        </div>
    )
}

export default Button