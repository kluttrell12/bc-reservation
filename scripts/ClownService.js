import { Reservations } from "./reservations.js"
import { PartyForm } from "./PartyForm.js"

export const ClownService = () => {
    return `
        <h1>Button's Clown Services</h1>
        <section class="partyForm">
            ${PartyForm()}
        </section>

        <section class="serviceReservations">
            <h2>Clown Reservations</h2>
            ${Reservations()}
        </section>
    `
}