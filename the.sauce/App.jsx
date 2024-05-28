import "./styles/index.css";
import "./styles/audioControl.css";
import { useState } from "react";
import AdditionSettings from "./components/additionalInfo";
import PauseImage from "./components/pauseImage";
import Loading from "./components/loadingImage";
import RadioStations from "./components/radioStations";
import github from "./images/github.png";
import coffee from "./images/coffee.png";
import play from "./images/playBtn.png";
import AudioControls from "./components/audioControl";
import pauseImg from "./images/pause.png";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { setActiveStation } from "./hooks/setActiveStation";

function App() {
	const [BtnClass, setBtnClass] = useState("PlayPause"); //pause play change
	const [BtnClass2, setBtnClass2] = useState("playBtn");
	const [playPauseImg, setPlayPause] = useState(play);

	const [livestream, playLiveStream] = useState(false);
	const [pauseScreen, setPauseScreen] = useState("pauseScreen");
	const [currentLivestream, setLivestream] = useState(
		"https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl"
	);

	const [activeStation, setActiveStationState] = useState(false);

	const [stationName, setStationName] = useState("LofiGirl");

	const [youtubeChannal, setYoutubeChannal] = useState("");

	const handlePausePlaySwitch = (e) => {
		let className = e.target.className;

		if (className === "PlayPause" || className === "playBtn") {
			setPlayPause(pauseImg);
 			setBtnClass("PlayPause2");
			setBtnClass2("playBtn2");
			start();
		} else if (className === "PlayPause2" || className === "playBtn2") {
      			setPlayPause(play);
      			setBtnClass("PlayPause");
      			setBtnClass2("playBtn");
      			pause();
    			}
  };

  const start = () => {
    playLiveStream(false);
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
  };

  const pause = () => {
    setPauseScreen("pauseScreen");
    playLiveStream(false);
  };
  const [video, setVideo] = useState("https://www.youtube.com/watch?v=IkmLXvBfVv0");

  // <------------- Music Safe -------------->
  const DeepHouseSafe = () => {
    setVideo("https://www.youtube.com/watch?v=IkmLXvBfVv0");
    setStationName("DeepHouse");
    setYoutubeChannal("https://www.youtube.com/@TheGoodLiferadio");
    setLivestream("https://www.youtube.com/watch?v=IkmLXvBfVv0");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
    setActiveStationState(true);
  };

  const TomorrowLand One World Radio = () => {
    setVideo("https://www.youtube.com/watch?v=wBgSH-CGPzg");
    setStationName("TomorrowLand: One World");
    setYoutubeChannal("https://www.youtube.com/@tomorrowland");
    setLivestream("https://www.youtube.com/watch?v=wBgSH-CGPzg");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
    setActiveStation(e, stationName);
    setActiveStationState(false);
  };

  const Soothing Piano Radio = () => {
    setVideo("https://www.youtube.com/watch?v=2OM7adQl-YQ");
    setStationName("Soothing Piano");
    setYoutubeChannal("https://www.youtube.com/@SoothingRelaxation");
    setLivestream("https://www.youtube.com/watch?v=2OM7adQl-YQ");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const LoFi Hip Hop Radio = () => {
    setVideo("https://www.youtube.com/watch?v=jfKfPfyJRdk");
    setStationName("LoFi Hip Hop");
    setYoutubeChannal("https://www.youtube.com/@LofiGirl");
    setLivestream("https://www.youtube.com/watch?v=jfKfPfyJRdk");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const ChillHop Radio = () => {
    setVideo("https://www.youtube.com/watch?v=5yx6BWlEVcY");
    setStationName("Chill Hop");
    setYoutubeChannal("https://www.youtube.com/@ChillhopMusic");
    setLivestream("https://www.youtube.com/watch?v=5yx6BWlEVcY");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const Old School Mix = () => {
    setVideo("https://www.youtube.com/watch?v=gpsqz2kseiY");
    setStationName("Old School");
    setYoutubeChannal("https://www.youtube.com/@bestofmixlive");
    setLivestream("https://www.youtube.com/watch?v=gpsqz2kseiY");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const RNB & Chill Radio = () => {
    setVideo("https://www.youtube.com/watch?v=86XzuPmMriw");
    setStationName("RnB & Chill");
    setYoutubeChannal("https://www.youtube.com/@mxtthew");
    setLivestream("https://www.youtube.com/watch?v=86XzuPmMriw");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const Hip Hop Mix Radio = () => {
    setVideo("https://www.youtube.com/watch?v=urikT3Act8w");
    setStationName("Hip Hop Mix");
    setYoutubeChannal("https://www.youtube.com/@bestofmixlive");
    setLivestream("https://www.youtube.com/watch?v=urikT3Act8w");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const Synthwave radio = () => {
    setVideo("https://www.youtube.com/watch?v=4xDzrJKXOOY&list=PL6NdkXsPL07Il2hEQGcLI4dg_LTg7xA2L&index=2");
    setStationName("Synthwave");
    setYoutubeChannal("https://www.youtube.com/@LofiGirl");
    setLivestream("https://www.youtube.com/watch?v=4xDzrJKXOOY&list=PL6NdkXsPL07Il2hEQGcLI4dg_LTg7xA2L&index=2");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const Dark Ambient Radio = () => {
    setVideo("https://www.youtube.com/watch?v=S_MOd40zlYU&list=PL6NdkXsPL07Il2hEQGcLI4dg_LTg7xA2L&index=4");
    setStationName("Dark Ambient");
    setYoutubeChannal("https://www.youtube.com/@LofiGirl");
    setLivestream("https://www.youtube.com/watch?v=S_MOd40zlYU&list=PL6NdkXsPL07Il2hEQGcLI4dg_LTg7xA2L&index=4");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const animeVibe = (e) => {
    setVideo("//www.youtube.com/embed/5B7Rsw0L2r8?autoplay=1&mute=1&start=0");
    setStationName("AnimeVibe");
    setYoutubeChannal("https://www.youtube.com/c/AnimeVibe");
    setLivestream("https://www.youtube.com/watch?v=JWlKA9wmO64");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const collegeMusic = (e) => {
    setVideo("//www.youtube.com/embed/epaP2LCCuVE?autoplay=1&mute=1&start=0");
    setStationName("College Music");
    setYoutubeChannal("https://www.youtube.com/@CollegeMusic");
    setLivestream("https://www.youtube.com/watch?v=epaP2LCCuVE");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const tokyoTones = () => {
    setVideo("//www.youtube.com/embed/5wRWniH7rt8?autoplay=1&mute=1&start=50");
    setStationName("TOKYO TONES");
    setYoutubeChannal("https://www.youtube.com/@TokyoTones");
    setLivestream(
      "https://www.youtube.com/watch?v=Lcdi9O2XB4E&ab_channel=TOKYOTONES"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };
  return (
    <div className="interfaceContainer">
      <div className="radioContainer">
        <div className="logo">StudyBeats</div>
        <div className="radioStationsContainer">
          <RadioStations
            Ambient={AmbientRenders}
            Anime={animeVibe}
            Astral={astralThrob}
            College={collegeMusic}
            ChillHop={ChillHiphop}
            Cow={chilledCow}
            Ivy={IvyRecords}
            Boy={LofiBoy}
            Lofi={LofiGirlVideo}
            Chill={ChillAF}
            Jazz={theJazzHopCafe}
            Nice={NiceGuys}
            Tokyo={tokyoTones}
            StationName={stationName}
          />
        </div>
        <div className="socialsContainer2">
          <div className="socials">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                window.open("https://github.com/adamPatrick12");
              }}
              className="link"
            >
              <img className="githubLogo" src={github} alt="" />
              Github
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                window.open("https://www.buymeacoffee.com/adampatricX");
              }}
              className="link"
            >
              <img className="githubLogo" src={coffee} alt="" />
              Buy Me a Coffee
            </motion.div>
          </div>
        </div>
      </div>
      <div className="audioControlContainer">
        <AudioControls
          plauPause={handlePausePlaySwitch}
          buttonClass={BtnClass}
          playPauseImage={playPauseImg}
          buttonClass2={BtnClass2}
          LiveStreamAudio={currentLivestream}
          LiveStreamPlayPause={livestream}
        />
      </div>
      <div className={pauseScreen}>
        <PauseImage />
        <p style={{ marginTop: "0rem" }}>Music Paused</p>
      </div>
      <AdditionSettings youtube={youtubeChannal} radio={stationName} />
      <div class="videoContainer">
        <ReactPlayer
          className="vid"
          width="140%"
          height="140%"
          loop="true"
          playing={livestream}
          volume="mute"
          url={video}
        />
      </div>
    </div>
  );
}

export default App;
