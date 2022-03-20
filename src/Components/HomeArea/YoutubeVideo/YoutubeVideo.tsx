import "./YoutubeVideo.css";

// Interpolation

function YoutubeVideo(): JSX.Element {

    return (
        <div className="rtl">
            <h1>סרטוני המוצרים...</h1>
            <div className="space">
            <iframe width="300" height="200" src="https://www.youtube.com/embed/-ETzkBw87EU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>

            <div className="space">
            <iframe width="300" height="200" src="https://www.youtube.com/embed/-ETzkBw87EU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
            
        </div>
    );
}

export default YoutubeVideo;
