export default function Tarea({ children }) {
    return (
        <div className="card mb-10">
            <div className="card-body">
                <h2 className="card-header">{children}</h2>
            </div>
        </div>
    );

}