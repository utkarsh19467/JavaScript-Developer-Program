function handleSubmit() {
    let result = false; 
    let formText = getValueFromForm();

    let flag = Client.newsTextValidator(formText);
    if (flag) {
        result = true;
        let newsPromise = getNewsLabel(formText);
        newsPromise().then((data) => {
            document.getElementById('polarity').innerHTML = data.polarity;
            document.getElementById('polarity_confidence').innerHTML = data.polarity_confidence;
        });
    }else{
        result = false;
        alert("News Text Length Should Be More Than 10");
    }
    return result;
}

function getValueFromForm(){
    return document.getElementById('text').value;
}

function getNewsLabel(newsText) {
    const getData = async () => {
        const res = await fetch(`http://localhost:8081/api?input=${newsText}`);
        try {
            const data = await res.json();
            return data;
        } catch (error) {
            alert("Oops Something Went Wrong With The Server...");
        }
    }
    return getData;
}

export { handleSubmit, getValueFromForm}
