const applicationState = {
    reservations: []
}

const API = "http://localhost:8088"

// RESERVATIONS

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (serviceReservations) => {
                // Store the external state in application state
                applicationState.reservations = serviceReservations
            }
        )
    
}

export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation})) 
}

export const sendReservations = (serviceReservations) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(serviceReservations)
    }
    const mainContainer = document.querySelector("#container")

    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
     )
 }

 export const deleteReservations = (id) => {
    const mainContainer = document.querySelector("#container")
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

// // PARTY INFORMATION
// export const fetchPartyInformation = () => {
//     return fetch(`${API}/partyInformation`)
//     .then(response => response.json())
//     .then(
//         (partyInformation) => {
//             // Store the external state in application state
//             applicationState.partyInformation = partyInformation
//         }
//     )

// }

// export const getPartyInformation = () => {
//     return applicationState.partyInformation.map(info => ({...info}))
// }

// CLOWNS

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
            }
        )
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}
// COMPLETIONS

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
    .then(response => response.json())
    .then(
        (completions) => {
            // Store the external state in application state
            applicationState.completions = completions
        }
    )

}

export const saveCompletion = () => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    const mainContainer = document.querySelector("#container")

    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
     )
 }
// -----*