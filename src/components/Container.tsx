interface ContainerProps {
    children: React.ReactNode
}

export const Container = ({children}: ContainerProps) => {
    return (
        <div className="px-4 md:px-6 lg:px-0 md:max-w-[1024px] mx-auto flex flex-col py-6 gap-6">
            {children}
        </div>
    )
}