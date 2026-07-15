import FloatingLines from "@/components/FloatingLines";
import ShinyText from "@/components/ShinyText";

import GradientText from "@/components/GradientText"


export default function Home() {
  return (
    <div>

      <div style={{
        width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0, background: 'black' }}>
        <FloatingLines 
          enabledWaves={["top","middle","bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={8}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={8}
          bendRadius={8}
          bendStrength={-2}
          interactive={false}
          parallax={true}
          animationSpeed={1}
          linesGradient={["#A855F7", "#7C3AED", "#6366F1"]}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: "center", height: '100vh' }}>

        <div></div>

        <div className="bg-black/50 backdrop-blur-md border border-black/50 rounded-xl w-1/3 p-8">
          <ShinyText
            text="NEXT CALENDAR"
            className="text-4xl font-bold [font-family:Arial] mb-10"
            speed={3}
            delay={0}
            color="#767676"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />

          <p className="text-gray-400 font-[Arial] [word-spacing:2px] leading-relaxed text-justify text-xl mb-20">A secure <span className="text-gray-300 font-bold">personal calendar</span> designed to help you remember life's most important moments. Save birthdays, anniversaries, memorials, and special occasions, personalize each event, and receive email reminders so every meaningful date is remembered.</p>

          <a href="/signup" target="_blank" className="bg-gradient-to-r from-blue-700 to-purple-600 text-white font-mono px-4 py-2 rounded-lg cursor-pointer inline-block transition-transform duration-300 ease-in-out hover:scale-105">Get started</a>
        </div>

        <div>
          <p className="text-gray-400 font-[Arial] mb-2">© {new Date().getFullYear()} James Sadhu Sundar.</p>
        </div>
        
      </div>

    </div>
  );
}
