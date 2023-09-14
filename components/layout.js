import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
            <div className="navbar navbar-sticky">
                <div className="navbar-start">
                    <Link href="/" className="navbar-item">TODO List</Link>
                </div>
                <div className="navbar-end">
                    <Link href="/create" className="navbar-item">Crear Tarea </Link>
                </div>
            </div>

            {children}
        </>

    );
}