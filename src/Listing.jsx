import { useState } from "react";


function FeaturedListings({ darkMode, setDarkMode }) {
    function toggleTheme() {
        setDarkMode(!darkMode);
    }
        const listings = [
            {
                id: 1,
                platform: "Instagram",
                type: "Account",
                icon: "📸",
                title: "Lifestyle & fashion profile",
                description: "Established sample profile with a lifestyle-focused audience.",
                followers: "24.8K",
                engagement: "4.2%",
                created: "2019",
                price: 180000
            },

            {
                id: 2,
                platform: "TikTok",
                type: "Account",
                icon: "🎵",
                title: "Comedy & entertainment account",
                description: "Sample short-video account listing with audience details.",
                followers: "58K",
                engagement: "7.1%",
                created: "2021",
                price: 250000
            },

            {
                id: 3,
                platform: "YouTube",
                type: "Monetized channel",
                icon: "▶️",
                title: "Educational video channel",
                description: "Example channel listing; monetization and ownership are unverified.",
                followers: "12.5K",
                engagement: "82K views",
                created: "2020",
                price: 650000
            },

            {
                id: 4,
                platform: "Facebook",
                type: "Page",
                icon: "f",
                title: "Local community page",
                description: "Sample page listing with location and audience information.",
                followers: "16K",
                engagement: "3.8%",
                created: "2018",
                price: 120000
            },

            {
                id: 5,
                platform: "Instagram",
                type: "Growth service",
                icon: "📸",
                title: "Content strategy consultation",
                description: "Example service listing for profile review and content planning.",
                followers: "1:1",
                engagement: "45 min",
                created: "Online",
                price: 25000
            },

            {
                id: 6,
                platform: "TikTok",
                type: "Growth service",
                icon: "🎵",
                title: "Short-form video editing",
                description: "Sample creator service for editing original short-form videos.",
                followers: "5 videos",
                engagement: "1080p",
                created: "3 days",
                price: 40000
            }
        ];

        const [listingType, setListingType] = useState("All listing types");
        const [sortBy, setSortBy] = useState("Featured");

        let filteredListings = listings.filter((item) => {
            return listingType === "All listing types" ||
                item.type === listingType;
        });

        if (sortBy === "Price: Low to High") {
            filteredListings.sort((a, b) => a.price - b.price);
        }

        if (sortBy === "Price: High to Low") {
            filteredListings.sort((a, b) => b.price - a.price);
        }

        return (
            <section className="featured-section">

                <div className="featured-heading">
                    <div>
                        <h2>Featured listings</h2>
                        <p>Discover available social media listings.</p>
                    </div>

                    <button onClick={() => setListingType("All listing types")}>
                        Clear filters ↗
                    </button>
                </div>

                <div className="listing-filters">

                    <select
                        value={listingType}
                        onChange={(e) => setListingType(e.target.value)}
                    >
                        <option>All listing types</option>
                        <option>Account</option>
                        <option>Monetized channel</option>
                        <option>Page</option>
                        <option>Growth service</option>
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option>Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>

                </div>

                <div className="listing-container">

                    {filteredListings.map((item) => (

                        <div className="listing-card" key={item.id}>

                            <div className="listing-top">
                                <span>
                                    {item.icon} {item.platform} · {item.type}
                                </span>

                                <small>Demo listing</small>
                            </div>

                            <h3>{item.title}</h3>

                            <p className="listing-description">
                                {item.description}
                            </p>

                            <div className="listing-stats">

                                <div>
                                    <h4>{item.followers}</h4>
                                    <small>Followers</small>
                                </div>

                                <div>
                                    <h4>{item.engagement}</h4>
                                    <small>Engagement / Details</small>
                                </div>

                                <div>
                                    <h4>{item.created}</h4>
                                    <small>Created / Delivery</small>
                                </div>

                            </div>

                            <div className="listing-price">
                                ₦{item.price.toLocaleString("en-NG")}
                            </div>

                            <div className="listing-buttons">
                                <button>View listing</button>
                                <button>Contact</button>
                            </div>

                        </div>

                    ))}

                    {filteredListings.length === 0 && (
                        <p>No listings found.</p>
                    )}

                </div>
                
            </section>
        );
    }

    export default FeaturedListings;