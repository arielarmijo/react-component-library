import React from 'react';
import type { ButtonProps } from './Button.types';

export default function Button({ label }: ButtonProps) {
  return <button>{label} </button>
}
