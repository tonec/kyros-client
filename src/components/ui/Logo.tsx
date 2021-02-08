import React from 'react'
import cx from 'clsx'
import { makeStyles } from 'styles'

interface UseStyleProps {
  size?: number
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
    width: ({ size }: UseStyleProps) => `${size}px`,
    height: ({ size }: UseStyleProps) => `${size}px`,
    backgroundSize: 'contain',
    background:
      "url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2250%22%20height%3D%2240%22%20viewBox%3D%220%200%2050%2040%22%3E%3Ctitle%3EPage%201%3C/title%3E%3Cpath%20fill%3D%22%235CBC51%22%20d%3D%22M31.605%205.093l5.62-1.36.5%204.326%22/%3E%3Cpath%20fill%3D%22%23A9D040%22%20d%3D%22M37.227%203.733l.3%202.595%204.49%202.067%22/%3E%3Cpath%20fill%3D%22%23403E3C%22%20d%3D%22M37.526%206.29l1.782.866-1.582.865%22/%3E%3Cpath%20fill%3D%22%233EB649%22%20d%3D%22M39.324%207.156l2.693%201.24-2.71%202.488%22/%3E%3Cpath%20fill%3D%22%2313A65F%22%20d%3D%22M39.324%207.156l-.016%203.728-6.564-.206%22/%3E%3Cpath%20fill%3D%22%23896D3A%22%20d%3D%22M32.744%2010.678l1.3%202.633%205.265-2.427%22/%3E%3Cpath%20fill%3D%22%2319AA4B%22%20d%3D%22M31.605%205.093l1.14%205.585-6.653.205%22/%3E%3Cpath%20fill%3D%22%2319894C%22%20d%3D%22M26.092%2010.883l6.652-.206-4.82%204.95%22/%3E%3Cpath%20fill%3D%22%23FCD539%22%20d%3D%22M34.045%2013.31l-4.773%207.68-3.776-4.462%22/%3E%3Cpath%20fill%3D%22%23FADB33%22%20d%3D%22M25.496%2016.528l3.776%204.46-7.3%204.892%22/%3E%3Cpath%20fill%3D%22%231880C3%22%20d%3D%22M26.092%2010.883L19.105%2018.9l8.818-3.273%22/%3E%3Cpath%20fill%3D%22%2361C198%22%20d%3D%22M25.496%2016.528L15.802%2028.15l3.303-9.25%22/%3E%3Cpath%20fill%3D%22%23F8CD36%22%20d%3D%22M25.496%2016.528L21.97%2025.88l-6.168%202.27%22/%3E%3Cpath%20fill%3D%22%23403E3C%22%20d%3D%22M21.97%2025.88l1.8%201.036-2.928.47%22/%3E%3Cpath%20fill%3D%22%23D87E13%22%20d%3D%22M21.97%2025.88l-6.388%208.525-3.236-.492%22/%3E%3Cpath%20fill%3D%22%23199BB5%22%20d%3D%22M21.97%2025.88L9.63%2032.987l.267%202.97%22/%3E%3Cpath%20fill%3D%22%23F4781F%22%20d%3D%22M7.04%2038.49l5.306-4.577%203.236.492%22/%3E%3Cpath%20fill%3D%22%231E5782%22%20d%3D%22M21.97%2025.88l-11.256%204.232-.156%202.34%22/%3E%3Cpath%20fill%3D%22%23DF9D49%22%20d%3D%22M29.27%2020.99l-3.24%203.9-4.06.99%22/%3E%3Cpath%20fill%3D%22%231BA4A7%22%20d%3D%22M26.092%2010.883L19.105%2018.9l-2.06-2.888%22/%3E%3Cpath%20fill%3D%22%232B98D4%22%20d%3D%22M17.87%207.427l-.824%208.586-11.5-5.106%22/%3E%3Cpath%20fill%3D%22%233FBB86%22%20d%3D%22M17.87%207.427l-12.323%203.48-4.9-4.725%22/%3E%3Cpath%20fill%3D%22%23F47621%22%20d%3D%22M.647%206.182L17.87%207.427.073%203.887%22/%3E%3Cpath%20fill%3D%22%2313C6B0%22%20d%3D%22M26.092%2010.883L17.87%207.427l6.27.26%22/%3E%3Cpath%20fill%3D%22%23E5FF27%22%20d%3D%22M27.994%208.886l-3.856-1.2%201.954%203.197%22/%3E%3Cpath%20fill%3D%22%23804C51%22%20d%3D%22M32.744%2010.678l1.3%202.633-6.12%202.317%22/%3E%3Cpath%20fill%3D%22%23F4781F%22%20d%3D%22M7.04%2038.49l3.163.852%205.38-4.936%22/%3E%3Cpath%20fill%3D%22%23CD5E8F%22%20d%3D%22M17.87%207.427l-.824%208.586%209.046-5.13%22/%3E%3Cpath%20fill%3D%22%2379C253%22%20d%3D%22M31.605%205.093l1.14%205.585%204.98-2.62%22/%3E%3Cpath%20fill%3D%22%237C494C%22%20d%3D%22M42.018%208.396h5.18l-6.63-1.418%22/%3E%3Cpath%20fill%3D%22%231181A8%22%20d%3D%22M40.567%206.977l7.446.71-.816.708%22/%3E%3Cpath%20fill%3D%22%237F6047%22%20d%3D%22M47.197%208.396l2.662.434-1.848-1.143%22/%3E%3Cpath%20fill%3D%22%23199BB5%22%20d%3D%22M17.87%207.427l6.27.26-6.806-4.375%22/%3E%3Cpath%20fill%3D%22%231693C4%22%20d%3D%22M4.137.527l.34%202.183%2012.857.6%22/%3E%3Cpath%20fill%3D%22%231976A6%22%20d%3D%22M17.87%207.427l-.536-4.115L7.02%205.225%22/%3E%3Cpath%20fill%3D%22%23BC67CE%22%20d%3D%22M4.476%202.71l2.542%202.515%2010.315-1.913%22/%3E%3C/svg%3E') no-repeat 50% 50% transparent",
  },
}))

interface Props {
  size?: number
  className?: string
}

function Logo({ size = 60, className }: Props): JSX.Element {
  const classes = useStyles({ size })
  return <span className={cx(classes.root, className)} />
}

export default Logo
