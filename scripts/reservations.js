import { getReservations, saveCompletion, deleteReservations, getClowns } from "./dataAccess.js"

export const Reservations = () => {
    const reservations = getReservations()

    let html = `
        <ul>
            ${
                reservations.map(convertReservations).join("")
            }
        </ul>
    `

    return html
}

const convertReservations = (reservation) => {
    const clowns = getClowns()
    let html = ""
    html += `<li>${reservation.clown}
                 <button class="request__delete"
                         id="reservation--${reservation.id}">
                        Delete
                 </button>
                 <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${
        clowns.map(
            clown => {
                return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")
    }
</select>
            </li>`
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservations(parseInt(reservationId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [clownId, reservationId] = event.target.value.split("--") 
            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { 
                reservationId: reservationId,
                clownId: clownId,
                date_created: date
            }
            saveCompletion(completion)
            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)