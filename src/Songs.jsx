const songs = [
    {title: "Flip", album: "Zaba", cover: "https://upload.wikimedia.org/wikipedia/en/3/32/Glass_animals_zaba.jpg"},
    {title: "Black Mambo", album: "Zaba", cover: "https://upload.wikimedia.org/wikipedia/en/3/32/Glass_animals_zaba.jpg"},
    {title: "Pools", album: "Zaba", cover: "https://upload.wikimedia.org/wikipedia/en/3/32/Glass_animals_zaba.jpg"},
    {title: "Gooey", album: "Zaba", cover: "https://upload.wikimedia.org/wikipedia/en/3/32/Glass_animals_zaba.jpg"},
    {title: "Walla Walla", album: "Zaba", cover: "https://upload.wikimedia.org/wikipedia/en/3/32/Glass_animals_zaba.jpg"},
    {title: "Intruxx", album: "Zaba", cover: "https://upload.wikimedia.org/wikipedia/en/3/32/Glass_animals_zaba.jpg"},
    {title: "Hazey", album: "Zaba", cover: "https://upload.wikimedia.org/wikipedia/en/3/32/Glass_animals_zaba.jpg"},
    {title: "Toes", album: "Zaba", cover: "https://upload.wikimedia.org/wikipedia/en/3/32/Glass_animals_zaba.jpg"},
    {title: "Wyrd", album: "Zaba", cover: "https://upload.wikimedia.org/wikipedia/en/3/32/Glass_animals_zaba.jpg"},
    {title: "Cocoa Hooves", album: "Zaba", cover: "https://upload.wikimedia.org/wikipedia/en/3/32/Glass_animals_zaba.jpg"},
    {title: "JDNT", album: "Zaba", cover: "https://upload.wikimedia.org/wikipedia/en/3/32/Glass_animals_zaba.jpg"},
    {title: "Life Itself", album: "How to Be a Human Being", cover: "https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg"},
    {title: "Youth", album: "How to Be a Human Being", cover: "https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg"},
    {title: "Season 2 Episode 3", album: "How to Be a Human Being", cover: "https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg"},
    {title: "Pork Soda", album: "How to Be a Human Being", cover: "https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg"},
    {title: "Mama's Gun", album: "How to Be a Human Being", cover: "https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg"},
    {title: "Cane Shuga", album: "How to Be a Human Being", cover: "https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg"},
    {title: "Premade Sandwiches", album: "How to Be a Human Being", cover: "https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg"},
    {title: "The Other Side of Paradise", album: "How to Be a Human Being", cover: "https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg"},
    {title: "Take a Slice", album: "How to Be a Human Being", cover: "https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg"},
    {title: "Poplar St", album: "How to Be a Human Being", cover: "https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg"},
    {title: "Agnes", album: "How to Be a Human Being", cover: "https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg"},
    {title: "Dreamland", album: "Dreamland", cover: "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png"},
    {title: "Tangerine", album: "Dreamland", cover: "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png"},
    {title: "Hot Sugar", album: "Dreamland", cover: "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png"},
    {title: "Space Ghost Coast to Coast", album: "Dreamland", cover: "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png"},
    {title: "Tokyo Drifting", album: "Dreamland", cover: "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png"},
    {title: "Melon and the Coconut", album: "Dreamland", cover: "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png"},
    {title: "Your Love (Déjà Vu)", album: "Dreamland", cover: "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png"},
    {title: "Waterfalls Coming Out Your Mouth", album: "Dreamland", cover: "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png"},
    {title: "It's All So Incredibly Loud", album: "Dreamland", cover: "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png"},
    {title: "Domestic Bliss", album: "Dreamland", cover: "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png"},
    {title: "Heat Waves", album: "Dreamland", cover: "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png"},
    {title: "Helium", album: "Dreamland", cover: "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png"},
]

function Songs() {
    let allSongs = []   
        
    songs.forEach(s => {
        let song =
        <div className="Song">
            <h3>Song title: {s.title}</h3>
            <h3>Album: {s.album}</h3>
            <img src={s.cover} alt={s.album} /><br />
            <button>LIKE SONG</button>
        </div>
        allSongs.push(song)
    })
        return allSongs
    }
    
    export default Songs;
    