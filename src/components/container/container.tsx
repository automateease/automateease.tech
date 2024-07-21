export function Container({className, children}:{ className?:string, children:React.ReactNode}) {
    return (
        <div className={`mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 ${className !== "" ? className : ""}`}>
            {children}
        </div>
    )
}