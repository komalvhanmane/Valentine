function findMatch() {
    let loading = document.getElementById("loading");
    let result = document.getElementById("result");
    let matchImg = document.getElementById("match-img");

    loading.style.display = "block";
    result.innerHTML = "";

    setTimeout(() => {
        loading.style.display = "none";
        let messages = [
            "Oops! You matched with yourself. Self-love is important, right? 💖",
            "Your soulmate is... still in beta testing. Try again in 2077. 🤖",
            "Error 404: Love Not Found. Please update your charm package. 🚀"
        ];
        let images = [
            "alone fine.jpg",
            "hoping match.jpg",
            "innocent sad.jpg"
        ];

        var count = Math.floor(Math.random() * messages.length);
        result.innerHTML = `<h2>💔 ${messages[count]}</h2>`;
        matchImg.src = images[count];
    }, 2000);
}

function showExcuse() {
    const excuses = [
        "Sleep Day 😴: My bed understands me better than anyone else.",
        "Eat Day 🍕: Food never disappoints me—unlike people.",
        "Workout Day 🏋️‍♂️: My muscles are still loading… please wait.",
        "Lazy Day 🛋️: Productivity? Sorry, I’m in energy-saving mode.",
        "Music Day 🎵: Headphones on, world off—drama blocked successfully.",
        "Nap Day 🌙: Alarm clocks are just betrayal devices in disguise."
    ];

    var count = Math.floor(Math.random() * excuses.length);
    let excuseImg = document.getElementById("excuse-img");
    let excuseTexts = excuses[count];

    const images = [
        "sleeping.jpg",
        "eat icecream.jpg",
        "depress1.jpg",
        "sleeping (2).jpg",
        "deep thinking.jpg",
        "sitting sleeping.jpg"
    ]
    document.getElementById("excuse").innerHTML = excuseTexts;
    excuseImg.src = images[count];
}

function therapyMode() {
    const advice = [
        "You don’t need a Valentine when you have food. 🍕",
        "Being single isn’t lonely. It’s ‘relationship recharge mode’! 🔋",
        "No relationship? No problem. More WiFi bandwidth for you! 📶",
        "Don’t cry because it’s over. Cry because you have to pay for your own pizza. 🍕😂"
    ];

    const images = [
        "healing.jpg",
        "sad.jpg",
        "savage.jpg",
        "disappointed.jpg"
    ]

    // Get the therapy text element
    let therapyText = document.getElementById("therap");
    var count = Math.floor(Math.random() * advice.length)

    // Change the text every time you click
    therapyText.innerHTML = advice[count];

    let excuseImg = document.getElementById("imageee");

    excuseImg.src = images[count];

    // Ensure the button stays visible (if needed)
    // document.getElementById("therapy-btn").style.display = "block";
}


function breakMode() {

    // Play video
    let video = document.getElementById("break-video");
    video.play();

    // Play dramatic audio
    let audio = document.getElementById("break-audio");
    audio.play();

    alert("💔 Relationship Error: No partner found!");
}

function exitBreakMode() {
    // Hide break mode
    document.getElementById("break-mode").style.display = "none";

    // Show main content
    document.getElementById("main-content").style.display = "block";

    // Pause video
    let video = document.getElementById("break-video");
    video.pause();
    video.currentTime = 0;

    // Pause audio
    let audio = document.getElementById("break-audio");
    audio.pause();
    audio.currentTime = 0;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
