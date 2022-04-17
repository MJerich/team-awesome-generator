// create the projects section
const generateCard = (name, job, id, email, extra) => {
    return `
    <div class="card border-success mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header bg-primary">
            <h3 class="p-2">${name}</h3>
            <h4 class="p-2">${job}</h4>
        </div>
        <div class="card-body text-success">
            <p>ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>${extra}</p>
        </div>
    </div>
    `;
};

const employeeLoop = (dataStuff) => {
    let finalString = ``
    for (let i = 0; i < dataStuff.length; i++) {
        const textData = generateCard(dataStuff[i].name, dataStuff[i].job, dataStuff[i].id, dataStuff[i].email, dataStuff[i].extra)
        finalString = finalString + textData;
    };
    return finalString;
};

// export function to generate entire page
module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Awesome!</title>
    </head>
    <body>
        <Header>
            <h1 class="bg-danger text-center text-white pt-5 pb-5">My Team</h1>
        </Header>
        <section class="container">
            <div id="cards" class="row text-center justify-content-center">
            ${employeeLoop(templateData)}
            </div>
        </section>
    </body>
    </html>
    `;
};