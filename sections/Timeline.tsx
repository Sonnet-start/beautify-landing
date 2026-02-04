import React from 'react';
import { Section, Container, Heading, Text } from '../components/UI';
import { CheckCircle2, CircleDashed } from 'lucide-react';

const Timeline: React.FC = () => {
  const steps = [
    { title: "Исследование предметной области", status: 'done' },
    { title: "Проектирование UX/UI", status: 'done' },
    { title: "Разработка инфраструктуры", status: 'done' },
    { title: "Интеграция AI (Чат & Фото)", status: 'done' },
    { title: "Профиль и календарь", status: 'done' },
    { title: "Тестирование и оптимизация", status: 'done' },
    { title: "Расширение базы знаний", status: 'pending' },
    { title: "Каталог средств", status: 'pending' },
  ];

  return (
    <Section id="roadmap">
      <Container>
         <div className="text-center mb-16">
            <span className="text-accent-peach font-serif text-lg italic mb-2 block">План развития</span>
            <Heading level={2}>Дорожная карта проекта</Heading>
         </div>

         <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:hidden" />

            <div className="space-y-8">
              {steps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex items-center md:justify-between ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Spacer for desktop layout */}
                    <div className="hidden md:block w-5/12" />

                    {/* Icon Node */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 bg-bg p-1">
                       {step.status === 'done' ? (
                         <CheckCircle2 className="w-8 h-8 text-state-success fill-green-100" />
                       ) : (
                         <CircleDashed className="w-8 h-8 text-text-secondary" />
                       )}
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                       <div className={`p-6 rounded-2xl border ${step.status === 'done' ? 'bg-white border-accent-pink/30' : 'bg-transparent border-dashed border-border'}`}>
                          <h4 className={`font-serif text-xl ${step.status === 'done' ? 'text-text-primary' : 'text-text-secondary'}`}>
                            {step.title}
                          </h4>
                          <span className={`text-xs uppercase tracking-wider font-bold mt-2 inline-block ${step.status === 'done' ? 'text-state-success' : 'text-text-secondary'}`}>
                            {step.status === 'done' ? 'Завершено' : 'В планах'}
                          </span>
                       </div>
                    </div>

                  </div>
                );
              })}
            </div>
         </div>
      </Container>
    </Section>
  );
};

export default Timeline;
