"use client"

import React, { useState, useMemo, useEffect } from 'react';
import { Sparkles, Rocket } from 'lucide-react';

interface PathwayChild {
  id: string;
  title: string;
  description: string;
}

interface Pathway {
  id: string;
  title: string;
  description: string;
  children?: PathwayChild[];
}

export default function ManifestInterface() {
  const [idea, setIdea] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPortal, setShowPortal] = useState(false);
  const [nodes, setNodes] = useState<string[]>([]);
  const [showNodeSystem, setShowNodeSystem] = useState(false);
  const [pathways, setPathways] = useState<Pathway[]>([]);

  // Word rotation state
  const words = [
    "Create a Mobile Game like Angry Birds for me",
    "Build me a SaaS Platform for Freelancers",
    "Design an NFT Collection of Mythical Creatures for me",
    "Develop me an AI-Powered Writing Assistant",
    "Launch a Web3 Social Platform for me",
    "Build me a Virtual Reality Fitness App",
    "Create a Blockchain-Based Marketplace for me",
    "Design me a Metaverse Art Gallery",
    "Build a Learning Platform for Developers for me",
    "Create me a Climate Change Solution App"
  ];

  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let wordIndex = 0;
    const interval = setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
      setCurrentWord(words[wordIndex]);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  // Generate stable particle positions using useMemo
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      width: 1 + (i % 3),
      height: 1 + (i % 3),
      top: `${(i * 2) % 100}%`,
      left: `${(i * 3) % 100}%`,
      duration: `${2 + (i % 3)}s`,
      delay: `${(i % 2) * 0.5}s`
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTyping(true);
    setShowPortal(true);
    
    setTimeout(() => {
      setPathways([
        {
          id: "gamedev",
          title: "Game Development",
          description: "Core game mechanics and development",
          children: [
            { id: "mechanics", title: "Game Mechanics", description: "Design addictive gameplay loop" },
            { id: "graphics", title: "Visual Design", description: "Create appealing art style" }
          ]
        },
        {
          id: "monetization",
          title: "Monetization Strategy",
          description: "Revenue generation plan",
          children: [
            { id: "ads", title: "Ad Strategy", description: "Implement non-intrusive ads" },
            { id: "iap", title: "In-App Purchases", description: "Design compelling power-ups" }
          ]
        },
        {
          id: "marketing",
          title: "Market Research",
          description: "Understand your audience",
          children: [
            { id: "competitors", title: "Competitor Analysis", description: "Study successful games" },
            { id: "audience", title: "Target Audience", description: "Define player demographics" }
          ]
        }
      ]);
      
      setIsTyping(false);
      setShowNodeSystem(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Matrix/Multiverse Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(37,0,64,0.5)_0%,rgba(0,0,0,1)_100%)]" />
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-purple-500/30 animate-pulse"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              top: particle.top,
              left: particle.left,
              animationDuration: particle.duration,
              animationDelay: particle.delay
            }}
          />
        ))}
        
        {/* Matrix-like grid */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(66, 0, 128, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(66, 0, 128, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            transform: 'perspective(500px) rotateX(60deg)',
            opacity: 0.2
          }} 
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="relative inline-block transform -translate-x-4">
            {/* Enhanced glow effect with larger blur and intensity */}
            <div className="absolute inset-0 blur-2xl">
              <h1 className="text-6xl font-bold text-purple-400/60">
                ManifestEngine.me
              </h1>
            </div>

            {/* Main text with enhanced shimmer effect */}
            <h1 
              className="relative text-6xl font-bold bg-clip-text text-transparent 
                         bg-gradient-to-r from-purple-300 via-cyan-200 to-blue-300 
                         bg-[size:200%_auto] animate-[shine_4s_ease-in-out_infinite]
                         drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
              style={{
                backgroundSize: '200% auto',
                animation: 'shine 4s linear infinite'
              }}
            >
              ManifestEngine.me
              <Sparkles className="absolute -top-1 -right-8 text-purple-400 w-8 h-8 animate-pulse" />
            </h1>

            {/* Enhanced depth effect */}
            <div className="absolute inset-0 opacity-70">
              <h1 className="text-6xl font-bold text-purple-500/40 transform translate-x-[2px] translate-y-[2px]">
                ManifestEngine.me
              </h1>
            </div>

            {/* Additional outer glow with increased intensity */}
            <div className="absolute inset-0 blur-3xl">
              <h1 className="text-6xl font-bold text-purple-400/20">
                ManifestEngine.me
              </h1>
            </div>

            {/* New ghostly glow layer */}
            <div className="absolute inset-0 blur-xl animate-[shine_4s_ease-in-out_infinite]">
              <h1 className="text-6xl font-bold text-cyan-400/30">
                ManifestEngine.me
              </h1>
            </div>
          </div>
          
          <p className="text-xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-blue-200">
            Create Anything. Manifest Everything.
          </p>

          {/* Word Rotation with Typewriter Effect */}
          <div className="h-8 mt-6 flex justify-center">
            <div className="relative inline-block">
              <p
                className="text-xl text-transparent bg-clip-text
                           bg-gradient-to-r from-purple-400 to-blue-400
                           whitespace-nowrap overflow-hidden border-r-4 border-purple-400"
                style={{
                  width: 0,
                  animation: `typewriter ${currentWord.length * 0.15}s steps(${currentWord.length}) forwards,
                             blink 0.75s steps(2) infinite`
                }}
              >
                {currentWord}
              </p>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 border border-purple-500/20 shadow-[0_0_50px_-12px_rgba(147,51,234,0.2)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="What would you like to create today?"
                  className="w-full h-40 bg-black/60 text-white placeholder-purple-300/70 rounded-2xl p-6 
                             border border-purple-500/30 focus:border-purple-500/50
                             focus:ring-2 focus:ring-purple-500/50 focus:outline-none
                             shadow-[inset_0_0_20px_rgba(147,51,234,0.1)]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600/90 to-blue-600/90 
                           hover:from-purple-600 hover:to-blue-600
                           text-white font-bold py-4 px-8 rounded-xl
                           flex items-center justify-center gap-3
                           transition-all duration-300 transform hover:scale-[1.02]
                           shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)]"
              >
                <span>Manifest Your Vision</span>
                <Rocket className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-8 p-6 rounded-xl bg-black/40 border border-purple-500/20 min-h-[100px]">
              {isTyping ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping delay-100" />
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping delay-200" />
                </div>
              ) : showNodeSystem ? (
                <div className="relative">
                  <div className="flex flex-wrap justify-center gap-4 p-4">
                    {pathways.map((pathway) => (
                      <div
                        key={pathway.id}
                        className="bg-black/50 p-4 rounded-xl border border-purple-500/30
                                  hover:border-purple-500/60 transition-all cursor-pointer
                                  animate-[nodeFloat_3s_ease-in-out_infinite]"
                      >
                        <h3 className="text-lg font-bold text-purple-200">{pathway.title}</h3>
                        <p className="text-sm text-purple-200/70">{pathway.description}</p>
                        {pathway.children && (
                          <div className="mt-4 space-y-2">
                            {pathway.children.map((child) => (
                              <div
                                key={child.id}
                                className="bg-black/30 p-3 rounded-lg border border-purple-500/20
                                          hover:border-purple-500/40 transition-all cursor-pointer"
                              >
                                <h4 className="text-sm font-semibold text-purple-200">{child.title}</h4>
                                <p className="text-xs text-purple-200/70">{child.description}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-purple-200/80 text-center">
                  Your pathway to innovation awaits...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}