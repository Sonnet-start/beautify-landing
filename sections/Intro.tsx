import React from 'react';
import { Section, Container, Heading, Text, Card } from '../components/UI';
import { AlertCircle, Target, ListChecks } from 'lucide-react';

const Intro: React.FC = () => {
  return (
    <Section id="intro">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-peach font-serif text-lg italic mb-2 block">Введение</span>
          <Heading level={2}>О проекте</Heading>
          <Text>
            Цифровое решение проблемы выбора ухода в перенасыщенном информацией мире.
          </Text>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="h-full">
            <div className="w-12 h-12 rounded-full bg-accent-pink/20 flex items-center justify-center mb-6">
              <AlertCircle className="text-text-primary w-6 h-6" />
            </div>
            <Heading level={3}>Актуальность</Heading>
            <Text>
              Современный рынок перенасыщен средствами, и пользователям сложно самостоятельно подобрать программу ухода. 
              Профессиональные консультации часто недоступны из-за стоимости или географии. 
              Наш проект демократизирует доступ к экспертным рекомендациям.
            </Text>
          </Card>

          <Card className="h-full">
            <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center mb-6">
              <Target className="text-text-primary w-6 h-6" />
            </div>
            <Heading level={3}>Цель работы</Heading>
            <Text>
              Разработать веб‑приложение <strong>«Мой личный косметолог»</strong>, предоставляющее персонализированные рекомендации 
              на основе анализа данных пользователя и фотографий с применением искусственного интеллекта.
            </Text>
          </Card>
        </div>

        <Card className="bg-white/50 backdrop-blur-sm">
          <div className="flex items-start gap-6">
             <div className="hidden md:flex w-12 h-12 rounded-full bg-state-success/20 items-center justify-center shrink-0">
               <ListChecks className="text-state-success w-6 h-6" />
             </div>
             <div>
               <Heading level={3} className="mb-6">Ключевые задачи</Heading>
               <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                 {[
                   "Анализ аналогов и формирование требований",
                   "Проектирование UX/UI и архитектуры",
                   "Интеграция AI-модуля (Gemini) для анализа фото",
                   "Реализация системы профиля и трекера ухода",
                   "Разработка интерфейса (Next.js + Tailwind)",
                   "Обеспечение безопасности данных (Supabase)"
                 ].map((task, idx) => (
                   <div key={idx} className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-accent-peach shrink-0" />
                     <Text className="text-base">{task}</Text>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
};

export default Intro;
