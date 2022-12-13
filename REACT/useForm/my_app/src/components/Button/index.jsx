import React from 'react';
import s from './index.module.css'

export default function Button({ children, color, ...props }) {
    
    
    return <button className={[s.form_btn, s[color]].join(' ')} {...props}>
        {children}
    </button>;
}
