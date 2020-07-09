// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

// Provided print function

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    const groupResult = document.createElement('div')
    groupResult.classList.add('resultBox')
    detailsElement.append(summaryElement)
    detailsElement.append(groupResult)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)

    if (kataNumber < 3) {
        let data = JSON.parse(stringifiedObject)
        //console.log(data)
        for (let i = 0; i < data.length; i += 1) {
            const result = document.createElement('div')
            result.classList.add('result')
            let answer = JSON.stringify(data[i])
            //console.log(answer)
            result.append(answer)
            groupResult.append(result)
        }
    } else {
        groupResult.append(stringifiedObject)
    }

    //
}

// Kata0 provided to test
const greenEyes1 = users.filter(user => user.eyeColor === "green")

printKata(0, greenEyes1)

// Kata1 - Filter the users array to show only the users with an isActive property of true.

const kata1 = users.filter(user => user.isActive)

printKata(1, kata1)

// Kata2 - Map over the users array to show only the email addresses of the users.

const kata2 = users.map(user => user.email)

printKata(2, kata2)

// Kata3 - Check whether at least one user in the users array has a company property of "OVATION".

const kata3 = users.some(user => user.company === 'OVIATION')

printKata(3, kata3)

// Kata4 - Find the first user in the array over the age of 38.

const kata4 = users.find(user => user.age > 38)

printKata(4, kata4)

// Kata5 - Find the first user in the array over the age of 38 who is active.

const kata5 = users.filter(user => user.isActive).find(user => user.age > 38)

printKata(5, kata5)

// Kata6 - Show the balance of every user in the array from the "ZENCO" company.

const kata6 = users.filter(user => user.company === 'ZENCO').map(user => user.balance)

printKata(6, kata6)

// Kata7 - Show the age of every user with the "fugiat" tag. .filter() method with .includes() and the .map() method

const kata7 = users.filter(user => user.tags.includes('fugiat')).map(user => user.age)

printKata(7, kata7)