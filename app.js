var actionButtons = document.querySelector('[data-testid="tweet-actions"]');
var inputContainer = document.getElementById('composeInput')
var tweetButton = document.querySelector('.post-tweet')
var tweetImage = document.querySelector('.input-button')
var newTweet = document.querySelector('.post-tweet')
var addTweet = document.querySelector('.tweets')
var messageCount = document.querySelector('.message-count')

actionButtons.style.display = 'none';

inputContainer.addEventListener('focus', function(event){
    inputContainer.classList.add('expanded')
    actionButtons.style.display = 'flex';
    tweetImage.style.display = 'none'
})

inputContainer.addEventListener('blur', function(){
    var inputLength = inputContainer.value.length

    inputContainer.classList.remove('danger')
    actionButtons.style.display = 'none';
    tweetImage.style.display = 'flex'

    if(inputLength > 0){
        inputContainer.classList.add('expanded')
        actionButtons.style.display = 'flex';
    }
    else{
        inputContainer.classList.remove('expanded')
    }
})

inputContainer.addEventListener('keyup', function(){
    var inputLength = inputContainer.value.length
    var maxlength = inputContainer.maxLength

    if(inputLength > 0) {
        tweetButton.disabled = false;
        let newMessageCount = maxlength - inputLength;
        messageCount.innerHTML = newMessageCount
        if(newMessageCount <= 10){
          messageCount.classList.add('danger')
        }
        else{
          messageCount.classList.remove('danger')
        }
    }
    else{
        messageCount.innerHTML = 280
        tweetButton.disabled = true;
        messageCount.classList.remove('danger')
    }
})

newTweet.addEventListener('click', function(){
    var tweet = document.createElement('div');
    tweet.innerHTML += `<div class="tweet">
    <div class="profile">
      <img class="img-tweet-profile" src="https://ca.slack-edge.com/T0QG5E3SL-UJP2EL340-462023777051-48" />
    </div>
    <div class="message">
      <div class="posted-by">
        <span class="display-name">Bryan</span
        ><span class="handle">@jeffguy</span>
      </div>
      <div class="content">
        <p>${inputContainer.value}</p>
      </div>
      <div class="tweet-actions">
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-envelope"></i>
      </div>
    </div>
  </div>`

    addTweet.prepend(tweet)

    messageCount.innerHTML = 0
    actionButtons.style.display = 'none';
    inputContainer.style.height = '34px';
    inputContainer.value = '';
    
})