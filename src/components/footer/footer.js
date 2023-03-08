import "./footer.scss";
import anuska from "../../images/anuska_back.jpg";

function Footer() {
  return (
		<footer
			class="section"
			id="social"
			data-text=" #232323"
			data-bg="#ab6b8f"
		>
			<div class="icons-big">
				<a
					href="https://www.linkedin.com/in/anuskasampedro/"
					target="_blank"
				>
					{/* <FontAwesomeIcon icon="fa-brands fa-linkedin-in" /> */}
          </a>
				<a href="https://github.com/NushySC" target="_blank"
					><span class="fab fa-github icon-big"></span
				></a>
				<a href="https://codepen.com/NushySC" target="_blank"
					><span class="fab fa-codepen"></span
				></a>

				<a href="https://www.behance.net/anksam" target="_blank"
					><span class="fab fa-behance icon-big"></span
				></a>
				<a
					href="https://www.pinterest.com/anuskasampedro/"
					target="_blank"
					><span class="fab fa-pinterest icon-big"></span
				></a>
			</div>
			<div class="copyright">
				©2020 by Anuska Sampedro. All rights reserved.
			</div>
		</footer>
  );
}

export default Footer;
