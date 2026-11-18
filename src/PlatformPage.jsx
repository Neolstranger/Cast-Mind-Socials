
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const platforms = {
    instagram: {
        name: "Instagram",
        icon: "◎",
        gradient: "linear-gradient(120deg, #6938ef, #d629a8, #ff8a36)"
    },

    tiktok: {
        name: "TikTok",
        icon: "♪",
        gradient: "linear-gradient(120deg, #111827, #164e63, #db2777)"
    },

    youtube: {
        name: "YouTube",
        icon: "▶",
        gradient: "linear-gradient(120deg, #991b1b, #ef4444, #f97316)"
    },

    facebook: {
        name: "Facebook",
        icon: "f",
        gradient: "linear-gradient(120deg, #123c91, #2563eb, #60a5fa)"
    }
};

const listings = [
    {
        id: 1,
        platform: "instagram",
        type: "Account",
        title: "Fashion & Lifestyle Profile",
        description: "Active lifestyle page with an engaged audience.",
        followers: "48.5K",
        engagement: "5.1%",
        created: "2021",
        price: 250000,
        badge: "Verified"
    },
    {
        id: 2,
        platform: "instagram",
        type: "Account",
        title: "Travel & Adventure Page",
        description: "Stunning travel content and audience details.",
        followers: "72K",
        engagement: "6.7%",
        created: "2020",
        price: 320000,
        badge: "Verified"
    },
    {
        id: 3,
        platform: "instagram",
        type: "Account",
        title: "Beauty & Skincare Profile",
        description: "Growing beauty community.",
        followers: "91K",
        engagement: "5.9%",
        created: "2019",
        price: 280000,
        badge: "Popular"
    },
    {
        id: 4,
        platform: "instagram",
        type: "Account",
        title: "Entertainment Blog",
        description: "Viral content page with high reach.",
        followers: "66K",
        engagement: "7.2%",
        created: "2021",
        price: 300000,
        badge: "Verified"
    },
    {
        id: 5,
        platform: "instagram",
        type: "Growth Service",
        title: "Instagram Growth Package",
        description: "Content strategy and audience development consultation.",
        followers: "1:1",
        engagement: "24–72h",
        created: "Online",
        price: 45000,
        badge: "Service"
    },
    {
        id: 6,
        platform: "instagram",
        type: "Growth Service",
        title: "Engagement Boost Service",
        description: "Improve your content strategy and audience reach.",
        followers: "5 posts",
        engagement: "3 days",
        created: "Online",
        price: 40000,
        badge: "Service"
    }
];

function PlatformPage() {
    const { platformName } = useParams();

    const currentPlatform = platforms[platformName?.toLowerCase()];

    const [search, setSearch] = useState("");
    const [listingType, setListingType] = useState("All listing types");
    const [sortBy, setSortBy] = useState("Featured");
    const [maxPrice, setMaxPrice] = useState("Any price");

    if (!currentPlatform) {
        return <h2>Platform not found</h2>;
    }

    // Get listings for the selected platform
    let filteredListings = listings.filter((item) => {
        return item.platform === platformName.toLowerCase();
    });

    // Search listings
    filteredListings = filteredListings.filter((item) => {
        return (
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase())
        );
    });

    // Filter by listing type
    if (listingType !== "All listing types") {
        filteredListings = filteredListings.filter((item) => {
            return item.type === listingType;
        });
    }

    // Filter by price
    if (maxPrice === "Under ₦100,000") {
        filteredListings = filteredListings.filter(
            (item) => item.price < 100000
        );
    }

    if (maxPrice === "₦100,000 - ₦300,000") {
        filteredListings = filteredListings.filter(
            (item) => item.price >= 100000 && item.price <= 300000
        );
    }

    if (maxPrice === "Above ₦300,000") {
        filteredListings = filteredListings.filter(
            (item) => item.price > 300000
        );
    }

    // Sort listings
    if (sortBy === "Price: Low to High") {
        filteredListings.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price: High to Low") {
        filteredListings.sort((a, b) => b.price - a.price);
    }

    return (
        
        <main className="platform-page">

            

            <section
                className="platform-hero"
                style={{ background: currentPlatform.gradient }}
            >
                <div className="platform-hero-content">

                    <Link to="/" className="back-link">
                        ← Back to categories
                    </Link>

                    <div className="platform-title">
                        <div className="platform-logo">
                            {currentPlatform.icon}
                        </div>

                        <div>
                            <h1>{currentPlatform.name} Marketplace</h1>
                            <p>
                                Discover {currentPlatform.name} accounts,
                                pages and services from sellers.
                            </p>
                        </div>
                    </div>

                    <div className="platform-search">
                        <input
                            type="search"
                            placeholder={`Search ${currentPlatform.name} listings...`}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <button>Search</button>
                    </div>

                </div>

                <div className="platform-hero-art">
                    {currentPlatform.icon}
                </div>
            </section>


            {/* FILTER SECTION */}

            <section className="platform-content">

                <div className="platform-filters">

                    <select
                        value={listingType}
                        onChange={(e) => setListingType(e.target.value)}
                    >
                        <option>All listing types</option>
                        <option>Account</option>
                        <option>Growth Service</option>
                    </select>

                    <select
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    >
                        <option>Any price</option>
                        <option>Under ₦100,000</option>
                        <option>₦100,000 - ₦300,000</option>
                        <option>Above ₦300,000</option>
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option>Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>

                    <span className="result-count">
                        {filteredListings.length} results
                    </span>

                </div>


                {/* LISTINGS */}

                <div className="platform-listing-heading">
                    <div>
                        <h2>Featured {currentPlatform.name} Listings</h2>
                        <p>
                            Discover {currentPlatform.name} accounts and services.
                        </p>
                    </div>
                </div>

                <div className="platform-listing-grid">

                    {filteredListings.map((item) => (

                        <div className="platform-listing-card" key={item.id}>

                            <div className="platform-listing-top">
                                <span>
                                    {currentPlatform.icon} {currentPlatform.name}
                                    {" · "}{item.type}
                                </span>

                                <small>{item.badge}</small>
                            </div>

                            <h3>{item.title}</h3>

                            <p className="platform-description">
                                {item.description}
                            </p>

                            <div className="platform-stats">

                                <div>
                                    <strong>{item.followers}</strong>
                                    <small>Followers / Details</small>
                                </div>

                                <div>
                                    <strong>{item.engagement}</strong>
                                    <small>Engagement / Delivery</small>
                                </div>

                                <div>
                                    <strong>{item.created}</strong>
                                    <small>Created / Type</small>
                                </div>

                            </div>

                            <div className="platform-card-bottom">

                                <strong>
                                    ₦{item.price.toLocaleString("en-NG")}
                                </strong>

                                <button>View listing →</button>

                            </div>

                        </div>

                    ))}

                    {filteredListings.length === 0 && (
                        <p className="no-listings">
                            No listings match your search.
                        </p>
                    )}

                </div>


                {/* TRUST SECTION */}

                <section className="platform-trust">

                    <div>
                        <span>🛡️</span>
                        <div>
                            <h3>Secure Transactions</h3>
                            <p>Protect your payments and personal information.</p>
                        </div>
                    </div>

                    <div>
                        <span>🎧</span>
                        <div>
                            <h3>24/7 Support</h3>
                            <p>Get help from our support team.</p>
                        </div>
                    </div>

                    <div>
                        <span>🤝</span>
                        <div>
                            <h3>Trusted Platform</h3>
                            <p>Make informed decisions before proceeding.</p>
                        </div>
                    </div>

                </section>

            </section>

        </main>
 
        
           );
}

export default PlatformPage;
