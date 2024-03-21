const form = document.querySelector("form");
const input = document.querySelector("#input");
const meaning = document.querySelector("#meaning");
const WordHeading = document.querySelector("#word-heading");
const Definitions = document.querySelector("#inner-meaning");
const example = document.querySelector("#example");
const soundbtn = document.querySelector(".sound");
form.addEventListener("submit", WordMeaning);
const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

// if(input.value.match(/^[A-Za-z]+$/)){
    async function WordMeaning(e) {
        e.preventDefault();
        try {
            const WordData = await fetch(`${url}/${input.value}`);
        const wordObj = await WordData.json();
        WordHeading.innerHTML = (wordObj[0].word).toLocaleLowerCase()
        Definitions.innerHTML = (wordObj[0].meanings[0].definitions[0].definition || "error");
        example.classList.add("example");
        example.innerHTML = (wordObj[0].meanings[0].definitions[0].example || '');
    
        // sound Js
        soundbtn.innerHTML = (`<i class="fa-solid fa-volume-high"></i>`);
        let speech = new SpeechSynthesisUtterance();
        soundbtn.addEventListener("click", () => {
            // speech.text = document.querySelector("WordHeading").value;
            speech.text = WordHeading.innerHTML;  
            // speech.text =  Definitions.innerHTML;  
            window.speechSynthesis.speak(speech);
        });
        } catch (error) {
            WordHeading.innerHTML = "I don't know"
        }
    }
// }else{
//     prompt("hey")
// }


