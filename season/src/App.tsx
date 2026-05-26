import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { seasonalData, Season } from './data';
import { ShieldAlert, Info, Activity, ShieldCheck, Thermometer } from 'lucide-react';

const SEASONS: Season[] = ['spring', 'summer', 'autumn', 'winter'];

export default function App() {
  const [activeSeason, setActiveSeason] = useState<Season>('spring');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const checkPoint = container.scrollTop + window.innerHeight / 3;

    let currentSeason = activeSeason;
    
    SEASONS.forEach((seasonKey) => {
      const element = document.getElementById(`section-${seasonKey}`);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        if (checkPoint >= offsetTop && checkPoint <= offsetBottom) {
          currentSeason = seasonKey;
        }
      }
    });

    if (currentSeason !== activeSeason) {
      setActiveSeason(currentSeason);
    }
  };

  const scrollToSeason = (season: Season) => {
    const element = document.getElementById(`section-${season}`);
    if (element && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Recalculate scroll positions on resize
  useEffect(() => {
    const handleResize = () => {
      scrollToSeason(activeSeason);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSeason]);

  return (
    <div className="h-screen w-screen bg-black overflow-hidden font-sans relative">
      
      {/* Subtle Global Header */}
      <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 pointer-events-none flex items-center space-x-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 opacity-80 transition-opacity hover:opacity-100">
        <ShieldAlert className="w-4 h-4 text-white" />
        <h1 className="text-xs sm:text-sm font-medium text-white tracking-widest">
          儿童季节性传染病指南 - {seasonalData[activeSeason].label.substring(0, 1)}
        </h1>
      </div>

      {/* Main Snap Scrolling Container */}
      <div 
        ref={scrollContainerRef}
        className="h-full w-full relative overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-hide"
        onScroll={handleScroll}
      >
        {SEASONS.map((seasonKey) => {
          const season = seasonalData[seasonKey];
          const Icon = season.icon;
          
          return (
            <section 
              key={seasonKey}
              id={`section-${seasonKey}`}
              className="min-h-screen lg:h-screen w-full snap-start relative flex flex-col items-center justify-start pt-16 lg:pt-12 pb-16 lg:pb-12 px-3 sm:px-6 lg:overflow-hidden lg:max-h-screen"
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="sticky top-0 w-full h-screen">
                  <img 
                    src={season.bgImage} 
                    alt={season.label} 
                    className="w-full h-full object-cover scale-[1.05] opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px]" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
                </div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 w-full h-full max-w-[90rem] flex flex-col lg:min-h-0 mx-auto px-1 sm:px-2 pt-12 sm:pt-4">
                
                {/* Horizontal Grid for Desktop / Vertical Stack for Mobile & Tablet */}
                <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 lg:min-h-0 pb-8 lg:pb-4">
                  {season.diseases.map((disease, index) => (
                    <motion.div
                      key={disease.id}
                      initial={{ opacity: 0, scale: 0.98, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex-1 bg-white/40 backdrop-blur-md rounded-3xl shadow-xl border border-white/40 overflow-hidden flex flex-col hover:bg-white/50 transition-colors"
                    >
                      <div className="p-4 lg:p-6 flex flex-col h-full min-h-0 lg:overflow-y-auto scrollbar-hide">
                        {/* Card Header */}
                        <div className="flex justify-between items-center mb-3 lg:mb-4 shrink-0">
                          <h3 className="text-base lg:text-lg font-bold text-neutral-900 tracking-tight drop-shadow-sm">{disease.name}</h3>
                          <span className={`text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-bold shadow-sm whitespace-nowrap ${
                              disease.severity === 'high' ? 'bg-red-500/90 text-white' :
                              disease.severity === 'medium' ? 'bg-orange-500/90 text-white' :
                              'bg-yellow-500/90 text-neutral-900'
                            }`}>
                              {disease.severity === 'high' ? '高发' : disease.severity === 'medium' ? '中高发' : '低发'}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3 shrink-0">
                          <span className="text-[10px] sm:text-xs bg-white/60 text-neutral-800 px-2 py-1 rounded-md shadow-sm border border-white/30 font-semibold flex items-center">
                            <Activity className="w-3 h-3 mr-1" />
                            病原: {disease.pathogen}
                          </span>
                          <span className="text-[10px] sm:text-xs bg-white/60 text-neutral-800 px-2 py-1 rounded-md shadow-sm border border-white/30 font-semibold flex items-center">
                            <Thermometer className="w-3 h-3 mr-1" />
                            潜伏期: {disease.incubation}
                          </span>
                        </div>

                        {/* Card Body - Relaxed Blocks */}
                        <div className="flex-1 flex flex-col gap-2 lg:gap-3 text-neutral-900 text-xs sm:text-sm leading-relaxed drop-shadow-sm">
                          <div className="bg-white/50 p-3 lg:p-4 rounded-2xl border border-white/30 shadow-sm flex flex-col items-start text-left lg:flex-1">
                            <div className="flex items-center mb-1 shrink-0">
                              <span className="w-2 h-2 rounded-full bg-rose-500 mr-1.5 shadow-sm"></span>
                              <span className="font-bold text-rose-900">典型症状</span>
                            </div>
                            <span className="font-medium opacity-90">{disease.symptoms.join('；')}。</span>
                          </div>
                          
                          <div className="bg-white/50 p-3 lg:p-4 rounded-2xl border border-white/30 shadow-sm flex flex-col items-start text-left lg:flex-1">
                            <div className="flex items-center mb-1 shrink-0">
                              <span className="w-2 h-2 rounded-full bg-amber-500 mr-1.5 shadow-sm"></span>
                              <span className="font-bold text-amber-900">传播途径</span>
                            </div>
                            <span className="font-medium opacity-90">{disease.transmission.join('；')}。</span>
                          </div>
                          
                          <div className="bg-white/50 p-3 lg:p-4 rounded-2xl border border-white/30 shadow-sm flex flex-col items-start text-left flex-1">
                            <div className="flex items-center mb-1 shrink-0">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 shadow-sm"></span>
                              <span className="font-bold text-emerald-900">预防建议</span>
                            </div>
                            <span className="font-medium opacity-90">{disease.prevention.join('；')}。</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
              </div>
            </section>
          );
        })}
      </div>

      {/* Cyclic Progress Bar */}
      <div className="fixed bottom-0 lg:bottom-auto lg:top-0 left-0 lg:left-auto lg:right-0 w-full lg:w-auto h-auto lg:h-full z-50 p-4 sm:p-6 md:p-8 flex items-center justify-center lg:justify-end pointer-events-none">
        <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-full px-2 lg:px-2 py-1.5 lg:py-2 flex flex-row lg:flex-col items-center space-x-2 lg:space-x-0 lg:space-y-4 shadow-2xl pointer-events-auto">
          {SEASONS.map((season, idx) => {
            const isActive = activeSeason === season;
            const data = seasonalData[season];
            const Icon = data.icon;
            
            return (
              <React.Fragment key={season}>
                <button
                  onClick={() => scrollToSeason(season)}
                  className={`relative flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full transition-all duration-500 ease-out focus:outline-none ${
                    isActive 
                      ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-105' 
                      : 'bg-transparent text-white/50 hover:bg-white/10 hover:text-white'
                  }`}
                  title={data.label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                
                {/* Connector Line between seasons */}
                {idx < SEASONS.length - 1 && (
                  <div className="w-3 sm:w-6 lg:w-[2px] h-[2px] lg:h-6 bg-white/20 rounded-full flex-shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
