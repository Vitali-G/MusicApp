export default function Band() {

const bandName = "Glass Animals"
const genre = "Electronic rock"
const intro = "Glass Animals is a British indie rock band formed in Oxford in 2010. The band consists of four members: Dave Bayley (vocals, guitar), Drew MacFarlane (guitar, keys), Edmund Irwin-Singer (bass), and Joe Seaward (drums). Their unique sound combines elements of indie rock, hip hop, and electronica, with a heavy focus on intricate rhythms and catchy melodies. Glass Animals have released three studio albums to date, each receiving critical acclaim and commercial success. With their mesmerizing live performances and captivating music videos, the band has amassed a dedicated fan base around the world."
  
    return (
    <div className="Band">
        <h1>{bandName}</h1>
        <h3>{genre}</h3>
        <p>{intro}</p>
    </div>
  )
}
