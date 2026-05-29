import { ScrollAnimation } from '@/components/ScrollAnimation'
import {
  BookOpen,
  Dumbbell,
  Bike,
  Brain,
  Target,
  Activity,
  Flag,
  Camera,
} from 'lucide-react'

const hobbies = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Reading',
    description:
      'Everything from business and technology to history and fiction. Reading is how I stay curious and keep building mental models outside of my day-to-day work.',
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: 'Working Out',
    description:
      'Consistent gym sessions are a cornerstone of my routine. Physical discipline and mental clarity go hand in hand.',
  },
  {
    icon: <Bike className="w-6 h-6" />,
    title: 'Biking',
    description:
      'Pittsburgh has some great trails once you get off the main roads. A long ride is one of the best ways to reset after a busy week.',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Chess',
    description:
      'Strategy games sharpen the same pattern-recognition and planning instincts I use when designing data models and troubleshooting SQL query plans.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Bowling',
    description:
      'A regular in local leagues. Bowling is one of those sports that rewards consistency and process — the mechanics matter more than raw power.',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Pickleball',
    description:
      'One of the fastest-growing sports for good reason — it is fast-paced, social, and competitive without requiring a full court or a full day.',
  },
  {
    icon: <Flag className="w-6 h-6" />,
    title: 'Golf',
    description:
      'Plenty of great courses around Pittsburgh. Golf teaches patience, course management, and the humbling reality that data alone does not win a round.',
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Photography',
    description:
      'Capturing everyday moments and landscapes around Pittsburgh.',
  },
]

const Hobbies = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">Hobbies & Interests</h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          What I get up to outside of work — the things that keep me balanced, competitive, and sharp.
        </p>
      </ScrollAnimation>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => (
          <ScrollAnimation key={hobby.title}>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg text-white">
                  {hobby.icon}
                </div>
                <h3 className="text-lg font-semibold">{hobby.title}</h3>
              </div>
              {/* description commented out for now
              <p className="text-gray-400 leading-relaxed text-sm mt-4">{hobby.description}</p>
              */}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}

export default Hobbies
