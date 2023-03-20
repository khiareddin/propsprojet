import Profilecomponent from "./Profile/Profilecomponent";

function App() {
  const handlename=(FullName)=>alert(FullName)
    return (
        <div className="App">
            <Profilecomponent
                FullName="Najet Souissi :D"
                bio="Full stack web developer"
                Profession="Student"
                handlename={handlename}>
                  {/* here we have an image as child */}
                  {/* <h3>Image here is defined as a child of Profilecomponent </h3> */}
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF0hJm_O5ccPw/profile-displayphoto-shrink_200_200/0/1618839300408?e=1646870400&v=beta&t=zXWuFhVrH5p1IaCJhUbf3_x_xdrzOBH1gbkurtaJIWc"/>
            </Profilecomponent>
               
            {/*props destructring ==> <Profilecomponent FullName="Najet Souissi :D"/>  */}
        </div>
    );
}

export default App;
