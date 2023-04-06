import Song from "../Song";

export default function SongList({ songs }) {
    
    return (
        <ul>
            {songs.map(s => {
                <li>
                    <Song s={s} />
                </li>
            }
            )
            }
        </ul>
    )
}
