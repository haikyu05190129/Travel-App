import React, { useState } from 'react';
import { TRIP_DATA } from './data';
import { WeatherWidget } from './components/WeatherWidget';
import { EventCard } from './components/EventCard';
import { DayMapCard } from './components/DayMapCard';
import { ToolsView } from './components/ToolsView';
import { ExpenseTracker } from './components/ExpenseTracker';
import { PackingList } from './components/PackingList';
import { Map, Briefcase, Wallet, Backpack } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'tools' | 'budget' | 'packing'>('itinerary');
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const currentDay = TRIP_DATA[selectedDayIndex];

  return (
    <div className="min-h-screen font-serif bg-jp-offwhite text-jp-black relative">
      
      {/* Top Navigation / Header */}
      <header className="px-6 pt-10 pb-6 bg-jp-offwhite sticky top-0 z-20 border-b border-jp-border/50 backdrop-blur-sm">
        <h1 className="text-2xl font-bold tracking-[0.2em] mb-1">東京旅行</h1>
        <p className="text-xs text-jp-gray tracking-widest">2025.12.20 - 12.24</p>
      </header>

      {activeTab === 'itinerary' && (
        <>
          {/* Day Selector - Minimalist Horizontal Scroll */}
          <div className="px-6 py-6 bg-jp-offwhite">
            <div className="flex overflow-x-auto gap-8 no-scrollbar pb-2">
              {TRIP_DATA.map((day, idx) => (
                <button
                  key={day.date}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`flex-shrink-0 flex flex-col items-center gap-2 transition-all duration-300 group`}
                >
                  <span className={`text-[10px] uppercase tracking-widest ${idx === selectedDayIndex ? 'text-jp-black' : 'text-jp-gray'}`}>
                    {day.dayLabel}
                  </span>
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-lg font-serif transition-all
                    ${idx === selectedDayIndex ? 'bg-jp-black text-white' : 'bg-transparent text-jp-black border border-jp-border group-hover:border-jp-gray'}
                  `}>
                    {day.dayNumber}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <main className="px-6 pb-32 animate-fade-in-up">
            <WeatherWidget 
              location={currentDay.locationTitle}
              locationUrl={currentDay.locationUrl}
              hourly={currentDay.weather.hourly}
            />
            
            <div className="mt-8 mb-12">
              {currentDay.items.map((item) => (
                <EventCard key={item.id} item={item} />
              ))}
            </div>

            {/* Map Card moved to bottom & Updated Link */}
            <DayMapCard 
              locationTitle={currentDay.locationTitle}
              googleMapsUrl="https://maps.app.goo.gl/LLHkHHskZoKV8Hr18"
            />
            
            <div className="h-20 flex items-center justify-center text-jp-gray/30 text-xs tracking-[0.3em] mt-8">
              終
            </div>
          </main>
        </>
      )}

      {/* Other Tabs */}
      {(activeTab === 'tools' || activeTab === 'budget' || activeTab === 'packing') && (
        <main className="px-6 pt-6 pb-32 animate-fade-in min-h-screen">
           {activeTab === 'tools' && <ToolsView />}
           {activeTab === 'budget' && <ExpenseTracker />}
           {activeTab === 'packing' && <PackingList />}
        </main>
      )}

      {/* Bottom Minimalist Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-jp-border flex justify-around py-4 z-50 pb-safe px-2">
        <button 
          onClick={() => setActiveTab('itinerary')}
          className={`flex flex-col items-center gap-1 min-w-[3.5rem] transition-opacity ${activeTab === 'itinerary' ? 'opacity-100' : 'opacity-40'}`}
        >
          <Map className="w-5 h-5" strokeWidth={1.5} />
          <span className="text-[10px] tracking-widest">行程</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('tools')}
          className={`flex flex-col items-center gap-1 min-w-[3.5rem] transition-opacity ${activeTab === 'tools' ? 'opacity-100' : 'opacity-40'}`}
        >
          <Briefcase className="w-5 h-5" strokeWidth={1.5} />
          <span className="text-[10px] tracking-widest">資訊</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('budget')}
          className={`flex flex-col items-center gap-1 min-w-[3.5rem] transition-opacity ${activeTab === 'budget' ? 'opacity-100' : 'opacity-40'}`}
        >
          <Wallet className="w-5 h-5" strokeWidth={1.5} />
          <span className="text-[10px] tracking-widest">記帳</span>
        </button>

        <button 
          onClick={() => setActiveTab('packing')}
          className={`flex flex-col items-center gap-1 min-w-[3.5rem] transition-opacity ${activeTab === 'packing' ? 'opacity-100' : 'opacity-40'}`}
        >
          <Backpack className="w-5 h-5" strokeWidth={1.5} />
          <span className="text-[10px] tracking-widest">行李</span>
        </button>
      </nav>

    </div>
  );
};

export default App;