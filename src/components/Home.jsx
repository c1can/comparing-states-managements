import { Link } from "wouter";
import { ReducerComponent } from "./Reducer/Reducer";

export function Home() {
    return (
        <main>
            <header style={{ display: 'flex', gap: '20px' }}>
                <Link href="/redux">Redux Toolkit</Link>
                <Link href="/zustand">Zustand</Link>
            </header>

            <ReducerComponent />
        </main>
    )
}