const pageAnimation = () => {
    document.querySelector('body').style.opacity = 1
}

let flag = false;

const onSubmit = () =>{
    let gender
    let data = []
    let skills=[]

    const name = document.getElementById('inputName').value 
    const email = document.getElementById('inputEmail').value 
    const website = document.getElementById('inputWebsite').value
    const image = document.getElementById('inputImage').value 
    const gen = document.getElementsByName('gender')
    const ele = document.getElementsByName('skills')

    // here gender is come either male or female whose is checked then that one is stored in the gender variable
    for(let i=0;i<gen.length ; i++){
        if(gen[i].checked){
            gender = gen[i].value
        }
    }

    for(let i = 0 ; i< ele.length ; i++){
        if(ele[i].checked){
            skills.push(ele[i].value)
        }
    }


    data.push({
        name:name,
        email:email,
        website:website,
        image: image,
        gender:gender,
        // append the new element to the end of the array and return new length of an array
        skills:[...skills]
    })

    if(!flag){
        showTable()
        flag = true;
    }
    addRow(data)
}

const showTable = () => {
    const temp = document.querySelector('template')
    // Use JavaScript to get the content from a template, and add it to the page
    const dataTable = temp.content.cloneNode(true)
    const enrolledSection = document.querySelector('.enrolled-section')
    const old_child = enrolledSection.children[0]
    enrolledSection.replaceChild(dataTable, old_child)
}

const addRow = (data) => {
    console.log(data)
    let table = document.getElementById('table-data')
    let rowCount = table.rows.length
    let row = table.insertRow(rowCount)

    // here in a single row two cells are added which are row.insertCell[0] and row.insertCell[1] where in
    // first all details are added and in second image is added
    row.insertCell(0).innerHTML = `<td>
       <span  class="font-weight-bold">${data[0].name}</span><br/>
       <span>${data[0].gender}</span></br>
       <span>${data[0].email}</span></br>
       <a href="http://${data[0].website}"
       target="_blank"
       rel="noopener noreferrer">
       <u>${data[0].website}</u></a></br>
       ${data[0].skills.map((skill) => {
        return `<span>${skill}</span>`
       })}

    </td>`

    row.insertCell(1).innerHTML=`<td style="width:100px;height:1120px">
    <img src="${data[0].image}" onerror="this.src='assets/fallback-image.jpg'"
    alt="image"/>
    </td>`
}


  