import { getResponse } from "./LLM.js";

getResponse("What is the best schoool?")
.then(result => {
    console.log(result);
})
.catch(error => {
    console.error(error);
});


