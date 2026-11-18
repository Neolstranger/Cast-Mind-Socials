
import { Link } from "react-router-dom";

const categories = [
    {
        name: "Instagram",
        icon: "📸",
        description: "Profiles & services",
        link: "/platform/instagram"
    },
    {
        name: "TikTok",
        icon: "🎵",
        description: "Accounts & services",
        link: "/platform/tiktok"
    },
    {
        name: "YouTube",
        icon: "▶️",
        description: "Channels & services",
        link: "/platform/youtube"
    },
    {
        name: "Facebook",
        icon: "f",
        description: "Pages & services",
        link: "/platform/facebook"
    }
];

function BrowseCategories() {
    return (
        <section className="browse-section">
            <div className="browse-heading">
                <div>
                    <h2>Browse Categories</h2>
                    <p>Choose a platform to explore.</p>
                </div>
            </div>

            <div className="category-container">
                {categories.map((category) => (
                    <Link
                        to={category.link}
                        className="category-card"
                        key={category.name}
                    >
                        <div className="category-icon">
                            {category.icon}
                        </div>

                        <div className="category-info">
                            <h3>{category.name}</h3>
                            <p>{category.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default BrowseCategories;
