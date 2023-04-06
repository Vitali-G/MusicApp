function Song({ s }) {
	return (
        <div className="song">
            <h3>Song title: {s.title}</h3>
            <h3>Album: {s.album}</h3>
            <img className={`album-image ${s.liked ? "rotate-image" : ""}`} src={s.cover} alt={s.album} /><br />
            <button onClick={() => likeSong(s)}>{s.liked ? "UNLIKE" : "LIKE SONG"}</button>
        </div>
	)
	}

export default Song;
