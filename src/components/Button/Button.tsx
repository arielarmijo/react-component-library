import React from 'react';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export default function Button({ label }: ButtonProps) {
  return <button className={styles.button}>{label} </button>
}
