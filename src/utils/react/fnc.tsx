import React from "react";


function NotStandartLink(props: any) {
    return(
        <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
    )
}

function preventDefault<T extends (e: any) => void>(fn:T) {
    return <E extends React.SyntheticEvent<any>>(e:E) => {
        e.preventDefault();
        fn(e);
    } 
}

 function stopPropagation<T extends (e: any) => void>(fn:T) {
     return <E extends React.SyntheticEvent<any>>(e:E) => {
         e.stopPropagation();
         fn(e);
     }
 }

interface InputProps {
    onChange: (value:string)=> void;
    value: string;
}

function Input({ value, onChange }: InputProps) {
    return(
        <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
    )
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

function pickFromSyntheticEvent<T extends HTMLElement>() {
    return <K extends keyof T>(key:K) =>
        <E extends ((t: T[K]) => void)>(fn:E) =>
            (e:React.SyntheticEvent<T>) =>
                fn(e.currentTarget[key]);
}
