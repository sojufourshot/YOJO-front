import React from "react";
import styles from "./Items.module.css";

export const Item = ({ item }) => {
	const { id, title, author, content, src } = item;

	return (
		<div>
			<div className="header">Title Bar</div>
			<div className="main_content_background">
				<div className="main_content">
					<div className={styles.item}>
						<div className={styles.item_box}>
							<img className={styles.item_box_img} src={src} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
