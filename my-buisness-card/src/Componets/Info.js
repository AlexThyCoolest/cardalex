export default function Info() {
  return (
    <div className="info-div">
      <div className="info-image">
        <h3> Dummy Text... </h3>
      </div>
      <div className="info-content">
        <h1 className="info-name">Alex Agboola</h1>
        <p className="info-job">Full Stack Developer &amp; Writer</p>
        <div className="info-content-link">
          <a href="https://alexagboola.com" className="info-link-portfolio">
            alexagboola.com
          </a>
        </div>
        <a
          href="mailto:alexagboolacodes@gmail.com"
          className="info-content-btn"
        >
          <span> ... </span> Email
        </a>
      </div>

      {/* This is the About Section */}

      <div className="info-about">
        <h2 className="info-heading">About</h2>
        <p className="info-content">
          I am a full-stack developer, and I like to code websites that are
          beautiful and interactive. I am also a part-time writer on platform
          such as Medium and like to talk about the latest tech trends and tips
          and tricks on overall coding.
        </p>
      </div>

      {/* This is the Intrests Section */}

      <div className="info-interests">
        <h2 className="info-heading">Interests</h2>
        <p className="info-content">
          I like to (other than code) play video games, play soccer, and try
          different foods. I also like to read, draw, and be with family as
          well.
        </p>
      </div>

      <footer className="info-footer">
        <div className="icons">
          <a href="#" id="twitter-icon" className="icon">
            ......
          </a>
          <a href="#" id="facebook-icon" className="icon">
            ......
          </a>
          <a href="#" id="insta-icon" className="icon">
            ......
          </a>
          <a href="#" id="linkin-icon" className="icon">
            ......
          </a>
          <a href="#" id="github-icon" className="icon">
            ......
          </a>
        </div>
      </footer>
    </div>
  );
}
