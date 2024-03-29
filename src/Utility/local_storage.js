import toast from 'react-hot-toast'

export const readGetData = () => {
    let readData = [];
    const storageData = localStorage.getItem('readData')
    if(storageData) {
        readData  = JSON.parse(storageData)
    }
    return readData;
}

// save 
export const readSaveData  = (data) => {
    let allData = readGetData();
    console.log(allData)

    const isExist = allData.find(b => b.id == data.id)
    console.log(isExist)
    if(isExist) {
        return toast.error("Already added")
    }
    allData.push(data)
    localStorage.setItem('readData', JSON.stringify(allData))
    toast.success('Successfully add data!')
}

// delete :

// export const deleteData = (id) => {
//     let allData = getData()
//     const remaining = allData.filter(b => b.id != id)
//     localStorage.setItem('allData', JSON.stringify(remaining))
//     toast.success('Data remove!')
// }