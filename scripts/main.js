import { fetchReservations, fetchCompletions, fetchClowns } from "./dataAccess.js"
import { ClownService } from "./ClownService.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations()
    .then(() => fetchCompletions())
    .then(() => fetchClowns())
    .then(
        () => {
            mainContainer.innerHTML = ClownService()
        }
    )
}

render()