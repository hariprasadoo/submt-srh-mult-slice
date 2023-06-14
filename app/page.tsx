import CarForm from "./components/CarForm"
import CarList from "./components/CarList"
import CarSearch from "./components/CarSearch"
import CarValue from "./components/CarValue"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <CarForm/>
    <CarList/>
    <CarSearch/>
    <CarValue/>
    </main>
  )
}