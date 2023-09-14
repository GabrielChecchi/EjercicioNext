export default function Create() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form method="POST">
                <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-semibold">Crear Tarea</h1>
                    </div>
                    <div className="form-group">
                        <div className="form-field">
                            <label className="form-label">Nombre de la tarea</label>
                            <input placeholder="Type here" type="email" className="input max-w-full" />
                        </div>

                        <div className="form-field pt-5">
                            <div className="form-control justify-between">
                                <input type="submit" value="Crear Tarea" className="btn btn-primary w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </main>
    )
}