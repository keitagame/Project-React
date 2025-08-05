import React from 'react';

export interface CheckboxLabelProps {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
  accentColor?: string;
}

export const Checkbox: React.FC<CheckboxLabelProps> = ({
  checked,
  label,
  onChange,
  accentColor = '#00ffdd'
}) => (
  <label style={{ display: 'flex', alignItems: 'center' }}>
    <input
      type="checkbox"
      checked={checked}
    
      onChange={e => onChange(e.target.checked)}
      style={{ marginRight: 8,   accentColor: accentColor}}
    />
    <span style={{
      textDecoration: checked ? 'line-through' : 'none',
      color: checked ? '#00ffdd' : '#ffffffff'
    }}>
      {label}
    </span>
  </label>
);
export default Checkbox