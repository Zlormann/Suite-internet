document.addEventListener('DOMContentLoaded', function() {
    const listenNowButton = document.getElementById('listen-now');
    const readStoriesButton = document.getElementById('read-stories');
    
    listenNowButton.addEventListener('click', function() {
        window.open('https://soundcloud.com/zlormack/sets/nostalgiques', '_blank');
    });
    
    readStoriesButton.addEventListener('click', function() {
        window.open('https://www.wattpad.com/user/Zlormack', '_blank');
    });

    // Fetch and display dynamic content (example)
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('timeline').innerHTML = createTimeline(data.timeline);
            document.getElementById('members').innerHTML = createMembers(data.members);
            document.getElementById('founders').innerHTML = createFounders(data.founders);
            // Other dynamic content here
        });

    function createTimeline(timeline) {
        return timeline.map(event => `<div>${event.date} - ${event.description}</div>`).join('');
    }

    function createMembers(members) {
        return members.map(member => `<div><h3>${member.name}</h3><p>${member.bio}</p></div>`).join('');
    }

    function createFounders(founders) {
        return founders.map(founder => `<div><h3>${founder.name}</h3><p>${founder.message}</p></div>`).join('');
    }
});
