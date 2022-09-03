let votes = document.getElementsByClassName('js-vote-count')

for(let i=1; i < votes.length; i++){
    let element = votes[i];
    let vote = parseInt(element.getAttribute('data-value'));

    if(vote < 2){
        element.parentNode.parentNode.parentNode.style.display = "none";
    }
    // document.getElementsByClassName()
}
// sole.log(votes);