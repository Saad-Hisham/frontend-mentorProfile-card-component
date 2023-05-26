
import avatar from "./profile-card-component-main/images/image-victor.jpg"
function App() {
  return (
    <main>
      <div className="top-background"></div>
      <div className="personal-info">

      <div className="image-container">
        <img src={avatar} alt=""/>
      </div>
      <div>
        <h1>Victor Crest <span>26</span></h1>
        <p>London</p>
        <hr></hr>
        <div className="statics">
          <div>
          <p className="head">80K</p>
          <p className="body">Followers</p>
          </div>


          <div>
          <p className="head"> 803K</p>
          <p className="body">Likes</p>
          </div>


          <div>
          <p className="head"> 1.4K</p>
          <p className="body">Photos</p>
          </div>
        </div>
      </div>
      </div>



    </main>

  );

}
export default App;









