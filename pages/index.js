import Tarea from "@/components/Tarea";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const tareas = await res.json();

  return { props: { tareas } }
}

export default function Home({ tareas }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        tareas.map((tarea) => (
          <Tarea key={tarea.id}>{tarea.title}</Tarea>
        ))
      }
    </main>
  )
}
