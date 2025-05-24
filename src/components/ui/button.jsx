export function Button({ className = '', children, ...props }) { return <button className={`rounded-xl px-4 py-2 shadow ${className}`} {...props}>{children}</button>; }
