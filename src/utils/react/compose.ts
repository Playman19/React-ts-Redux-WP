export function compose<U>(...fns: Function[]) {
    return <E,>(initialValue: any):U =>
        fns.reduceRight((previousValue, fn) =>
        fn(previousValue),initialValue);
}

export function pipe<U>(...fns: Function[]) {
    return <E,>(initialValue:any):U =>
        fns.reduce((previousValue,fn) =>
        fn(previousValue),initialValue);
}