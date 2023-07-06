import { FC } from "react";
import { MyInput } from "./Input.interface";
import styles from './Input.module.scss'
import cn from 'classnames'

const Input: FC<MyInput> = ({
    className,
    ...props
}) => {
    return (
        <div>
            <input type="text" className={cn(styles.Input, className)} {...props}/>
        </div>
    )
}

export default Input