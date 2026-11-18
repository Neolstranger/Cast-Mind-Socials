import './index.css'

function Hero() {
    return (
        <>
            <div className="hero">
                <div style={{width:"600px"}}>
                    <span>Castmind socials</span>
                    <h1>Find your next social media asset.</h1>
                    <p>Explore social media pricing and digital growth services in one platform </p>
                    <div className='searchBox'><input placeholder="search TikTok accounts,instagram accounts,youtube.." /><button id="but3">search</button></div>
                    <div style={{ display: "flex", gap: '30px' }}>
                        <div><h3>6 platforms</h3><p>one marketplace</p></div>
                        <div><h3>Early discovery</h3><p>search and filter</p></div>
                        <div><h3>Seller and Buyer profiles</h3><p>Known who you're dealing with</p></div>
                    </div>

                </div>
                <div className='hero2'>
                    <p>A BETTER WAY TO DISCOVER</p>
                    <h2>BUY.SEll.CONNECT</h2>
                    <p>compare price, review seller information and make informed decisions before proceeding</p>
                </div>
            </div>
        </>
    )
}

export default Hero