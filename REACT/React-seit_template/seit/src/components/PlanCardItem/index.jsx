import React from 'react'
import s from './index.module.css';

export default function PlanCardItem({ title, active }) {
    
    const item_classes = [s.card_item, active ? '' : s.item_false].join(' ')

  return <div className={item_classes}>{title}</div>;
}
