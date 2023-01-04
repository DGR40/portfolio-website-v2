export default function Project() {
  return (
    <>
      <div class="project-banner">
        <div class="project-left" id="project-left">
          <img src={appDesign1} />
          <img src={appDesign2} />
        </div>
        <div class="project-left" id="project-right">
          <h1>Vegetable Catalog PWA</h1>
          <p>
            Final Project made for App Prototype and Design. Used User
            Interviews to gather design requirements then built the app to meet
            user goals. User can search catalog for favorite vegetable varieties
            as well as learn the basics of gardening through the tutorial page.
          </p>
          <div class="tags">
            <div class="tag-1">
              <p>Vue.js</p>
            </div>
            <div class="tag-1">
              <p>Bootstrap</p>
            </div>
            <div class="tag-1">
              <p>JavaScript</p>
            </div>
            <div class="tag-1">
              <p>HTML</p>
            </div>
            <div class="tag-1">
              <p>CSS</p>
            </div>
          </div>
          <div class="project-button">
            <h1>Live Prototype</h1>
          </div>
        </div>
      </div>
    </>
  );
}
