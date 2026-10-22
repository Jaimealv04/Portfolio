import { useLanguage } from '../../contexts/LanguageContext';
import { siteConfig } from '../../config/site';
import { Card, Reveal, RevealItem, Section } from '../ui';

export const About = () => {
  const { t } = useLanguage();

  return (
    <Section id="about" title={t.about.title} width="lg">
      <Reveal>
        <p className="text-pretty mx-auto max-w-3xl text-center text-xl leading-relaxed text-muted-foreground md:text-2xl md:leading-relaxed">
          {t.about.description}
        </p>
      </Reveal>

      <Reveal staggerChildren={0.1} className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {siteConfig.stats.map((stat) => (
          <RevealItem key={stat.labelKey}>
            <Card className="flex h-full flex-col items-center justify-center px-6 py-10 text-center hover:shadow-lifted">
              <span className="font-display text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                {stat.value}
              </span>
              <span className="mt-3 text-[15px] font-medium text-muted-foreground">
                {t.about.stats[stat.labelKey]}
              </span>
            </Card>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
};
