'use client'

import { useState } from 'react'

interface Post {
  id: number
  title: string
  content: string
  hashtags: string[]
  engagement: string
  icon: string
}

const topPosts: Post[] = [
  {
    id: 1,
    title: "🚨 BREAKING: Bitcoin Hits New ATH!",
    content: "Bitcoin just smashed through $100K! 🎯\n\nWhat we're seeing:\n• Institutional buying accelerating\n• ETF inflows breaking records\n• Retail FOMO just beginning\n\nThis is NOT the top. History shows the real parabolic move comes AFTER breaking ATH.\n\nAre you positioned? Drop your target below! 👇",
    hashtags: ["#Bitcoin", "#BTC", "#Crypto", "#BullRun", "#ATH"],
    engagement: "High retweets + price predictions in comments",
    icon: "🚀"
  },
  {
    id: 2,
    title: "⚠️ 3 Altcoins About to EXPLODE (Data-Backed)",
    content: "After analyzing 200+ charts, these 3 gems are showing perfect setups:\n\n1️⃣ $XYZ - Breaking accumulation zone\n2️⃣ $ABC - Whale wallets loading up\n3️⃣ $DEF - Partnership announcement imminent\n\nI'm personally entering positions. Not financial advice, but the data speaks.\n\nWhich one are YOU buying? 🤔",
    hashtags: ["#Altcoins", "#CryptoGems", "#Trading", "#100x"],
    engagement: "Creates urgency + asks for opinion",
    icon: "💎"
  },
  {
    id: 3,
    title: "❌ 5 Mistakes That Will DESTROY Your Portfolio",
    content: "Lost $50K learning these lessons. Save yourself:\n\n1. Chasing pumps (FOMO kills)\n2. No stop losses (ego kills)\n3. Ignoring BTC dominance\n4. Holding through -80% drops\n5. Trusting random Twitter calls\n\nBeen there, done that, lost the money.\n\nWhich mistake hit you hardest? Be honest. 👊",
    hashtags: ["#CryptoTrading", "#Lessons", "#RiskManagement"],
    engagement: "Relatability + emotional connection",
    icon: "⚠️"
  },
  {
    id: 4,
    title: "🎯 My 2025 Crypto Portfolio Allocation (REVEALED)",
    content: "After 10 years in crypto, here's my EXACT allocation:\n\n40% - Bitcoin (foundation)\n30% - Ethereum (smart contracts)\n20% - Top 10 altcoins (calculated risk)\n10% - Moonshots (lottery tickets)\n\nThis survived 3 bear markets.\n\nWhat's YOUR allocation? Share below! 📊\n\n*Not financial advice",
    hashtags: ["#Portfolio", "#CryptoStrategy", "#Bitcoin", "#Ethereum"],
    engagement: "Transparency builds trust + invites sharing",
    icon: "📊"
  },
  {
    id: 5,
    title: "🔥 Why Smart Money is LOADING UP Right Now",
    content: "While everyone's panicking, look what's happening:\n\n📈 Binance netflow: -$2.3B (coins leaving)\n📈 Cold storage: +$4.1B (accumulation)\n📈 Stablecoin ratio: lowest in 18 months\n\nThe data doesn't lie. Big players are positioning for the next leg up.\n\nAre you accumulating or selling? 💪",
    hashtags: ["#OnChainAnalysis", "#SmartMoney", "#Crypto"],
    engagement: "Data-driven + contrarian = engagement",
    icon: "🧠"
  },
  {
    id: 6,
    title: "💰 Turn $1,000 into $10,000: The REALISTIC Way",
    content: "No hopium. No BS. Here's the actual strategy:\n\n✅ Find coins with <$100M mcap\n✅ Strong fundamentals + real product\n✅ Enter during market fear\n✅ Take profits at 3x, 5x, 7x\n✅ NEVER go all-in on one\n\nI've done this 7 times. It works, but needs PATIENCE.\n\nReady to try? Drop a 💎 if you're in!",
    hashtags: ["#CryptoStrategy", "#SmallCapGems", "#MoneyMaking"],
    engagement: "Aspirational + actionable steps",
    icon: "💰"
  },
  {
    id: 7,
    title: "🚨 URGENT: Market Pattern from 2017 & 2021 is REPEATING",
    content: "This is scary accurate...\n\n2017: BTC ATH → Alt season → Crash\n2021: BTC ATH → Alt season → Crash\n2025: BTC ATH → Alt season → ?\n\nWe're at the SAME point in the cycle.\n\nThe next 90 days will make or break portfolios.\n\nAre you prepared? Comment 'READY' 👇",
    hashtags: ["#MarketCycle", "#BullRun", "#CryptoNews"],
    engagement: "Pattern recognition + time pressure",
    icon: "⏰"
  },
  {
    id: 8,
    title: "🎓 7-Day Crypto Master Class (100% FREE)",
    content: "I'm dropping everything I learned in 10 years:\n\nDay 1: Chart patterns that actually work\nDay 2: How to spot scams instantly\nDay 3: Risk management secrets\nDay 4: Finding 100x gems early\nDay 5: Tax optimization strategies\nDay 6: Psychology of winning\nDay 7: Building generational wealth\n\nFollow + turn on notifications to not miss it!\n\nReady to level up? 🚀",
    hashtags: ["#CryptoEducation", "#Trading", "#BinanceSquare"],
    engagement: "Value series = followers + engagement",
    icon: "🎓"
  },
  {
    id: 9,
    title: "⚡ Real-Time: I Just Bought $5K of This Coin",
    content: "Transparency time. Just executed:\n\n$5,000 into $TOKEN at $0.42\n\nWhy?\n• Developer team from Google/Meta\n• Mainnet launch in 3 weeks\n• Only 15% of supply circulating\n• Backed by top-tier VCs\n\nI'll update this thread with exits.\n\nWho's following this trade? 📈\n\n*NFA - DYOR always*",
    hashtags: ["#LiveTrading", "#Transparency", "#Crypto"],
    engagement: "Live accountability = massive engagement",
    icon: "⚡"
  },
  {
    id: 10,
    title: "🏆 POLL: What's Your #1 Crypto Goal for 2025?",
    content: "Let's see what the community is aiming for:\n\n🎯 A) Reach first $10K in crypto\n🎯 B) 10x my current portfolio\n🎯 C) Live off crypto income\n🎯 D) Just don't lose money 😅\n\nVote + explain WHY in comments!\n\nI'll share strategies for the winning goal tomorrow. 💪\n\nLet's make 2025 legendary!",
    hashtags: ["#CryptoGoals", "#Community", "#BinanceSquare", "#2025"],
    engagement: "Polls = maximum interaction + community",
    icon: "🏆"
  }
]

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const copyToClipboard = (post: Post) => {
    const fullPost = `${post.content}\n\n${post.hashtags.join(' ')}`
    navigator.clipboard.writeText(fullPost)
    setCopiedId(post.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-binance-yellow mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
            <h1 className="text-4xl sm:text-5xl font-bold text-binance-yellow">
              Binance Square
            </h1>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Top 10 High-Engagement Posts
          </h2>
          <p className="text-gray-400 text-lg">
            Professional content strategy with 10 years of crypto expertise
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-12">
          {topPosts.map((post) => (
            <div
              key={post.id}
              className="bg-binance-gray rounded-lg p-6 border-2 border-transparent hover:border-binance-yellow transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-4xl mr-3">{post.icon}</span>
                  <div>
                    <span className="text-binance-yellow font-semibold">Post #{post.id}</span>
                    <h3 className="text-xl font-bold mt-1">{post.title}</h3>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 line-clamp-4 whitespace-pre-line">
                {post.content}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.hashtags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-binance-dark px-3 py-1 rounded-full text-sm text-binance-yellow"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <span className="text-sm text-gray-400">
                  💡 {post.engagement}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    copyToClipboard(post)
                  }}
                  className="bg-binance-yellow text-binance-dark px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  {copiedId === post.id ? '✓ Copied!' : 'Copy Post'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Strategy Section */}
        <div className="bg-binance-gray rounded-lg p-8 border-2 border-binance-yellow">
          <h3 className="text-2xl font-bold mb-6 text-binance-yellow">
            🎯 Engagement Strategy Behind These Posts
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <span className="text-2xl mr-2">🔥</span>
                Hook Techniques
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Breaking news & urgency</li>
                <li>• Numbered lists (brain loves patterns)</li>
                <li>• Emotional triggers (fear, FOMO, greed)</li>
                <li>• Personal transparency builds trust</li>
                <li>• Data-driven contrarian takes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <span className="text-2xl mr-2">💬</span>
                Engagement Drivers
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Always end with a question</li>
                <li>• Polls = maximum interaction</li>
                <li>• Cliffhangers & series keep followers</li>
                <li>• Real-time updates create FOMO</li>
                <li>• Relatable mistakes build community</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <span className="text-2xl mr-2">⏰</span>
                Timing Tips
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Post during US & Asia active hours</li>
                <li>• Breaking news: immediately</li>
                <li>• Analysis: weekend mornings</li>
                <li>• Educational: weekday evenings</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <span className="text-2xl mr-2">📈</span>
                Growth Hacks
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Engage with top comments (algorithm boost)</li>
                <li>• Cross-post best performers</li>
                <li>• Track metrics: what works, double down</li>
                <li>• Build series to retain followers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>Built for Binance Square creators | 10 years of proven strategies</p>
        </div>
      </div>

      {/* Modal for full post view */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-binance-gray rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center">
                <span className="text-5xl mr-4">{selectedPost.icon}</span>
                <div>
                  <span className="text-binance-yellow font-semibold">Post #{selectedPost.id}</span>
                  <h3 className="text-2xl font-bold mt-1">{selectedPost.title}</h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-gray-400 hover:text-white text-3xl"
              >
                ×
              </button>
            </div>

            <div className="bg-binance-dark rounded-lg p-6 mb-6">
              <p className="text-gray-100 text-lg whitespace-pre-line mb-4">
                {selectedPost.content}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedPost.hashtags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-binance-gray px-3 py-1 rounded-full text-binance-yellow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-yellow-900 bg-opacity-20 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-binance-yellow">Engagement Strategy:</span> {selectedPost.engagement}
              </p>
            </div>

            <button
              onClick={() => copyToClipboard(selectedPost)}
              className="w-full bg-binance-yellow text-binance-dark px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
            >
              {copiedId === selectedPost.id ? '✓ Copied to Clipboard!' : 'Copy Full Post'}
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
