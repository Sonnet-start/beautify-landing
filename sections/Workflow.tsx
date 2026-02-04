import React from 'react';
import { Section, Container, Heading, Text, Card, Badge } from '../components/UI';
import { Smartphone, Calendar, ShieldCheck, Camera, MessageCircle, ChevronLeft, X, Sparkles, AlertTriangle } from 'lucide-react';

const Workflow: React.FC = () => {
  return (
    <Section id="workflow" className="bg-white/40">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="text-accent-peach font-serif text-lg italic mb-2 block">Ход работы</span>
           <Heading level={2}>Реализация и Технологии</Heading>
           <Text>
             От идеи до работающего прототипа: как мы создавали вашего личного косметолога.
           </Text>
        </div>

        {/* Tech Stack */}
        <div id="tech" className="mb-20">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { name: "Next.js 14", desc: "App Router & SSR" },
               { name: "Tailwind CSS", desc: "Стилизация" },
               { name: "Supabase", desc: "База данных & Auth" },
               { name: "Google Gemini", desc: "AI Анализ & Чат" }
             ].map((tech, i) => (
               <div key={i} className="p-6 rounded-2xl bg-white border border-border text-center hover:shadow-lg transition-shadow">
                 <div className="font-serif font-bold text-xl mb-1 text-text-primary">{tech.name}</div>
                 <div className="text-sm text-text-secondary">{tech.desc}</div>
               </div>
             ))}
           </div>
        </div>

        {/* Features / Process Grid */}
        <div className="space-y-12">
          {/* Feature 1: AI Analysis Mockup */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
               {/* Phone Interface Mockup - Consistent width w-full max-w-[360px] */}
               <div className="bg-white rounded-[2rem] border-[6px] border-white ring-1 ring-black/5 shadow-2xl overflow-hidden max-w-[360px] w-full mx-auto h-[680px] flex flex-col relative rotate-1 hover:rotate-0 transition-transform duration-500">
                  {/* Status Bar/Header */}
                  <div className="bg-white border-b border-gray-50 p-3 shrink-0 z-10 sticky top-0">
                    <div className="flex items-center gap-3">
                       <ChevronLeft className="w-6 h-6 text-gray-700 cursor-pointer" />
                       <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-accent-pink">
                          <Camera className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="font-bold text-base text-gray-900 leading-tight">Анализ фото</div>
                          <div className="text-[10px] text-gray-500">AI-диагностика кожи</div>
                       </div>
                    </div>
                  </div>

                  {/* Scrollable Content - Added phone-scrollbar class */}
                  <div className="flex-1 overflow-y-auto bg-[#FAFAFA] p-3 space-y-3 phone-scrollbar">
                     {/* Upload Section */}
                     <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <div className="font-bold text-sm mb-1 text-gray-900">Загрузите фото</div>
                        <div className="text-[11px] text-gray-500 mb-4 leading-tight">Сделайте фото лица при хорошем освещении для точного анализа</div>
                        <div className="relative rounded-2xl overflow-hidden shadow-inner bg-gray-50 flex items-center justify-center">
                           <img
                             src="/beautify-landing/skin-analysis.jpg"
                             alt="Freckled Skin Analysis"
                             className="w-full h-auto object-contain block"
                           />
                           <button className="absolute top-4 right-4 w-9 h-9 bg-[#E30613] text-white rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                              <X size={20} />
                           </button>
                        </div>
                     </div>

                     {/* Results Section */}
                     <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-5">
                           <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-accent-pink shrink-0">
                              <Sparkles className="w-5 h-5 fill-current" />
                           </div>
                           <div>
                              <div className="font-bold text-sm text-gray-900">Результат анализа</div>
                              <div className="text-[10px] text-gray-500">AI-рекомендации на основе фото</div>
                           </div>
                        </div>

                        <div className="space-y-6 text-[11px] leading-relaxed text-gray-600">
                            <p className="font-medium text-gray-800 italic">
                              Здравствуйте! Как профессиональный AI-косметолог, я внимательно изучил ваше фото. У вас очень характерный и по-своему очаровательный тип внешности. Давайте разберем состояние вашей кожи подробнее.
                            </p>

                            {/* Section 1 */}
                            <div>
                              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-xs">
                                 <span>🔍</span> Краткий анализ ситуации
                              </h4>
                              <p className="mb-2">На фото представлена кожа светлого фототипа (вероятно, I или II по Фитцпатрику), склонная к образованию веснушек (эфелидов).</p>
                              <ul className="space-y-2 pl-1">
                                 <li className="flex gap-2">
                                    <span className="text-accent-pink font-bold">•</span> 
                                    <span><strong className="text-gray-900">Положительные аспекты:</strong> Кожа выглядит живой и увлажненной, нет выраженных признаков воспалений (акне). Присутствует здоровое сияние.</span>
                                 </li>
                                 <li className="flex gap-2">
                                    <span className="text-accent-pink font-bold">•</span> 
                                    <span><strong className="text-gray-900">Тип кожи:</strong> Скорее всего, <strong className="text-gray-900">комбинированная</strong>, склонная к жирности в Т-зоне (заметен легкий блеск на носу).</span>
                                 </li>
                                 <li className="flex gap-2">
                                    <span className="text-accent-pink font-bold">•</span> 
                                    <span><strong className="text-gray-900">Особенности:</strong> Обильная гиперпигментация в виде веснушек — ваша генетическая особенность.</span>
                                 </li>
                              </ul>
                            </div>

                            <div className="h-px bg-gray-100" />

                            {/* Section 2 */}
                            <div>
                               <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-xs">
                                 <span>💡</span> Рекомендации по уходу
                              </h4>
                              <ol className="space-y-3 list-decimal pl-4 marker:text-accent-pink font-medium text-gray-600">
                                 <li><span className="font-normal"><strong className="text-gray-900">SPF 50+ круглый год:</strong> Правило №1 для вашего фототипа.</span></li>
                                 <li><span className="font-normal"><strong className="text-gray-900">Антиоксиданты (Витамин С):</strong> Поможет выровнять тон и придаст еще большее сияние.</span></li>
                                 <li><span className="font-normal"><strong className="text-gray-900">Ниацинамид:</strong> Нормализует себум и визуально сузит поры.</span></li>
                                 <li><span className="font-normal"><strong className="text-gray-900">PHA-кислоты:</strong> Деликатное обновление без раздражения.</span></li>
                                 <li><span className="font-normal"><strong className="text-gray-900">Легкие текстуры:</strong> Выбирайте флюиды и гели с гиалуроновой кислотой.</span></li>
                              </ol>
                            </div>

                            <div className="h-px bg-gray-100" />

                            {/* Section 3 */}
                            <div>
                               <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-xs">
                                 <span>🗓</span> Порядок применения (Утро)
                              </h4>
                              <div className="bg-gray-50 p-2.5 rounded-xl space-y-1.5 border border-gray-100">
                                <div className="flex justify-between"><span>1. Очищение</span><span className="text-accent-pink font-bold">✓</span></div>
                                <div className="flex justify-between"><span>2. Витамин С</span><span className="text-accent-pink font-bold">✓</span></div>
                                <div className="flex justify-between"><span>3. Увлажнение</span><span className="text-accent-pink font-bold">✓</span></div>
                                <div className="flex justify-between"><span>4. SPF 50</span><span className="text-accent-pink font-bold">✓</span></div>
                              </div>
                            </div>

                             {/* Warnings */}
                            <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                               <div className="flex gap-2 items-start text-orange-700">
                                  <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                                  <div className="text-[10px] leading-relaxed">
                                    <span className="font-bold uppercase tracking-tighter">⚠️ Предупреждение:</span> Избегайте прямых лучей в пиковые часы (11:00-16:00), ваша кожа крайне уязвима к ожогам.
                                  </div>
                               </div>
                            </div>
                            
                            <p className="text-[9px] text-gray-400 italic mt-4">
                              Примечание: Рекомендации носят ознакомительный характер. При изменении формы пятен обратитесь к дерматологу.
                            </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent-pink/20 text-text-primary"><Camera size={20} /></div>
                <Badge color="pink">AI Vision</Badge>
              </div>
              <Heading level={3}>Анализ фото и диагностика</Heading>
              <Text className="mb-4">
                Пользователь загружает фото, и модуль на базе Gemini проводит детальный анализ, определяя фототип, состояние пор, наличие пигментации и другие особенности.
              </Text>
              <ul className="space-y-3">
                 {[
                   "Автоматическое определение типа кожи по Фитцпатрику",
                   "Выявление зон гиперпигментации и веснушек",
                   "Анализ микрорельефа и состояния пор",
                   "Формирование ежедневного графика ухода (утро/вечер)"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-text-secondary">
                     <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-peach" />
                     {item}
                   </li>
                 ))}
              </ul>
            </div>
          </div>

          {/* Feature 2: Chat & Consultation */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent-blue/20 text-text-primary"><MessageCircle size={20} /></div>
                <Badge color="blue">Системный Промпт</Badge>
              </div>
              <Heading level={3}>Умный косметолог в чате</Heading>
              <Text className="mb-4">
                Мы настроили роль "AI-косметолога", который общается вежливо, заботливо и профессионально.
              </Text>
               <Text>
                Система учитывает данные профиля (возраст, аллергии, цели) при формировании каждого ответа, избегая общих фраз.
              </Text>
            </div>
            <div className="bg-white rounded-[2rem] p-6 shadow-xl -rotate-1 hover:rotate-0 transition-transform duration-500 border border-border">
               <div className="space-y-4">
                 <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0" />
                   <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 text-sm text-text-secondary max-w-[80%]">
                     Как мне избавиться от сухости зимой?
                   </div>
                 </div>
                 <div className="flex gap-3 flex-row-reverse">
                   <div className="w-8 h-8 rounded-full bg-accent-pink shrink-0 flex items-center justify-center text-white text-xs">AI</div>
                   <div className="bg-surface border border-accent-pink/20 rounded-2xl rounded-tr-none p-3 text-sm text-text-primary max-w-[80%]">
                     Для зимнего ухода рекомендую добавить плотные кремы с церамидами...
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Feature 3: Profile & Calendar */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
             <Card className="md:col-span-1">
                <Smartphone className="w-8 h-8 text-accent-peach mb-4" />
                <Heading level={3} className="text-xl">UX/UI Дизайн</Heading>
                <Text className="text-base">
                   Разработаны экраны авторизации, профиля и календаря. Использован Tailwind CSS для "воздушного" интерфейса.
                </Text>
             </Card>
             <Card className="md:col-span-1">
                <Calendar className="w-8 h-8 text-accent-blue mb-4" />
                <Heading level={3} className="text-xl">Трекер ухода</Heading>
                <Text className="text-base">
                   Интерактивный календарь для отметки утренних и вечерних рутин. Помогает формировать привычки.
                </Text>
             </Card>
             <Card className="md:col-span-1">
                <ShieldCheck className="w-8 h-8 text-state-success mb-4" />
                <Heading level={3} className="text-xl">Безопасность</Heading>
                <Text className="text-base">
                   Защищенная авторизация и хранение персональных данных пользователей через Supabase.
                </Text>
             </Card>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default Workflow;