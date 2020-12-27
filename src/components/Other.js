import React from "react";

const Other = () => {
	return (
		<div class="section" id="other">
			<h1 className="section-title">Other Select Work</h1>
						<ul style={{ marginTop: 25, marginBottom: 30 }}>
				<li>
					<a
						className="otherwork"
						href="http://github.com/skhemnan/tmdb_scraper"
					>
						tmdb_scraper
					</a>
				</li>
				<li>
					<a
						className="otherwork"
						href="http://github.com/skhemnan/bitweather"
					>
						bitweather
					</a>
				</li>
				<li>
					<a
						className="otherwork"
						href="http://github.com/skhemnan/transaction-compare"
					>
						transaction-compare
					</a>
				</li>
				<li>
					<a
						className="otherwork"
						href="http://github.com/skhemnan/wordcloud"
					>
						wordcloud
					</a>
				</li>
			</ul>
		<a className="resume-link" href="">Download Resume here</a>
		</div>
	);
};

export default Other;
