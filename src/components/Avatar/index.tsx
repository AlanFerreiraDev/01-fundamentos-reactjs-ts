import styles from './Avatar.module.css'
import { AvatarProps } from './interfaces'

export function Avatar({ hasBorder = true, ...rest }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...rest}
    />
  )
}
