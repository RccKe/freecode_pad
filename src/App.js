
const App = () => {

  const playAudio = (audioId) => {
    const newAudio = document.getElementById(audioId)
    if (newAudio) {
      newAudio.currentTime = 0;
      newAudio.play();
      setDisplay(audioId);
    }
  }

  return (
    <div id="drum-machine">
      <div id="display">
        <button className="drum-pad" id="Q" onClick={() => playAudio("audioQ")}>Q
          <audio src="https://taira-komori.jpn.org/sound_os2/playing01/pianoC.mp3" className="clip" id="Q"></audio>
        </button>
        <button className="drum-pad" id="W" onClick={() => playAudio("audioW")}>W
          <audio src="https://taira-komori.jpn.org/sound_os2/playing01/pianoD.mp3" className="clip" id="W"></audio>
        </button>
        <button className="drum-pad" id="E" onClick={() => playAudio("audioE")}>E
          <audio src="https://taira-komori.jpn.org/sound_os2/playing01/pianoE.mp3" className="clip" id="E"></audio>
        </button>
        <button className="drum-pad" id="A" onClick={() => playAudio("audioA")}>A
          <audio src="https://taira-komori.jpn.org/sound_os2/playing01/pianoF.mp3" className="clip" id="A"></audio>
        </button>
        <button className="drum-pad" id="S" onClick={() => playAudio("audioS")}>S
          <audio src="https://taira-komori.jpn.org/sound_os2/playing01/pianoG.mp3" className="clip" id="S"></audio>
        </button>
        <button className="drum-pad" id="D" onClick={() => playAudio("audioD")}>D
          <audio src="https://taira-komori.jpn.org/sound_os2/playing01/pianoA.mp3" className="clip" id="D"></audio>
        </button>
        <button className="drum-pad" id="Z" onClick={() => playAudio("audioZ")}>Z
          <audio src="https://taira-komori.jpn.org/sound_os2/playing01/pianoB.mp3" className="clip" id="Z"></audio>
        </button>
        <button className="drum-pad" id="X" onClick={() => playAudio("audioX")}>X
          <audio src="https://taira-komori.jpn.org/sound_os2/playing01/pianoC2.mp3" className="clip" id="X"></audio>
        </button>
        <button className="drum-pad" id="C" onClick={() => playAudio("audioC")}>C
          <audio src="https://taira-komori.jpn.org/sound_os2/playing01/TTL_Star.mp3" className="clip" id="C"></audio>
        </button>
      </div>
    </div>
  )
}

export default App;

// 这是一个自由代码营（FreeCodeCamp）的项目要求，要求构建一个类似于 https://drum-machine.freecodecamp.rocks/ 的鼓机应用。以下是用户故事（User Stories）的总结：
// 外部容器：必须有一个外部容器，其ID为 "drum-machine"，包含所有其他元素。
// 显示元素：在 "drum-machine" 中，必须有一个具有ID "display" 的元素。
// 可点击的鼓垫：在 "drum-machine" 中，必须有9个可点击的鼓垫元素，每个都具有类名 "drum-pad"，一个描述音频剪辑的唯一ID，以及与键盘上的某个键对应的内部文本（Q、W、E、A、S、D、Z、X、C）。这些鼓垫必须按照给定的顺序排列。
// 音频元素：在每个 ".drum-pad" 内部，必须有一个具有以下属性的HTML5音频元素：src 属性指向音频剪辑的路径，类名为 "clip"，以及一个与其父级 ".drum-pad" 的内部文本相对应的ID（例如，id="Q"，id="W"，id="E"等）。
// 点击触发：当点击 ".drum-pad" 元素时，应触发其子音频元素中包含的音频剪辑。
// 键盘触发：按下与每个 ".drum-pad" 相关的触发键时，应触发其子音频元素中包含的音频剪辑（例如，按下Q键应触发包含字符串Q的鼓垫，按下W键应触发包含字符串W的鼓垫，依此类推）。
// 显示信息：当触发 ".drum-pad" 时，应在 "#display" 元素的内部文本中显示描述相关音频剪辑的字符串（每个字符串必须是唯一的）。