import React from "react";

interface ICheckBoxItem {
    name: string,
    label: string,
    onChange(e: React.ChangeEvent<HTMLInputElement>): void,
    checked: boolean
}

const CheckBoxItem: React.FC<ICheckBoxItem> = ({ name, label, onChange, checked }) => {
    return (
        <div className="space-x-2">
            <input type="checkbox" className="cursor-pointer accent-[#57369E]" name={name} id={name} checked={checked} onChange={onChange} />
            <label className="cursor-pointer" htmlFor={name}>{label}</label>
        </div>
    )
};

export default CheckBoxItem;
