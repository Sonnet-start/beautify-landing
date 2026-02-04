import React from 'react';
import { Section, Container, Heading, Text, Card } from '../components/UI';
import { Heart, TrendingUp, BookOpen } from 'lucide-react';

const Conclusion: React.FC = () => {
  return (
    <Section id="conclusion">
      <Container>
        <div className="grid md:grid-cols-2 gap-16">
           <div>
             <span className="text-accent-peach font-serif text-lg italic mb-2 block">Итоги</span>
             <Heading level={2}>Заключение</Heading>
             <Text className="mb-6">
                В ходе работы создан функциональный прототип, объединяющий современные технологии (AI, SSR) 
                и реальные потребности пользователей в качественном уходе.
             </Text>
             <div className="p-6 bg-accent-peach/10 rounded-2xl border border-accent-peach/20">
               <Text className="text-base italic">
                 "Проект обладает высоким потенциалом для развития в полноценный коммерческий цифровой продукт."
               </Text>
             </div>
           </div>

           <div>
              <Heading level={3} className="mb-8">Возможности развития</Heading>
              <div className="space-y-6">
                 <Card hover={false} className="flex gap-4 items-start p-6">
                    <BookOpen className="w-6 h-6 text-accent-blue mt-1 shrink-0" />
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-1">База знаний</h4>
                      <p className="text-sm text-text-secondary">Расширение библиотеки статей и проверенных средств.</p>
                    </div>
                 </Card>
                 <Card hover={false} className="flex gap-4 items-start p-6">
                    <TrendingUp className="w-6 h-6 text-state-success mt-1 shrink-0" />
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-1">Аналитика</h4>
                      <p className="text-sm text-text-secondary">Глубокая статистика прогресса состояния кожи.</p>
                    </div>
                 </Card>
              </div>
           </div>
        </div>
        
        <div className="mt-24 text-center">
           <div className="inline-flex flex-col items-center">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 text-accent-pink animate-pulse">
                <Heart fill="currentColor" />
             </div>
             <Heading level={3}>Спасибо за внимание!</Heading>
             <Text>Мой личный косметолог — забота в каждом пикселе.</Text>
           </div>
        </div>
      </Container>
    </Section>
  );
};

export default Conclusion;
