
import { sendReservations } from "./dataAccess.js"
export const PartyForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
        <label class="label" for="clownPreference">Clown Preference</label>
        <input type="text" name="clownPreference" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationAddress">Party Address</label>
            <input type="text" name="reservationAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationLength">Reservation Length</label>
            <input type="number" name="reservationLength" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationDate">Date needed</label>
            <input type="date" name="reservationDate" class="input" />
        </div>
        <button class="button" id="submitReservation">Submit Request</button>`

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userClownPreference = document.querySelector("input[name='clownPreference']").value
        const userAddress = document.querySelector("input[name='reservationAddress']").value
        const userReservationLength = document.querySelector("input[name='reservationLength']").value
        const userDate = document.querySelector("input[name='reservationDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            clownPreference: userClownPreference,
            address: userAddress,
            reservationLength: userReservationLength,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendReservations(dataToSendToAPI)
    }
})
