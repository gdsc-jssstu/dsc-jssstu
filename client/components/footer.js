export default function Footer({ children, page }) {
  return (
    <div>
      {/* <!--Links to JS files and JS CDN's--> */}
      <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      ></script>

      <script src="js/darkToggle.js"></script>

      {page == "home" ? <script src="js/index.js"></script> : <></>}
      {page == "team" ? <script src="js/team.js"></script> : <></>}
    </div>
  );
}
