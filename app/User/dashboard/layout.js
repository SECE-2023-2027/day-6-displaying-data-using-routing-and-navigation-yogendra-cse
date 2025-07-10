
export default function DashboardLayout({children}){
    return (
        <div>
            <div>Dashboard navigation bar</div>
            <main>{children}</main>
        </div>
    )
}