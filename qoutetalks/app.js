// local reviews data
const reviews = [{
        id: 1,
        name: "Swami Vivekananda",
        job: "(1863 - 1902)",
        img: "https://miro.medium.com/max/688/1*qf1zwF5jKkyj1W6xn4ueZA.jpeg",
        text: "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
    },
    {
        id: 2,
        name: "Dr. APJ Abdul Kalam",
        job: "(1931 - 2015)",
        img: "https://i.pinimg.com/originals/d5/43/b8/d543b8c267e600039bb606bb52f752a1.jpg",
        text: "A dream is not that which you see while sleeping, it is something that does not let you sleep.",
    },
    {
        id: 3,
        name: "Rabindranath Tagore",
        job: "(1861 - 1941)",
        img: "https://www.nobelprize.org/images/tagore-12892-content-portrait-mobile-tiny.jpg",
        text: "Faith is the bird that feels the light when the dawn is still dark.",
    },
    {
        id: 4,
        name: "Albert Einstein",
        job: "(1879 - 1955)",
        img: "https://images.yourstory.com/cs/7/4c455a90a21411e98b07315772315642/AlbertEinsteinPlaceholderyswFotor-1583923792506.png",
        text: "Try not to become a man of success. Rather become a man of value.",
    },
    {
        id: 5,
        name: "Abraham Lincoln",
        job: "(1809 - 1865)",
        img: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg1ODkyOTcwMjA3/abraham_lincoln_hero_chair.jpg",
        text: "Nearly all men can withstand adversity, but if you want to test a man's character, give him power.",
    },
    {
        id: 6,
        name: "William Shakespeare",
        job: "(1564 - 1616)",
        img: "https://cdn.britannica.com/37/75437-004-EFD403D1/detail-William-Shakespeare-portrait-oil-painting-John-1610.jpg",
        text: "All that glitters is not gold.",
    },
    {
        id: 7,
        name: "Mother Teresa",
        job: "(1910 - 1997)",
        img: "https://assets.mangalorean.com/2018/09/saint-mother-teresa-refugees.jpg",
        text: "If you judge people, you have no time to love them.",
    },
    {
        id: 8,
        name: "Bruce Lee",
        job: "(1940 - 1973)",
        img: "https://images.squarespace-cdn.com/content/v1/574dd66227d4bdb54a2f65e3/1530317902522-7P495NRCHAHJ1NVLG2O6/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/BL_Podcast_Artwork_ep81_v2.jpg",
        text: "Adapt what is useful, reject what is useless, and add what is specifically your own.",
    },
    {
        id: 9,
        name: "Steve Jobs",
        job: "(1955 - 2011)",
        img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
        text: "Innovation distinguishes between a leader and a follower.",
    },
    {
        id: 10,
        name: "Benjamin Franklin",
        job: "(1705 - 1790)",
        img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NTIxNzUwNjAxODY4NTEx/benjamin-franklin_editedjpg.jpg",
        text: "Love your Enemies, for they tell you your Faults.",
    },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function() {
    console.log("hello");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});