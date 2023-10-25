function requestBack() {
    fetch('http://localhost:3000/upload', {
        method: 'POST'
    });
}

async function upload() {
    const file = document.getElementById('fileToUpload').files[0];

    const promiseFile = new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file); 
        reader.onload = () => (resolve(reader.result));
    });

    const fileBase64 = await promiseFile;

    fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: JSON.stringify({file: fileBase64}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}