function makeContentNonsense(word = "NONSENSE"){
    let allNodes = document.querySelectorAll('.nonsense');

    for(let node of allNodes){
        node.textContent = word;
    }
}

module.exports = makeContentNonsense;
