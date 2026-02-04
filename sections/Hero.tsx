import React from 'react';
import { Container, Heading, Text, Button } from '../components/UI';
import { ArrowDown, Sparkles, ChevronLeft, User, Search, Lightbulb } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToStart = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent-pink/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent-blue/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />

      <Container className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/50 border border-accent-pink/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent-peach" />
            <span className="text-sm font-medium text-text-secondary">AI-подход к красоте</span>
          </div>
          
          <Heading level={1} className="mb-6">
            Мой личный <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-peach to-accent-pink">
              косметолог
            </span>
          </Heading>
          
          <Text className="mb-10 text-xl max-w-lg">
            Ваш персональный цифровой помощник для ухода за кожей. 
            Анализ, рекомендации и забота — всегда под рукой.
          </Text>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToStart}>
              Узнать о проекте
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' })}>
              Технологии
            </Button>
          </div>
        </div>

        <div className="relative hidden md:block">
           {/* Phone Container - Updated width to max-w-[360px] to match Workflow */}
           <div className="relative max-w-[360px] w-full h-[640px] mx-auto bg-white rounded-[3rem] shadow-2xl border-[8px] border-white overflow-hidden flex flex-col ring-1 ring-black/5">
              {/* Status Bar / Header Area */}
              <div className="bg-white border-b border-gray-50 p-4 pb-3 z-10 sticky top-0">
                <div className="flex items-center gap-3">
                    <ChevronLeft className="w-6 h-6 text-text-primary/70 cursor-pointer" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF8FAB] to-[#FFC2D1] flex items-center justify-center text-white shadow-sm">
                        <Sparkles className="w-5 h-5 text-white fill-white" />
                    </div>
                    <div>
                        <div className="font-serif font-bold text-lg leading-tight text-text-primary">AI-Консультация</div>
                        <div className="text-xs text-text-secondary">Персональный косметолог</div>
                    </div>
                </div>
              </div>

              {/* Chat Content - Added phone-scrollbar class */}
              <div className="flex-1 bg-[#FAFAFA] p-4 overflow-y-auto relative phone-scrollbar">
                 <div className="space-y-6 pb-4">
                    
                    {/* User Message */}
                    <div className="flex flex-row-reverse items-end gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#FF8FAB] flex items-center justify-center shrink-0 shadow-sm text-white">
                             <User className="w-4 h-4" />
                        </div>
                        <div className="bg-[#FF8FAB] text-white p-3.5 rounded-2xl rounded-tr-sm shadow-md max-w-[85%]">
                            <p className="text-sm font-medium leading-relaxed">Как ухаживать за комбинированной кожей?</p>
                        </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-white border border-[#FF8FAB]/20 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                             <Sparkles className="w-4 h-4 text-[#FF8FAB] fill-[#FF8FAB]" />
                        </div>
                        <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-black/5 text-sm text-text-primary max-w-[95%] space-y-4">
                            <p className="leading-relaxed">
                                Здравствуйте! Как профессиональный косметолог, я с радостью помогу вам разобраться в особенностях ухода за комбинированной кожей. Это один из самых распространенных и интересных типов, требующий «ювелирного» подхода.
                            </p>
                            
                            {/* Analysis Section */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 font-bold text-text-primary">
                                    <span className="text-lg">🔍</span>
                                    <span>Анализ ситуации</span>
                                </div>
                                <p className="text-xs text-text-secondary leading-relaxed">
                                    Комбинированная кожа характеризуется неравномерным распределением сальных желез:
                                </p>
                                <ul className="text-xs text-text-secondary space-y-2 ml-1">
                                    <li className="flex gap-2">
                                        <span className="text-text-primary font-bold">•</span>
                                        <span><strong className="text-text-primary">Т-зона:</strong> повышенная жирность, расширенные поры, склонность к блеску.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-text-primary font-bold">•</span>
                                        <span><strong className="text-text-primary">U-зона:</strong> нормальная или сухая кожа, возможно шелушение.</span>
                                    </li>
                                </ul>
                                <p className="text-xs text-text-secondary italic mt-1 border-l-2 border-[#FF8FAB] pl-2">
                                  Главная сложность — найти баланс: очистить жирные участки, не пересушив сухие.
                                </p>
                            </div>
                            
                            <div className="h-px bg-gray-100 w-full my-1"></div>

                            {/* Recommendations Section */}
                             <div className="space-y-2">
                                <div className="flex items-center gap-2 font-bold text-text-primary">
                                    <span className="text-lg">💡</span>
                                    <span>Рекомендации по уходу</span>
                                </div>
                                <ol className="text-xs text-text-secondary space-y-3">
                                    <li>
                                        <strong className="text-text-primary block mb-1">1. Мягкое двухэтапное очищение.</strong> 
                                        Избегайте агрессивного мыла и спиртовых тоников. Используйте деликатные гели или пенки с нейтральным pH.
                                    </li>
                                    <li>
                                        <strong className="text-text-primary block mb-1">2. Мультимаскинг.</strong> 
                                        Это идеальная техника для вас. Наносите глиняные маски на Т-зону, а увлажняющие — на щеки. 🎭
                                    </li>
                                    <li>
                                        <strong className="text-text-primary block mb-1">3. Грамотное отшелушивание.</strong> 
                                        Замените скрабы на кислоты. Салициловая (BHA) для Т-зоны, молочная (AHA) для U-зоны. ✨
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
              
               {/* Bottom Blur/Fade */}
               <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
           </div>

           {/* Floating Elements */}
           <div className="absolute top-24 -right-12 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms] delay-700 border border-white/50">
              <span className="text-3xl">🌿</span>
           </div>
           <div className="absolute bottom-32 -left-12 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl animate-bounce duration-[4000ms] delay-300 border border-white/50">
              <span className="text-3xl">💧</span>
           </div>
        </div>
      </Container>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <button onClick={scrollToStart} className="p-2 text-accent-peach hover:text-accent-pink transition-colors">
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;